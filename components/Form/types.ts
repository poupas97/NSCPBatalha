import { FormikConfig } from 'formik/dist/types';
import { ReactElement } from 'react';

export type InputType = {
  field: string;
  label: string;
  locked?: boolean;
  type?: 'input';
  template?: string;
} /*& Pick<InputProps, 'placeholder' | 'keyboardType' | 'exclusionExpression' | 'noKeyboardValidation'>*/;

export type DropdownOption = { label: string, value: string }

export type DropdownType = {
  field: string;
  label: string;
  locked?: boolean;
  type?: 'dropdown';
  options: DropdownOption[]
};

export type NumberType = {
  field: string;
  label: string;
  locked?: boolean;
  type?: 'number';
  min?: number
};

export type Item = (InputType | DropdownType | NumberType);

export type FormItem = Item | Item[] | ReactElement;

export type FormProps<T> = {
  items: (Item | Item[] | ReactElement)[];
  onValidate?: (isValid: boolean) => void;
  initialValue?: T;
  validationSchema: FormikConfig<T>['validationSchema']
}

export interface FormRefProps<T> {
  onSubmit: () => Promise<T | undefined>;
  reset: () => void;
}
