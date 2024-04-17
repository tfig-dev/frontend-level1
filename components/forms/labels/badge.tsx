import React from 'react';

const Badge = ({ label }: { label: string }) => {
  return (
    <span className='me-2 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300'>
      {label}
    </span>
  );
};

export default Badge;
