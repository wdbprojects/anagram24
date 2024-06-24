import React from "react";
import { SignUp } from "@clerk/nextjs";

const Page = () => {
  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
      <SignUp />
    </div>
  );
};

export default Page;
