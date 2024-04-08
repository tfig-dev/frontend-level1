import React, { useMemo } from 'react'
import { ISubItem } from './sidebar'
import { usePathname, useRouter } from 'next/navigation';

const SubmenuItem = ({item}: {item: ISubItem}) => {

const {name, path} = item;
const router = useRouter();
const pathname = usePathname();

const onClick = () => {
    router.push(path);
}

const isActive = useMemo(() => {
    return pathname === path;
}, [path, pathname]);

  return (
    <div
        className={`text-sm hover:text-sidebar-hoversub font-semibold uppercase text-sidebar-subcategory cursor-pointer 
        ${isActive ? "text-sidebar-hoversub ":""}`}
        onClick={onClick}
    >
        {name}
    </div> 
    )
}

export default SubmenuItem;