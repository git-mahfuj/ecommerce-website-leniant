import { SignInButton } from "@clerk/nextjs";
import React from "react";

const Login = () => {
  return (
    <SignInButton mode="modal">
      <button className="px-4 py-1.5 bg-leniant text-white font-medium rounded-lg hovereffect hover:-translate-y-0.5 cursor-pointer">Login</button>
    </SignInButton>
  );
};

export default Login;
