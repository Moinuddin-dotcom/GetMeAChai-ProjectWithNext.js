"use client"
import { useSession, signIn, signOut } from "next-auth/react"

export default function login() {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen gap-4  text-white'>
            <h1 className='font-bold text-2xl'>Lets Connect with everyone</h1>
            <h2 className='text-sm'>Login to your account</h2>
            <button className="btn">
                {/* <img src="https://yt3.googleusercontent.com/2eI1TjX447QZFDe6R32K0V2mjbVMKT5mIfQR-wK5bAsxttS_7qzUDS1ojoSKeSP0NuWd6sl7qQ=s900-c-k-c0x00ffffff-no-rj"
                    alt=""
                    className='w-10 rounded-full' /> */}
                Login with Google
            </button>
        </div>
    )
}
