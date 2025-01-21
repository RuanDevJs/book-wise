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
    async signIn({ account }) {
      return true;
    },
  },
};

export default authenticationOptions;
