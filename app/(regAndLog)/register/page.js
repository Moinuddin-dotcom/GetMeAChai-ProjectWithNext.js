import React from 'react'
import RegisterInputs from './components/registerInputs';
import Link from 'next/link';

export default function RegisterPage() {



    return (
        <>
            <RegisterInputs />
            <p className='text-center text-white'>Already have an account? <Link href={"/login"} className="text-blue-600 underline underline-offset-4 font-bold">Log in Now</Link></p>
        </>
    )
}
