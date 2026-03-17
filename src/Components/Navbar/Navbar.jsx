import React from 'react';


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
    return (
       <nav>
        <ul className='flex'>
            {
                navItems.map(route => <li key={route.path} className='mr-10'><a href={route.path}>{route.name}</a></li>
)
            }
        </ul>
       </nav>
    );
};

export default Navbar;