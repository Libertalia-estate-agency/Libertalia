import { SiteLogo } from "@/components/svg";
import { Logo } from "@/components/svg";
import { Logo1 } from "@/components/svg";
import { Logo2 } from "@/components/svg";
import { Logo3 } from "@/components/svg";
import { Logo4 } from "@/components/svg";
import { Logo5 } from "@/components/svg";
import { Logo6 } from "@/components/svg";



import { useSidebar } from "@/store";
import React from "react";

const SidebarLogo = ({ hovered }) => {
  const { sidebarType, setCollapsed, collapsed } = useSidebar();
  return (
    <div className="px-3 py-3 ">
      <div className=" flex items-center">
        <div className="flex flex-1 items-center ">
        <Logo3 className={`h-24 w-32 `} />
        {(!collapsed || hovered) && (
            <div className="flex-1  text-xl font-semibold text-zinc-800 ">
              Libertalia
            </div>
          )}
        </div>
        {sidebarType === "classic" && (!collapsed || hovered) && (
          <div className="flex-none lg:block hidden">
            <div
              onClick={() => setCollapsed(!collapsed)}
              className={`h-4 w-4 border-[1.5px] border-default-900 dark:border-default-200 rounded-full transition-all duration-150
          ${
            collapsed
              ? ""
              : "ring-2 ring-inset ring-offset-4 ring-default-900  bg-default-900  dark:ring-offset-default-300"
          }
          `}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SidebarLogo;

/**
 * 
 * {(!collapsed || hovered) && (
            <div className="flex-1  text-xl text-primary  font-semibold">
              Libertalia
            </div>
          )}
 * 
 */