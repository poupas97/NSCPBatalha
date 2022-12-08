import React, { ChangeEvent, ChangeEventHandler, memo } from 'react';
import _get from 'lodash.get';
import { FormikErrors, FormikHandlers, FormikHelpers, FormikTouched } from 'formik';
import { FormError, FormGroupItem, FormTitle, FormInput as Input } from './components';
import { InputType, FormProps } from './types';
import { ObjectOfAny } from '~/types';

type Props<T> = {
  input: InputType;
  values: T;
  lastInRow?: boolean;
  errors: FormikErrors<T>;
  touched: FormikTouched<T>;
  setFieldValue: FormikHelpers<T>['setFieldValue'];
  handleBlur: FormikHandlers['handleBlur'];
  setFieldTouched: FormikHelpers<T>['setFieldTouched'];
  nextField?: string;
  validationSchema: FormProps<T>['validationSchema'];
} /*& InputProps*/;

const FormInput = <T extends ObjectOfAny>(props: Props<T>) => {
  const {
    input,
    values,
    lastInRow,
    errors,
    touched,
    setFieldValue,
    handleBlur,
    setFieldTouched,
    nextField,
    validationSchema,
  } = props;

  const path = input.field
    .split('.')
    .map((node) => `fields.${node}`)
    .join('.');

  const required = _get(validationSchema, `${path}.spec.presence`) === 'required';
  const alreadyTouched = !!_get(touched, input.field);
  const errorMessage = (alreadyTouched ? _get(errors, input.field) : null) as string | null;
  const hasError = alreadyTouched && !!errorMessage;
  const currentValue = _get(values, input.field, '');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let nextValue = value


    if (input.template) {
      const nextChar = input.template[value.length];

      if (value.length > input.template.length) return;

      if (nextChar && nextChar !== '#' && String(currentValue).length <= value.length) {
        nextValue = `${nextValue}${nextChar}`;
      }
    }

    setFieldTouched(input.field, true);
    setFieldValue(input.field, nextValue);
  };

  return (
    <FormGroupItem lastInRow={lastInRow}>
      <FormTitle hasError={hasError}>
        {`${input.label} ${required ? '*' : ''}`}
      </FormTitle>
      <Input
        onChange={onChange}
        onBlur={handleBlur(input.field)}
        value={currentValue}
        disabled={input.locked}
        hasError={hasError}
      />
      <>
        {!!errorMessage && <FormError>{errorMessage}</FormError>}
      </>
    </FormGroupItem>
  );
};

export default memo(FormInput);
