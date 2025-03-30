// "use client"
// import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link"
import LoginInputs from "./components/loginInputs"

export default function login() {
    return (
        <>
            <LoginInputs />
            <p className='text-center text-white'>Don&apos;t have an account? <Link href={"/register"} className="text-blue-600 underline underline-offset-4 font-bold">Register Now</Link></p>
            {/* <button className="btn">
                Login with Google
            </button> */}
        </>
    )
}
