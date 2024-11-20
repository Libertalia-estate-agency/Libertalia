"use client";
import React from "react";

import { SiteLogo } from "@/components/svg";
import { Logo } from "@/components/svg";
import { Logo1 } from "@/components/svg";
import { Logo2 } from "@/components/svg";
import { Logo3 } from "@/components/svg";
import { Logo4 } from "@/components/svg";
import { Logo5 } from "@/components/svg";
import { Logo6 } from "@/components/svg";

import { Loader2 } from "lucide-react";



const LayoutLoader = () => {
  return (
    <div className=" h-screen flex items-center justify-center flex-col space-y-2 bg-amber-50">
      <Logo5 className=" h-48 w-48 text-primary bg-amber-50" />
      <span className=" inline-flex justify-center">
        <Loader2 className=" h-12 w-12 animate-spin text-orange-950" color="black" />
        Loading...
      </span>
    </div>
  );
};

export default LayoutLoader;
