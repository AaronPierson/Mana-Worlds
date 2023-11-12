import React from "react";
import Link from 'next/link'


const Navbar: React.FC = () => {
  return (
    <header>
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link href='/'>Homepage</Link></li>
                    <li><Link href='/about'>About</Link></li>
                    <li><Link href='/games'>Games</Link></li>
                    {/* <li><Link href='/news'>News</Link></li> */}
                    <li><Link href='/about'>Community</Link></li>
                    {/* <li><Link href='/about'>Contact</Link></li> */}
                </ul>
                </div>
            </div>
            <div className="navbar-end">
                <Link href='/' className="btn btn-ghost normal-case text-xl">Mana Worlds</Link>
                <Link href='/games' className="btn btn-ghost normal-case text-xl">Games</Link>
                <Link href='/about' className="btn btn-ghost normal-case text-xl">About</Link>
                {/* <Link href='/news'className="btn btn-ghost normal-case text-xl">News</Link> */}
                <Link href='/' className="btn btn-ghost normal-case text-xl">Community</Link>

            </div>
        </div>
    </header>
  );
};

export default Navbar;