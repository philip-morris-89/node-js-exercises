import passport from "passport";
import passportGitHub2 from "passport-github2";
import { RequestHandler } from "express";

const githubStrategy = new passportGitHub2.Strategy(
  {
    clientID: "680185bd29e2c1ee00dd",
    clientSecret: "6277a1ed29967683cb01d9f0e0d590354a572eae",
    callbackURL: "http://localhost:3000/auth/github/callback",
  },
  function (
    accessToken: string,
    refreshToken: string,
    profile: { [key: string]: string },
    done: (error: null, user: Express.User) => void
  ) {
    const user: Express.User = {
      username: profile.username,
    };
    done(null, user);
  }
);

passport.use(githubStrategy);

passport.serializeUser<Express.User>((user, done) => done(null, user));

passport.deserializeUser<Express.User>((user, done) => done(null, user));

const checkAuthorization: RequestHandler = (request, response, next) => {
  if (request.isAuthenticated()) {
    return next();
  }
  response.status(401).end();
};

export { passport, checkAuthorization };
