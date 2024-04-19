import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
    return (
        <>
            <div className="navbar fixed z-10 bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">John Doe</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <NavLink to="/">
                            <li className="p-2 bg-base-100 rounded-t-none">
                                <summary>Home</summary>
                            </li>
                        </NavLink>
                        <NavLink to="services">
                            <li className="p-2 bg-base-100 rounded-t-none">
                                <summary>Services</summary>
                            </li>
                        </NavLink>
                        <NavLink>
                            <li className="p-2 bg-base-100 rounded-t-none">
                                <summary>Skills</summary>
                            </li>
                        </NavLink>
                        <NavLink>
                            <li className="p-2 bg-base-100 rounded-t-none">
                                <summary>Projects</summary>
                            </li>
                        </NavLink>
                        <NavLink>
                            <li className="p-2 bg-base-100 rounded-t-none">
                                <summary>Testimonials</summary>
                            </li>
                        </NavLink>
                        <NavLink>
                            <li className="p-2 bg-base-100 rounded-t-none">
                                <summary>Contact</summary>
                            </li>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Header;
