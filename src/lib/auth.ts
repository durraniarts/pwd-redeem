"use client";

import { signIn } from "next-auth/react";

interface LoginCredentials {
  email: string;
  password: string;
}

export async function login(credentials: LoginCredentials) {
  const res = await signIn("credentials", {
    redirect: false,
    email: credentials.email,
    password: credentials.password,
  });

  if (res?.error) {
    return { success: false, error: res.error };
  }
  return { success: true };
}
