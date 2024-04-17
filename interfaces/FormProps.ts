import { UseFormRegisterReturn } from 'react-hook-form';

export interface Option {
  id: string | number;
  value: string;
}

export interface FormInputProps {
  label: string;
  size: string;
  register: UseFormRegisterReturn;
  options: Option[];
}

export interface DateInputProps {
  label: string;
  size: string;
  register: UseFormRegisterReturn;
}
