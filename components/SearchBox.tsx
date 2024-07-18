"use client";

import React, { useState } from "react";

import { useMediaQuery } from "../hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import {
  ArrowUpCircle,
  CheckCircle2,
  Circle,
  HelpCircle,
  LucideIcon,
  XCircle,
} from "lucide-react";

type suggest = {
  title: string;
  value: string;
  icon: LucideIcon;
};
export const SearchBox = () => {
  const [open, setOpen] = useState(false);
  const [inputFocus, setInputFocus] = useState<typeof suggestions[0] | null>(
    null
  );
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const suggestions: suggest[] = [
    {
      title: "first",
      value: "Suggestion 1",
      icon: HelpCircle,
    },
    {
      title: "Scond",
      value: "Suggestion 2",
      icon: Circle,
    },
    {
      title: "thiord",
      value: "Suggestion 3",
      icon: ArrowUpCircle,
    },
  ];

  const handleFocus = () => {
    setOpen(true);
    // setInputFocus(true);
  };

  const handleBlur = () => {
    // setInputFocus(false);
    // Optionally close the popover/drawer when input loses focus
    // setOpen(false);
  };

  const SuggestionsList = () => (
    <>
      <Command>
        <CommandInput placeholder="What are you look for ?" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            {suggestions.map((suggest) => (
              <CommandItem key={suggest.value}>
                <span
                  className={cn(
                    "mr-2 h-4 w-4",
                    suggest.value === inputFocus?.value
                      ? "opacity-100"
                      : "opacity-40"
                  )}
                />
                <span>{suggest.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </>
  );

  if (isDesktop) {
    return (
      <div className="flex items-center space-x-4">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              size="lg"
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={`w-[${
                inputFocus ? "250px" : "150px"
              }] transition-all duration-300 ease-in-out `}
            >
              Searches...
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0" align="start">
            <SuggestionsList />
          </PopoverContent>
        </Popover>
      </div>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <input
          title="Search"
          type="text"
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`w-[${
            inputFocus ? "250px" : "150px"
          }] transition-all duration-300 ease-in-out`}
        />
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t">
          <SuggestionsList />
        </div>
      </DrawerContent>
    </Drawer>
  );
};
