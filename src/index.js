// src/index.js
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import session from "express-session";
import passport from "passport";
import "./auth.config.js";

const app = express();

app.use(
  session({
    secret: process.env.EXPRESS_SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// 구글 로그인
app.get("/oauth2/login/google", passport.authenticate("google", { scope: ["profile"] }));

app.get("/oauth2/callback/google", passport.authenticate("google", {
  failureRedirect: "/login",
  successRedirect: "/",
}));

// 네이버 로그인
app.get("/oauth2/login/naver", passport.authenticate("naver"));

app.get("/oauth2/callback/naver", passport.authenticate("naver", {
  failureRedirect: "/login",
  successRedirect: "/",
}));

// 기본 라우트
app.get("/", (req, res) => {
  res.send(`👋 Hello ${req.user?.name || "Guest"}`);
});

// 로그인 실패 라우트
app.get("/login", (req, res) => {
  res.send("로그인에 실패했습니다. 다시 시도해주세요.");
});

app.listen(3000, () => {
  console.log("서버 실행 중: http://localhost:3000");
});
