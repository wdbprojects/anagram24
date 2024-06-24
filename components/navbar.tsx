import React from "react";
import Drawer from "./drawer";
import Link from "next/link";
import Image from "next/image";
import Home from "@/public/home.png";
import { Button } from "./ui/button";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { ReloadIcon } from "@radix-ui/react-icons";
import { User } from "@clerk/nextjs/server";
import { ScanFace } from "lucide-react";
import { Input } from "./ui/input";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-16">
      <div className="">
        <Link href="/" className="font-bold text-xl text-blue-700 uppercase">
          Anagram
        </Link>
      </div>
      <div className="hidden md:flex">
        <div className="flex gap-6">
          <Button variant="ghost">
            <Link href="/" className="flex gap-2 items-center">
              <Image src="/home.png" alt="Home" width={16} height={16} />
              <span>Homepage</span>
            </Link>
          </Button>
          <Button variant="ghost">
            <Link href="/" className="flex gap-2 items-center">
              <Image src="/friends.png" alt="Friends" width={16} height={16} />
              <span>Friends</span>
            </Link>
          </Button>
          <Button variant="ghost">
            <Link href="/" className="flex gap-2 items-center">
              <Image src="/stories.png" alt="Stories" width={16} height={16} />
              <span>Stories</span>
            </Link>
          </Button>
        </div>
      </div>
      <div className="hidden lg:block">
        <Input type="text" placeholder="Search..." />
      </div>
      <div className="flex items-center">
        {/* <span>ICONS</span> */}
        <ClerkLoading>
          <ReloadIcon className="h-4 w-4 animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="flex items-center gap-4">
              <div className="cursor-pointer">
                <Image src="/people.png" alt="Friends" width={24} height={24} />
              </div>
              <div className="cursor-pointer">
                <Image
                  src="/messages.png"
                  alt="Messages"
                  width={24}
                  height={24}
                />
              </div>
              <div className="cursor-pointer">
                <Image
                  src="/notifications.png"
                  alt="Notifications"
                  width={24}
                  height={24}
                />
              </div>
              <UserButton />
            </div>
          </SignedIn>
          <SignedOut>
            <Button variant="outline">
              <Link
                href="/sign-in"
                className="flex items-center justify-center gap-2"
              >
                <ScanFace size={16} />
                <span className="text-xs">Login/Register</span>
              </Link>
            </Button>
          </SignedOut>
        </ClerkLoaded>

        <div className="md:hidden ml-4">
          <Drawer />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
