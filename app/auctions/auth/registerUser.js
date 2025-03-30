'use server';

import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import bcrypt from "bcrypt";

export const registerUser = async (data) => {
    // console.log("Registering user with data:", data);
    // return {
    //     status: 200,
    //     message: "User registered successfully",
    //     data: data,
    // };
    const userCollection = dbConnect(collectionNameObj.userCollection)
    //Validation : Is user already registered or not
    const { email, password } = data;
    if (!email || !password) return null;
    const existingUser = await userCollection.findOne({ email: data?.email });
    if (!existingUser) {
        const hashedPassword = await bcrypt.hash(password, 10);
        data.password = hashedPassword;
        const result = await userCollection.insertOne(data);
        return result
    } else {
        return {
            status: 400,
            message: "User already registered",
        };
    }

}
