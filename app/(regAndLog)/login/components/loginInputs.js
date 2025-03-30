"use client"
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export default function LoginInputs() {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();
    const onSubmit = async (data) => {
        console.log(data)
        try {
            const res = await signIn("credentials", { email: data.email, password: data.password, redirect: false })
            if (res.ok) {
                router.push('/')
                reset()
                toast.success('Login success')
            } else {
                // alert('Authintication failed');
                toast.error('Authentication failed')
            }
        } catch (err) {
            console.log(err)
        }
    };


    return (
        <div className="flex items-center justify-center ">

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="text-white p-6 rounded-lg shadow-lg w-96">
                <h1 className='font-bold text-2xl text-center'>Lets Connect with everyone</h1>
                <h2 className='text-sm text-center pb-10'>Login to your account</h2>
                <label className="block mb-2">Email:</label>
                <input
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    className="w-full p-2 border rounded mb-2"
                    placeholder="Enter your email"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

                <label className="block mb-2">Password:</label>
                <input
                    type="password"
                    {...register("password", { required: "Password is required" })}
                    className="w-full p-2 border rounded mb-2"
                    placeholder="Enter your password"
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

                <button
                    type="submit"
                    className="cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-full "
                >
                    {/* w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 */}
                    Log In
                </button>
            </form>

        </div>
    )
}
