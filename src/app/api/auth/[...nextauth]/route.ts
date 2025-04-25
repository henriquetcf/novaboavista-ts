// import { handlers } from "@/auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import NextAuth, {User, NextAuthOptions} from "next-auth";
// import bcrypt from 'bcryptjs'
// import connect from "@/utils/db";
// import User from "@/models/User";

const handler = NextAuth({
    providers: [
      CredentialsProvider({
        id: "credentials",
        name: "Credentials",
        credentials: {
            email: { label: "E-mail", type: "text", placeholder: "Digite o e-mail"},
            password: { label: "Senha", type: "password", placeholder: "Digite a senha"},
         },
        async authorize(credentials) {


            const users = [
                {
                    id: '1',
                    name: 'Henrique T',
                    password: 'teste123',
                    email: 'rickturazzi@gmail.com'
                },
                {
                    id: '2',
                    name: 'Risk',
                    password: 'teste321',
                    email: 'risktura@gmail.com'
                },
            ]

            const user = users.find(
                (user) => 
                    user.email === credentials?.email &&
                    user.password === credentials.password
            );

            return user 
                ? { id: user.id, name: user.name, email: user.email} 
                : null
        //   await connect();
  
        //   try {

        //     // const user = await User.findOne({ email: credentials.email })
        //     const user = null
  
        //     if (user) {

        //       const isPasswordCorrect = await bcrypt.compare(
        //         credentials.password,
        //         user.password
        //       );
  
        //       if (isPasswordCorrect) {
        //         return user;
        //       } else {
        //         throw new Error("Wrong Credentials!");
        //       }

        //     } else {
        //       throw new Error("User not found!");
        //     }

        //   } catch (err) {
        //     throw new Error(err);
        //   }
        },
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
    ],
    pages: {
        signIn: '/login',
        // signOut: 'login'
        // error: "/login",
    },
});

export { handler as GET, handler as POST };