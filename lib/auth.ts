import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
        if (
          credentials?.email === "admin@test.com" &&
          credentials?.password === "password123"
        ) {
          return {
            id: "1",
            name: "Admin",
            email: "admin@test.com",
            role: "ADMIN",
          };
        }

        if (
          credentials?.email === "manager@test.com" &&
          credentials?.password === "password123"
        ) {
          return {
            id: "2",
            name: "Manager",
            email: "manager@test.com",
            role: "MANAGER",
          };
        }

        return {
          id: "3",
          name: "Employee",
          email: "employee@test.com",
          role: "EMPLOYEE",
        };
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,
};