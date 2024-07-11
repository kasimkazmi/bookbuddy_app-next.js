"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

export const SwitchTab = () => {
  const { theme, setTheme } = useTheme();
  const [activeTab, setActiveTab] = useState(
    theme === "dark" ? "dark" : "light"
  ); // Default active tab

  useEffect(() => {
    // Set the theme to the system's theme or default to "light" on component mount
    setTheme(theme || "light");
  }, [theme, setTheme]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setTheme(tab);
  };

  return (
    <div className="switchingTabs bg-primary">
      <div className="tabItems">
        <span
          className={`tabItem text-foreground ${
            activeTab === "dark" ? "active" : ""
          }`}
          onClick={() => handleTabClick("dark")}
        >
          black
        </span>
        <span
          className={`tabItem text-foreground ${
            activeTab === "light" ? "active" : ""
          }`}
          onClick={() => handleTabClick("light")}
        >
          white
        </span>
        <span className={`movingBg ${activeTab}`}></span>
      </div>
    </div>
  );
};
