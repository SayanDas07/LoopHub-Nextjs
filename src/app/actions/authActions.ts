"use server";

import { signOut, signIn } from "@/auth";

// Function to handle user sign out
export async function handleSignOut(): Promise<void> {
  await signOut({ redirectTo: "/" });
}

// Function to handle user sign in
export async function handleSignIn(): Promise<void> {
  await signIn("github");
}
