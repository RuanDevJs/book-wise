import { AuthOptions } from "next-auth";
import GithubProvider, { GithubProfile } from "next-auth/providers/github";

export const authenticationOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: "read:user user:email",
        },
      },
      profile: (profile: GithubProfile) => {
        return {
          id: profile.id.toString(),
          name: profile.name,
          email: profile.email,
          image: profile.avatar_url,
          login: profile.login,
          bio: profile.bio,
        };
      },
    }),
  ],
  callbacks: {
    // async jwt({ token, account, profile }){
    //   if(profile && account){
    //     token = profile as GithubProfile;
    //   }

    //   return token as GithubProfile;
    // },

    // async session({ session, token }){
    //   let newSession;
    //   const sessionToken = token as GithubProfile;

    //   if(token && session.user){
    //     newSession = {
    //       ...session,
    //       userId: sessionToken.id
    //     }
    //   }

    //   return session;
    // },
    async signIn() {
      return true;
    },
  },
};

export default authenticationOptions;
