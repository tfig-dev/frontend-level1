import { CirclePlus } from 'lucide-react';
import React from 'react';
import styles from './buttons.module.scss';

const CreateButton = () => {
  return (
    <button type='button' className={`${styles.create}`}>
      <CirclePlus className={`${styles.create__icon}`} />
      Nova Despesa
    </button>
  );
};

export default CreateButton;
