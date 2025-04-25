import { user } from "@heroui/react";
import NextAuth, {User, NextAuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from 'next-auth/providers/google';

export const BASE_PATH = "/api/auth";

const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "Credentials",
            name: "Credentials",
            credentials: {
                email: { label: "E-mail", type: "text", placeholder: "Digite o e-mail"},
                password: { label: "Senha", type: "password", placeholder: "Digite a senha"},
            },
            async authorize(credentials): Promise<User | null> {

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
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    // basePath: BASE_PATH,
    secret: process.env.NEXTAUTH_SECRET
}

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions)