import React, { ChangeEvent, ChangeEventHandler, memo } from 'react';
import _get from 'lodash.get';
import { FormikErrors, FormikHandlers, FormikHelpers, FormikTouched } from 'formik';
import { FormError, FormGroupItem, FormTitle, FormSelect as Select } from './components';
import { DropdownOption, DropdownType, FormProps } from './types';
import { ObjectOfAny } from '~/types';
import Grid, { GridItem } from '~/primitive/Grid';
import Text from '~/primitive/Text';

type Props<T> = {
  dropdown: DropdownType;
  values: T;
  lastInRow?: boolean;
  errors: FormikErrors<T>;
  touched: FormikTouched<T>;
  setFieldValue: FormikHelpers<T>['setFieldValue'];
  handleBlur: FormikHandlers['handleBlur'];
  setFieldTouched: FormikHelpers<T>['setFieldTouched'];
  nextField?: string;
  validationSchema: FormProps<T>['validationSchema'];
};

const FormDropdown = <T extends ObjectOfAny>(props: Props<T>) => {
  const {
    dropdown,
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

  const path = dropdown.field
    .split('.')
    .map((node) => `fields.${node}`)
    .join('.');

  const required = _get(validationSchema, `${path}.spec.presence`) === 'required';
  const alreadyTouched = !!_get(touched, dropdown.field);
  const errorMessage = (alreadyTouched ? _get(errors, dropdown.field) : null) as string | null;
  const hasError = alreadyTouched && !!errorMessage;
  const currentValue = _get(values, dropdown.field, '');

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    setFieldTouched(dropdown.field, true);
    setFieldValue(dropdown.field, value);
  };

  const onClick = (value: DropdownOption['value']) => () => {
    setFieldTouched(dropdown.field, true);
    setFieldValue(dropdown.field, value);
  };

  return (
    <FormGroupItem lastInRow={lastInRow}>
      <FormTitle hasError={hasError}>
        {`${dropdown.label} ${required ? '*' : ''}`}
      </FormTitle>
      {dropdown.options.length > 6 ? (
        <Select
          onChange={onChange}
          onBlur={handleBlur(dropdown.field)}
          value={currentValue}
          disabled={dropdown.locked}
          hasError={hasError}
        >
          {dropdown.options.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </Select>
      ) : (
        <Grid columns={6} gapX={20} gapY={20}>
          {dropdown.options.map((item,) => (
            <GridItem key={item.value}>
              <Text onClick={onClick(item.value)} bold={item.value === currentValue}>{item.label}</Text>
            </GridItem>
          ))}
        </Grid>
      )}
      <>
        {!!errorMessage && <FormError>{errorMessage}</FormError>}
      </>
    </FormGroupItem >
  );
};

export default memo(FormDropdown);
