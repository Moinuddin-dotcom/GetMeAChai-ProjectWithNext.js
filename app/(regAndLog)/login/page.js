// "use client"
// import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link"
import LoginInputs from "./components/loginInputs"
import { SocialLogin } from "./components/SocialLogin"

import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

export default function login() {
    return (
        <>
            <LoginInputs />
            <p className='text-center text-white'>Don&apos;t have an account? <Link href={"/register"} className="text-blue-600 underline underline-offset-4 font-bold">Register Now</Link></p>
            {/* <p className='text-center text-white py-4'>Or Log in with Social Links</p> */}

            <div className="flex justify-center items-center py-4 ">

                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button variant="outline" className={'cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 '}>Or Log in with Social Links</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogCancel className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 cursor-pointer">
                            ✖
                        </AlertDialogCancel>
                        <div className="flex flex-col gap-3 p-4 justify-center items-center">
                            <SocialLogin />
                        </div>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
            {/* <button className="btn">
                Login with Google
            </button> */}
        </>
    )
}
