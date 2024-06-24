import React from "react";
import { SignIn } from "@clerk/nextjs";

const Page = () => {
  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
      <SignIn />
    </div>
  );
};

export default Page;
