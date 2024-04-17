import React from 'react';
import styles from '../forms.module.scss';

export interface LabelProps {
  label: string;
  size: string;
}

const Label = ({ label, size }: LabelProps) => {
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

  return <div className={labelClassName}>{label}</div>;
};

export default Label;
