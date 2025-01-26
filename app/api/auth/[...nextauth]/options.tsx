import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
import GitHubProvider from 'next-auth/providers/github';

export const options: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "Username",
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "Password",
                }
            },
            async authorize(credentials) {
                // Add logic here to look up the user from the credentials supplied
                // from database
                // docs: https://next-auth.js.org/providers/credentials
                const user = { id: "1", name: "Joe", password: "nextauth"}

                if (credentials?.username === user.name && credentials?.password ===user.password) {
                    return user
                } else {
                    return null
                }
            }
        })
    ],
}