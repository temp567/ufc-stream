"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const AuthButtons = () => {
  return (
    <div className="flex items-center justify-center h-full gap-2">
      <Link className="" href={"/sign-in"}>
        <Button className="" variant={"secondary"} size={"sm"}>
          Log in
        </Button>
      </Link>
      <Link className="" href={"/sign-up"}>
        <Button className="" variant={"default"} size={"sm"}>
          Sign up
        </Button>
      </Link>
    </div>
  );
};

export default AuthButtons;
