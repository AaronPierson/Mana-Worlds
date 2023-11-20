import React from "react";
import Link from 'next/link'
import Image from 'next/image';


const Navbar: React.FC = () => {
return (
    <header>
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className=" dropdown">
                    <label tabIndex={0} className="btn btn-circle swap swap-rotate">
                        {/* <input type="checkbox" /> */}
                        {/* <Image className="logo swap-on" src="/imgs/icons/accent1-transparent.png" alt="Mana Worlds" width={32} height={32} /> */}
                        <Image className="logo swap-off" src="/imgs/icons/white-transparent.png" alt="Mana Worlds" width={32} height={32} />
                        {/* <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg> */}
                        {/* <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg> */}
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/games'>Games</Link></li>
                        <li><Link href='/news'>News</Link></li>
                        <li><Link href='/about'>About</Link></li>
                        <li><Link target="blank" href='https://forum.manaworlds.com/'>Community</Link></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-end hidden md:flex">
                <Link href='/' className="btn btn-ghost normal-case text-xl">Home</Link>
                <Link href='/games' className="btn btn-ghost normal-case text-xl">Games</Link>
                <Link href='/news'className="btn btn-ghost normal-case text-xl">News</Link>
                <Link href='/about' className="btn btn-ghost normal-case text-xl">About</Link>
                <Link target="blank" href='https://forum.manaworlds.com/' className="btn btn-ghost normal-case text-xl">Community</Link>

            </div>
        </div>
    </header>
    );
};

export default Navbar;