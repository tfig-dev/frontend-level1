import React from 'react';
import styles from '../forms.module.scss';
import { FormInputProps } from '@/interfaces/FormProps';

const DefaultFormInput = ({
  label,
  size,
  register,
  options,
}: FormInputProps) => {
  const handleSelected = (value: string) => {
    console.log(value);
  };

  let labelClassName = '';

  switch (size) {
    case 'small':
      labelClassName = `${styles.label} ${styles.label__small}`;
      break;
    case 'medium':
      labelClassName = `${styles.label} ${styles.label__medium}`;
      break;
    case 'large':
      labelClassName = `${styles.label} ${styles.label__large}`;
      break;
    default:
      labelClassName = `${styles.label} ${styles.label__medium}`;
      break;
  }

  return (
    <div className={styles.line}>
      <label className={labelClassName}>{label}</label>
      <div className={styles.input_field}>
        <select
          {...register}
          defaultValue={''}
          className={`${styles.field} ${styles.field__small} ${styles.select}`}
          //onChange={handleSelected}
        >
          <option value=''>Selecionar</option>
          {options.map((field) => (
            <option key={field.id} value={field.id}>
              {field.value}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DefaultFormInput;
