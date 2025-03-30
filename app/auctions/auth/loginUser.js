"use server"

import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import bcrypt from "bcrypt";


export const loginUser = async (data) => {
    const { email, password } = data;
    const userCollection = dbConnect(collectionNameObj.userCollection)
    const user = await userCollection.findOne({ email })
    if (!user) return null;
    // Compare the password with the hashed password in the database
    const isPassOk = bcrypt.compare(user.password, password)
    if (!isPassOk) return null;
    return user;
}