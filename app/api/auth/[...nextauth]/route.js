import { connectToDB } from "@utils/database";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@models/userModel";
import bcryptjs from "bcryptjs";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { username, password } = credentials;

        try {
          await connectToDB();
          const user = await User.findOne({ username });

          //Error handling if username does not exist
          if (!user) {
            return null;
          }

          //Check password if correct
          const validPassword = await bcryptjs.compare(password, user.password);


          if (!validPassword) {
            return null;
          } else {
          }


          const returnValue = {
            id: user._id,
            name: user.name,
            role: user.role ?? "User",
          };

          return returnValue;
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({token, user}){
      if (user){
        token.id=user.id;
        token.name = user.name;
        token.role = user.role;
      }
      return token;
    },
    async session({session, token}){
      if(token){
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.role = token.role;
      }
      return session;
    },
  },

  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
