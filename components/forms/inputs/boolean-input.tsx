import React from 'react';
import styles from '../forms.module.scss';
import { DateInputProps } from '@/interfaces/FormProps';

const BooleanInput = ({ label, size, register }: DateInputProps) => {
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
        <input
          {...register}
          type='checkbox'
          value=''
          className={styles.checkbox}
        ></input>
      </div>
    </div>
  );
};

export default BooleanInput;
