"use client";
import React, { useMemo, useState } from 'react'
import { ISidebarItem } from '.'
import { ChevronDown, CircleChevronDown } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

import SubmenuItem from './submenu-item';

const SidebarItem = ({item}: {item: ISidebarItem}) => {

    const {name, icon: Icon, items, path} = item;
    const [expanded, setExpanded] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const onClick = () => {

        if (items && items.length > 0)
            return setExpanded(!expanded);

        router.push(path);
    };

    const isActive = useMemo(() => {
        if (items && items.length > 0) 
            if(items.find(item => item.path === pathname)) {
                setExpanded(true);
                return true;
            }
        
        return pathname === path;
    }, [items, path, pathname]);


  return (
    <>
        <div 
            className={`flex items-center p-3 bg-sidebar-background rounded-xl hover:bg-sidebar-hover cursor-pointer justify-between text-sidebar-category 
            ${isActive && "bg-sidebar-selected"}`}
            onClick={onClick}
        >
            <div className='flex items-center space-x-5'>
                <Icon size={26}/>
                <p className='text-sm font-semibold uppercase'>
                    {name}
                </p>
            </div>
            {items && items.length > 0 && (
                <CircleChevronDown size={18} 
                className={expanded ? "rotate-180 duration-250" :""}
                />
            )}
        </div>

        {expanded && items && items.length > 0 && (
            <div className='flex flex-col space-y-5 ml-10'>
                {items.map(item => (
                <SubmenuItem key={item.path} item={item}/>
                ))}
            </div>
            )}
    </>
  )
}

export default SidebarItem