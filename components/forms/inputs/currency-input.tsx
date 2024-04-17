import React, { useState } from 'react';
import styles from '../forms.module.scss';
import { UseFormRegisterReturn } from 'react-hook-form';

interface Option {
  id: string;
  value: string;
}
interface FormInputProps {
  label: string;
  size: string;
  register: UseFormRegisterReturn;
  options: Option[];
}

const CurrencyInput = ({ label, size, register, options }: FormInputProps) => {
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

  const [selectedCurrency, setSelectedCurrency] = useState('EUR');

  return (
    <div className={styles.line}>
      <label className={labelClassName}>{label}</label>

      <div className={styles.currency}>
        <div className={styles.currency__icon}>
          <span className={styles.currency__icon__label}>
            {options.find((opt) => opt.id === selectedCurrency)?.value}
          </span>
        </div>

        <input
          {...register}
          type='number'
          className={`${styles.field} ${styles.field__large} pl-9 pr-20`}
          placeholder='00.0'
        />

        <div className={styles.currency__selector}>
          <select
            defaultValue={'EUR'}
            className={`${styles.currency__selector__label}`}
            onChange={(e) => setSelectedCurrency(e.target.value)}
          >
            {options.map((field) => (
              <option key={field.id} value={field.id}>
                {field.id}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default CurrencyInput;
