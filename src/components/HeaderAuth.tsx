"use client"
import React from "react";
import { ClerkLoaded, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Login from "./Login";

export default function HeaderAuth() {
  return (
    <ClerkLoaded>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <Login />
      </SignedOut>
    </ClerkLoaded>
  );
}