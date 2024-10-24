import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import bcrypt from 'bcryptjs'
// import connect from "@/utils/db";
// import User from "@/models/User";

const handler = NextAuth({
    providers: [
      CredentialsProvider({
        id: "credentials",
        name: "Credentials",
        async authorize(credentials) {

          await connect();
  
          try {

            // const user = await User.findOne({ email: credentials.email })
            const user = null
  
            if (user) {

              const isPasswordCorrect = await bcrypt.compare(
                credentials.password,
                user.password
              );
  
              if (isPasswordCorrect) {
                return user;
              } else {
                throw new Error("Wrong Credentials!");
              }

            } else {
              throw new Error("User not found!");
            }

          } catch (err) {
            throw new Error(err);
          }
        },
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
    ],
    pages: {
        error: "/login",
    },
});

export { handler as GET, handler as POST };