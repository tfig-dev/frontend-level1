import React from 'react';
import styles from './forms.module.scss';

const DividerForm = ({ label }: { label: string }) => {
  return (
    <div className={styles.divider}>
      <p className={styles.divider__label}>{label}</p>
      <div className={styles.divider__line}></div>
    </div>
  );
};

export default DividerForm;
