// src/auth.config.js
import dotenv from "dotenv";
dotenv.config();

import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import NaverStrategy from "passport-naver";

// ✅ Google 로그인 전략
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL || "http://localhost:3000/oauth2/callback/google",
    },
    (accessToken, refreshToken, profile, done) => {
      const user = {
        id: profile.id,
        name: profile.displayName,
        provider: "google",
      };
      return done(null, user);
    }
  )
);

// ✅ Naver 로그인 전략
passport.use(
  new NaverStrategy(
    {
      clientID: process.env.NAVER_CLIENT_ID,
      clientSecret: process.env.NAVER_CLIENT_SECRET,
      callbackURL: process.env.NAVER_CALLBACK_URL || "http://localhost:3000/oauth2/callback/naver",
    },
    (accessToken, refreshToken, profile, done) => {
      const user = {
        id: profile.id,
        name: profile.displayName,
        provider: "naver",
      };
      return done(null, user);
    }
  )
);

// ✅ 세션 설정
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
