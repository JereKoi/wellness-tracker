import type { NextAuthOptions } from "next-auth";
import credentials from "next-auth/providers/credentials";

export const authOpitons: NextAuthOptions = {
    providers : [
        credentials({
            name: "Credentials",
            id: "credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {},
        }),
    ],
    session: {
        strategy: "jwt",
    }
}