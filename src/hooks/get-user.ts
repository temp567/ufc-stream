"use client";
import { useClerk } from "@clerk/nextjs";

export function getUser() {
  const { user } = useClerk();
  return user;
}
