import NextAuth from 'next-auth/next';
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
        },
        password: {
          label: 'Password',
          type: 'password'
        },
      },
      async authorize(credentials, req) {
        console.log(credentials)
        const { email, password } = credentials
        const user = {
          name: 'Agata Herbst',
          email: 'toyotakar05@mail.ru',
          image: 'https://lh3.googleusercontent.com/a/AAcHTtdYIj6J4Z7hZfzutQs3lk6XtYlo1TBoiYWs7dxm_y_ANUo=s288-c-no',
        }

        /*const isValidationFailed = true
        if (isValidationFailed) {
        throw new Error('Email password invalid')
        }*/
        return user
      }
    })
  ],
  secret: 'Ov8LfroD1O8oTmdkkuvOENeJ5Sy5/CHKKLGoqEvI5Y4='
}

export default NextAuth(authOptions)
export const getServerAuthSession = (req, res) => {
  return getServerAuthSession(req, res, authOptions)
}


