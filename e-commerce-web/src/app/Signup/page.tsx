"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passConfirm, setPassConfirm] = useState("");

  console.log({ name, email, passConfirm, password });
  const lengthGreater = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*()_+{}|:"<>?]/.test(password);
  const passwordAreSame = password === passConfirm && password !== "";
  const emailIsValid =
    /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/.test(email);

  const isValid =
    lengthGreater &&
    hasUppercase &&
    hasLowercase &&
    hasNumber &&
    hasSpecialChar &&
    passwordAreSame &&
    name.length > 3 &&
    emailIsValid;
  function submit() {
    fetch("https://localhost:3001/Signup", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        password,
      }),
      headers: {
        "Content-type": "application/json", 
      }
    }).then((res) => {
      if (res.ok) {
       console.log ("success")
      } else {
        console.log ("error")
      }
    });
  }

  return (
    <div className="mx-auto">
      <div className="bg-slate-50 flex flex-col gap-3 mx-auto">
        <div>Бүртгүүлэх</div>
        <div className="w-[334px]">
          <input
            className="bg-white rounded-2xl border-[1px] border-[#E4E4E7]"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="w-[334px]">
          {" "}
          <input
            className="bg-white rounded-2xl border-[1px] border-[#E4E4E7]"
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="w-[334px]">
          {" "}
          <input
            className="bg-white rounded-2xl border-[1px] border-[#E4E4E7]"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className="w-[334px]">
          {" "}
          <input
            className="bg-white rounded-2xl border-[1px] border-[#E4E4E7]"
            type="password"
            placeholder="password confirm"
            value={passConfirm}
            onChange={(e) => setPassConfirm(e.target.value)}
          ></input>
        </div>
        <ul>
          <li className={hasUppercase ? "text-green-400" : "text-red-400"}>
            {" "}
            Том үсэг орсон байх
          </li>
          <li className={hasLowercase ? "text-green-400" : "text-red-400"}>
            {" "}
            Жижиг үсэг орсон байх
          </li>
          <li className={hasNumber ? "text-green-400" : "text-red-400"}>
            {" "}
            Тоо орсон байх
          </li>
          <li className={hasSpecialChar ? "text-green-400" : "text-red-400"}>
            {" "}
            Тэмдэгт орсон байх
          </li>
          <li className={passwordAreSame ? "text-green-400" : "text-red-400"}>
            {" "}
            Нууц үг ижилхэн байх
          </li>
          <li className={lengthGreater ? "text-green-400" : "text-red-400"}>
            {" "}
            8 болон түүнээс дээш тэмдэгт байх
          </li>
        </ul>
        <div className="[w-10]">
          <Button
            onClick = {submit}
            className="bg-pink-200 text-black rounded-2xl disabled:opacity-30 disabled:cursor-not-allowed"
            disabled={!isValid}
          >
            Sign-up
          </Button>
        </div>
      </div>
    </div>
  );
}
