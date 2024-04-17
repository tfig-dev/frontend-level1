import React from 'react';

interface BadgeProps {
  label?: string;
}

const Badge = ({ label }: BadgeProps) => {
  return label ? (
    <span className='me-2 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300'>
      {label}
    </span>
  ) : null;
};

export default Badge;
