import type { NextAuthOptions } from "next-auth";
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from "next-auth/providers/google";

export const options: NextAuthOptions = {
    providers: [
        // TODO: Figure out URI redirecting for localhost
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
          }),
          GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
    ],
}