import React, { useMemo } from 'react';
import { ISubItem } from '.';
import { usePathname, useRouter } from 'next/navigation';

const SubmenuItem = ({ item }: { item: ISubItem }) => {
  const { name, path } = item;
  const router = useRouter();
  const pathname = usePathname();

  const onClick = () => {
    router.push(path);
  };

  const isActive = useMemo(() => {
    return pathname === path;
  }, [path, pathname]);

  return (
    <div
      className={`cursor-pointer text-sm font-semibold uppercase text-sidebar-subcategory hover:text-sidebar-hoversub 
        ${isActive ? 'text-sidebar-hoversub ' : ''}`}
      onClick={onClick}
    >
      {name}
    </div>
  );
};

export default SubmenuItem;
