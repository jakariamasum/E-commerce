'use client'
import React, { useState } from 'react';
import { adminNavOptions, navOptions } from '@/utils';
import { build } from 'joi';

const Navbar = () => {
    const isAdmin = false;
    const isAuthUser = false;
    const user = {
        role: 's'
    };

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    function NavItems() {
        return (
            <div className={`md:flex md:w-auto ${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:border-0">
                    {
                        isAdmin ? adminNavOptions.map(item => <li className='block cursor-pointer py-2 pl-3 pr-4 text-gray-900 rounded md:p-0' key={item.id}>{item.label}</li>) : navOptions.map(item => <li className='block cursor-pointer py-2 pl-3 pr-4 text-gray-900 rounded md:p-0' key={item.id}>{item.label}</li>)
                    }
                </ul>
            </div>
        )
    }

    return (
        <div>
            <nav className='bg-white text-black fixed w-full z-20 top-0 left-0 border-b border-gray-200'>
                <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
                    <div className="flex items-center cursor-pointer">
                        <span className='self-center text-2xl font-semibold whitespace-normal'>
                            E-Shop
                        </span>
                    </div>
                    <div className='flex md:order-2 gap-2'>
                        {!isAdmin && isAuthUser ? (
                            <Fragment>
                                <button>Account</button>
                                <button>Cart</button>
                            </Fragment>
                        ) : null}
                        {
                            user?.role === 'admin' ?
                                (isAdmin ? <button>Client View</button> : <button>Admin View</button>)
                                : null
                        }
                        {
                            isAuthUser ? <button>Logout</button> : <button>Login</button>
                        }
                    </div>
                    <div className='md:hidden'>
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>

                        </button>
                    </div>
                    <NavItems />
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
