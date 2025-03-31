'use client'
import { Button } from "@/components/ui/button"


export function SocialLogin() {

    const handleSocialLogin = async (providerName) => {
        console.log("Social Login", providerName)
    }
    return (
        <>
            <Button
                onClick={() => handleSocialLogin('google')}
                className={'w-[20vw] cursor-pointer'}>Login with Google</Button>
            <Button
                onClick={() => handleSocialLogin('github')}
                className={'w-[20vw] cursor-pointer'}>Login with GitHub</Button>
        </>
    )
}

