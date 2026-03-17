import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';


const navItems = [
  {
    id: "nav-001",
    name: "Home",
    path: "/",
    purpose: "Landing page overview and quick access to core features"
  },
  {
    id: "nav-002",
    name: "Dashboard",
    path: "/dashboard",
    purpose: "User-specific insights, stats, and activity tracking"
  },
  {
    id: "nav-003",
    name: "Projects",
    path: "/projects",
    purpose: "View, manage, and create user projects"
  },
  {
    id: "nav-004",
    name: "Profile",
    path: "/profile",
    purpose: "User account details, settings, and preferences"
  },
  {
    id: "nav-005",
    name: "Support",
    path: "/support",
    purpose: "Help center, FAQs, and contact support"
  }
];

const Navbar = () => {

    const [open , setOpen] = useState(false) ;
    const Links =   navItems.map(route => <li key={route.path} className='mr-10'><a href={route.path}>{route.name}</a></li> ) ;

    return (
        
       <nav className='flex justify-between mx-10'>
        <span className='flex gap-4' onClick={()=> setOpen(!open)}>
            {open? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu>}
            <ul className='md:hidden'>
                {Links}
            </ul>
            
        <h3 className='ml-4'>My navbar</h3>
        </span>
        <ul className='md:flex hidden'>
            {
                Links
              
            }
        </ul>
        <button>Sign In</button>
       </nav>
    );
};

export default Navbar;