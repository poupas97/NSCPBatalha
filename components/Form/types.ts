import { FormikConfig } from 'formik/dist/types';
import { ReactElement } from 'react';

export type InputType = {
  field: string;
  label: string;
  locked?: boolean;
  type?: 'input';
  flex?: number;
  template?: string;
} /*& Pick<InputProps, 'placeholder' | 'keyboardType' | 'exclusionExpression' | 'noKeyboardValidation'>*/;



export type Item = (InputType);

export type FormItem = Item | Item[] | ReactElement;

export type FormProps<T> = {
  items: (Item | Item[] | ReactElement)[];
  onValidate?: (isValid: boolean) => void;
  initialValue?: T;
} & Pick<FormikConfig<T>, 'validationSchema'>

export interface FormRefProps<T> {
  onSubmit: () => Promise<T | undefined>;
  reset: () => void;
}
