"use client";

import { useTheme } from "next-themes";
import React, { forwardRef, useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react"

// Define or import the type 'ThemeSwitchProp'
type ThemeSwitchProp = {
  className?: string;
};
// Wrap your component with React.forwardRef
const ThemeSwitch = forwardRef<HTMLDivElement, ThemeSwitchProp>(
  ({ className, ...props }, ref) => {
    const { theme, setTheme } = useTheme();
    const [activeTab, setActiveTab] = useState(
      theme === "dark" ? "dark" : "light"
    );

    useEffect(() => {
      // Set the theme to the system's theme or default to "light" on component mount
      setTheme(theme || "light");
    }, [theme, setTheme]);

    const handleTabClick = (tab: string) => {
      setActiveTab(tab);
      setTheme(tab);
    };

    return (
      <div
        className={`switchingTabs bg-primary ${className}`}
        {...props}
        ref={ref}
      >
        <div className="tabItems">
          <span
            className={`tabItem text-background ${
              activeTab === "dark" ? "active" : ""
            }`}
            onClick={() => handleTabClick("dark")}
          >
          <Moon className=" h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </span>
          <span
            className={`tabItem text-foreground ${
              activeTab === "light" ? "active" : ""
            }`}
            onClick={() => handleTabClick("light")}
          >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          </span>
          <span className={`movingBg ${activeTab}`}></span>
        </div>
      </div>
    );
  }
);

ThemeSwitch.displayName = "ThemeSwitch";

export default ThemeSwitch;
