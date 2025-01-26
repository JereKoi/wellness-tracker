//This applies nextauth to every route in the app

export { default } from "next-auth/middleware";


/*
Applies next-auth only to matching routes- can be regex
ref: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = { matcher : ["/extra", "/dashboard"]}

*/