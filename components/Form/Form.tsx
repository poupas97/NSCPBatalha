import React, {
  ForwardedRef,
  ReactElement,
  forwardRef,
  isValidElement,
  useEffect,
  useImperativeHandle,
} from 'react';
import { useFormik, } from 'formik';
import { FormItem, FormProps, FormRefProps, Item } from './types';
import FormInput from './FormInput';
import Box from '~/primitive/Box';
import { ObjectOfAny } from '~/types';
import { FormGroup } from './components';
import FormDropdown from './FormDropdown';
import FormNumber from './FormNumber';

const Form = forwardRef(<T extends ObjectOfAny>(props: FormProps<T>, ref: ForwardedRef<FormRefProps<T>>) => {
  const { initialValue, items, validationSchema, onValidate, } = props;

  const { handleBlur, setFieldValue, setFieldTouched, values, errors, touched, isValid, validateForm, resetForm } =
    useFormik<T>({
      initialValues: initialValue || ({} as T),
      validationSchema,
      validateOnMount: true,
      onSubmit: () => { },
    });

  const markAllTouched = (itemsToMark: FormItem | FormItem[] = items) => {
    if (Array.isArray(itemsToMark)) {
      itemsToMark.forEach((itemOrRow) => {
        markAllTouched(itemOrRow);
      });

      return;
    }

    if (isValidElement(itemsToMark) /*|| itemsToMark.type === 'note'*/) return;

    setFieldTouched(itemsToMark.field, true);
  };

  useImperativeHandle(
    ref,
    () => ({
      onSubmit: async () => {
        await markAllTouched();

        const validateErrors = await validateForm();

        // if (!isEmpty(validateErrors)) {
        //   return undefined;
        // }

        return values;
      },
      reset: () => {
        resetForm();
      },
    }),
    
    [validateForm, values]// eslint-disable-line react-hooks/exhaustive-deps
  );

  useEffect(() => {
    onValidate?.(isValid);
  }, [isValid]);// eslint-disable-line react-hooks/exhaustive-deps

  const findNextField = (rowIndex: number, fieldIndex: number): Item => {
    const row = items[rowIndex];
    const lastInRow = fieldIndex === (Array.isArray(row) ? row.length - 1 : 0);
    let next;

    if (lastInRow) {
      next = items[rowIndex + 1];
    } else {
      next = Array.isArray(row) ? row[fieldIndex + 1] : row;
    }

    if (next && Array.isArray(next)) {
      [next] = next;
    }

    if (next?.type !== undefined || next?.type === 'input' || next?.locked) {
      if (lastInRow) return findNextField(rowIndex + 1, 0);

      return findNextField(rowIndex, fieldIndex + 1);
    }

    return next;
  };

  const renderField = (current: Item, rowIndex: number, fieldIndex: number, lastInRow: boolean) => {
    const next = findNextField(rowIndex, fieldIndex);

    switch (current.type) {
      case 'dropdown':
        return (
          <FormDropdown
            key={`form-dropdown-${current.field}`}
            dropdown={current}
            values={values}
            lastInRow={lastInRow}
            errors={errors}
            touched={touched}
            setFieldValue={setFieldValue}
            setFieldTouched={setFieldTouched}
            handleBlur={handleBlur}
            nextField={next?.field}
            validationSchema={validationSchema}
          />
        );

      case 'input':
        return (
          <FormInput
            key={`form-input-${current.field}`}
            input={current}
            values={values}
            lastInRow={lastInRow}
            errors={errors}
            touched={touched}
            setFieldValue={setFieldValue}
            setFieldTouched={setFieldTouched}
            handleBlur={handleBlur}
            nextField={next?.field}
            validationSchema={validationSchema}
          />
        );

      case 'number':
        return (
          <FormNumber
            key={`form-number-${current.field}`}
            input={current}
            values={values}
            lastInRow={lastInRow}
            errors={errors}
            touched={touched}
            setFieldValue={setFieldValue}
            setFieldTouched={setFieldTouched}
            handleBlur={handleBlur}
            nextField={next?.field}
            validationSchema={validationSchema}
          />
        );
    }
  };

  const renderFormLine = (itemOrRow: Item | Item[] | ReactElement, rowIndex: number) => {
    if (Array.isArray(itemOrRow))
      return itemOrRow.map((field, fieldIndex) =>
        renderField(field, rowIndex, fieldIndex, fieldIndex === itemOrRow.length - 1)
      );

    if (isValidElement(itemOrRow)) return itemOrRow;

    return renderField(itemOrRow, rowIndex, 0, true);
  };

  return (
    <Box>
      {items.map((row, rowIndex) => (
        <FormGroup key={`form-row-${rowIndex}`}>
          <>{renderFormLine(row, rowIndex)}</>
        </FormGroup>
      ))}
    </Box>
  );
});

Form.displayName="Form"

export default Form;
