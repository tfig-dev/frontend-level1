'use client';
import React, { useMemo, useState } from 'react';
import { ISidebarItem } from '.';
import { ChevronDown } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

import SubmenuItem from './submenu-item';

const SidebarItem = ({ item }: { item: ISidebarItem }) => {
  const { name, icon: Icon, items, path } = item;
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const onClick = () => {
    if (items && items.length > 0) return setExpanded(!expanded);

    router.push(path);
  };

  const isActive = useMemo(() => {
    if (items && items.length > 0)
      if (items.find((item) => item.path === pathname)) {
        setExpanded(true);
        return true;
      }

    return pathname === path;
  }, [items, path, pathname]);

  return (
    <>
      <div
        className={`flex cursor-pointer items-center justify-between rounded-xl bg-sidebar-background p-3 text-sidebar-category hover:bg-sidebar-hover 
            ${isActive && 'bg-sidebar-selected shadow-md'}`}
        onClick={onClick}
      >
        <div className='flex items-center space-x-5'>
          <Icon size={26} />
          <p className='text-sm font-semibold uppercase'>{name}</p>
        </div>
        {items && items.length > 0 && (
          <ChevronDown
            size={18}
            className={`${expanded ? 'delay-50 rotate-180 transition' : 'delay-50 transition'}`}
          />
        )}
      </div>

      {expanded && items && items.length > 0 && (
        <div className={`"flex ml-10 flex-col space-y-5`}>
          {items.map((item) => (
            <SubmenuItem key={item.path} item={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default SidebarItem;
