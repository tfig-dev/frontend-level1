"use client";
import React from 'react'

import { Car, CircleCheckBig, Eye, FilePlus2, FileText, LayoutDashboard, LucideIcon, Settings, UsersRound } from "lucide-react";
import SidebarItem from './item';

export interface ISidebarItem {
    name: string; 
    icon: LucideIcon;
    path: string;
    items?: ISubItem[];
}

export interface ISubItem {
    name: string;
    path: string;
}

const items: ISidebarItem[] = [
    {
        name: "Dashboard",
        path: "/",
        icon: LayoutDashboard,
    },
    {
        name: "Despesas",
        path: "/expenses",
        icon: FilePlus2,
    },
    {
        name: "Viagens",
        path: "/trips",
        icon: Car,
    }, {
        name: "Relatórios",
        path: "/reports",
        icon: FileText,
    }, {
        name: "Aprovação",
        path: "/approvals",
        icon: CircleCheckBig,
    }, {
        name: "Revisão",
        path: "/reviews",
        icon: Eye,
    }, {
        name: "Gestão",
        path: "/management",
        icon: UsersRound,
        items: [
            {
                name: "Utilizadores",
                path: "management/users"
            },
            {
                name: "Clientes",
                path: "management/clients"
            },
            {
                name: "Projetos",
                path: "management/projects"
            },
            {
                name: "Rotas",
                path: "management/routes"
            }
        ]
    },
    {
        name: "Configurações",
        path: "/settings",
        icon: Settings,
    }
];

const Sidebar = () => {
  return (
    <div className='fixed top-0 left-0 h-screen w-64 bg-sidebar-background shadow-lg z-10 p-3 drop-shadow-lg rounded-e-3xl rounded-t-none'>
        <div className='flex flex-col space-y-3 w-full'>
            <img className='p-6' src='/assets/images/logo_branco.png' alt='logo'/>
            <div className='flex flex-col space-y-1'>
                {items.map((item) => (
                    <SidebarItem key={item.path} item={item}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Sidebar