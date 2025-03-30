"use client"
import { useForm } from 'react-hook-form';

export default function RegisterInputs() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("User Registered:", data);
    };
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white p-6 rounded-lg shadow-lg w-96"
            >
                <h2 className="text-xl font-bold mb-4">Register</h2>

                <label className="block mb-2">Name:</label>
                <input
                    {...register("name", { required: "Name is required" })}
                    className="w-full p-2 border rounded mb-2"
                    placeholder="Enter your name"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

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
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Register
                </button>
            </form>
        </div>
    )
}
