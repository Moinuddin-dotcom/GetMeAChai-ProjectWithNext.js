"use client"
import { signOut, useSession } from 'next-auth/react'
// import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'


export default function Navbar() {
    const { data: session, status } = useSession()
    console.log(session)
    // if (session) {
    //     return <>
    //         Signed in as {session.user.email} <br />
    //         <button onClick={() => signOut()}>Sign out</button>
    //     </>
    // }


    const navLinks = <>
        <li><Link href={'/'}>Home</Link></li>
        <li><a>Item 1</a></li>
        <li><a>Item 3</a></li>
    </>
    return (
        <div className="navbar bg-slate-950 text-white shadow-sm">
            <div className="navbar-start">

                {/* <a className="btn btn-ghost text-xl">GetMeAChai!</a> */}
                <Link href={"/"}>
                    <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">GetMeAChai!</button>
                </Link>

            </div>
            <div className="navbar-end ">
                {/* inside dropdown menu */}
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-slate-950 border-2 border-white rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold">
                        {navLinks}
                    </ul>
                </div>

                {/* main page nav */}
                <ul className="menu menu-horizontal px-1 hidden lg:flex">
                    {navLinks}
                </ul>
                {status === "authenticated" ? <>
                    <button
                        onClick={() => signOut()}
                        type="button" className="cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Log Out</button>
                </> : <>
                    <Link href={"/login"}>
                        <button type="button" className="cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Log In </button>
                    </Link>

                </>}

            </div>
        </div>
    )
}
