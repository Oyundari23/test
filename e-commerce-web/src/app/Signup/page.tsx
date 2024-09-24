"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passConfirm, setPassConfirm] = useState("");

  console.log({ name, email, passConfirm, password });

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
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="w-[334px]">
          {" "}
          <input
            className="bg-white rounded-2xl border-[1px] border-[#E4E4E7]"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className="w-[334px]">
          {" "}
          <input
            className="bg-white rounded-2xl border-[1px] border-[#E4E4E7]"
            placeholder="password confirm"
            value={passConfirm}
            onChange={(e) => setPassConfirm(e.target.value)}
          ></input>
        </div>
        <div className="[w-10]">
          <Button className="bg-pink-200 text-black rounded-2xl">Sign-up</Button>
        </div>
      </div>
    </div>
  );
}
