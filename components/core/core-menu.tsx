"use client"
import { useState, useEffect, use } from 'react'
// import Menu from '../ui/menu/menu';
import Link from "next/link";
import Image from "next/image";
import Logo from '@/public/core/jsMain-logo.svg';

const links: { title: string; href: string; }[] = [
    {
        title: "Resume",
        href: "/resume"
    },
    // {
    //     title: "Projects",
    //     href: "/projects"
    // },
    // {
    //     title: "Adventures",
    //     href: "/adventures"
    // },
]



export function CoreMenu() {
    // Navmenu Controls
    const [navIsOpened, setNavIsOpened] = useState(false);
    const closeNavbar = () => {
        setNavIsOpened(false);
    };
    const toggleNavbar = () => {
        setNavIsOpened(navIsOpened => !navIsOpened);
    };

    useEffect(() => {
        const onResize = () => {
            closeNavbar()
        }
        

        window.addEventListener('resize', onResize)
    }, [])

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            // Check if the click is outside of the menu
            const menu = document.getElementById('site-menu');
            const isClickInsideMenu = menu && menu.contains(event.target as Node);

            if (!isClickInsideMenu) {
                console.log("out")
                console.log("Close Here")
                closeNavbar()
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    



    // Style Constants
    const NavItemBasic: string = "inline-flex h-10 items-center justify-center rounded-md bg-background text-sm font-medium transition-colors";
    const NavItemHover: string = "hover:bg-accent hover:text-accent-foreground";
    const LogoStyles: string = `${NavItemBasic} ${NavItemHover}    w-fit `;
    const NavItemSpacing: string = `px-4 py-2 w-full `;
    const NavItem: string = `${NavItemBasic} ${NavItemHover} ${NavItemSpacing}    `; //lg:w-fit

    return (
        <>
            <header id='site-menu' className="sticky top-0 w-full flex items-center h-20 border-b border-b-gray-100 dark:border-b-gray-900 z-40 bg-white dark:bg-gray-950/80 backdrop-filter backdrop-blur-xl">
            <style jsx>{`
                details summary::-webkit-details-marker {
                display: none;
                }

                summary {
                list-style: none;
                }
            `}</style>
                <nav className=" container relative mx-auto w-full flex gap-x-5 justify-between lg:justify-start items-center">
                    <div className='flex items-center w-96 max-w-fit '>
                        <Link onClick={closeNavbar} href="/" passHref className={ LogoStyles }>
                            <Image src={ Logo } alt='Jacob Sargent' className='cursor-pointer'/>
                        </Link>
                    </div>
                    <div className={`
                            absolute top-full left-0 bg-white dark:bg-gray-950 lg:bg-transparent border-b border-gray-200 dark:border-gray-800 py-8 lg:py-0 px-5 sm:px-10 md:px-12 lg:px-0 lg:border-none w-full lg:top-0 lg:relative lg:w-max lg:flex md:transition-none gap-x-6
                            ${navIsOpened ? "duration-300 ease-linear visible opacity-100 translate-y-0" : "duration-300 ease-linear translate-y-10 opacity-0 invisible lg:visible lg:translate-y-0 lg:opacity-100"}
                        `}
                    >
                        <ul className="flex flex-col lg:flex-row gap-6 lg:items-center text-gray-700 dark:text-gray-300 lg:w-full lg:justify-center">
                            { links.map((link) => (
                            <li key={link.title}>
                                <Link onClick={closeNavbar} href={ link.href } className={ NavItem }>{ link.title }</Link>
                            </li>
                            )) }
                        </ul>
                    </div>
                    <div className="flex items-center lg:hidden">
                        <button onClick={() => {
                            toggleNavbar()
                        }} aria-label='toggle navbar' className="outline-none border-l border-l-gray-100 dark:border-l-gray-800 pl-3 relative py-3">
                            <span aria-hidden={true} className={`
                                flex h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-300 transition duration-300
                                ${navIsOpened ? "rotate-45 translate-y-[.324rem]" : ""}
                            `}>
                            </span>
                            <span aria-hidden={true} className={`
                                mt-2 flex h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-300 transition duration-300
                                ${navIsOpened ? "-rotate-45 -translate-y-[.324rem]" : ""}
                            `} />
                        </button>
                    </div>
                </nav>

            </header>
        </>
    )
}


