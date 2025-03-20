import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
const navItems = () => (
    <div className="text-[18px] flex">
        <li>
            <Link href="/">Home</Link>
        </li>
        <li>
            <Link href="/about">About</Link>
        </li>
        <li>
            <Link href="/service">Service</Link>
        </li>
        <li>
            <Link href="/blog">Blog</Link>
        </li>
        <li>
            <Link href="/contact">Contact</Link>
        </li>
    </div>
);
  return (
    <div className="navbar  shadow-sm  lg:px-10">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu  gap-3 text-white cursor-pointer menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navItems()}
          </ul>
        </div>
        <Link href="/">
        <Image src="/assets/logo.svg" width={107} height={80} alt="logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems()}</ul>
      </div>
      <div className="navbar-end">
      <Link href="/">
      <button className="btn btn-outline btn-error">Appointment</button></Link>
      </div>
    </div>
  );
};

export default Navbar;
