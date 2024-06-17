"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CommandList } from "cmdk";

interface ComboBoxProps {
  value?: string;
  label?: string;
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
}

export function ComboBox({
  options,
  value,
  label = "options",
  onChange,
}: ComboBoxProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[400px] justify-between text-gray-800"
        >
          {value
            ? options.find((option) => option.label === value)?.label
            : `Select ${label}...`}
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command
        // filter={(value, search) => {
        //   const sanitizedSearch = search.replace(
        //     /[-\/\\^$*+?.()|[\]{}]/g,
        //     "\\$&",
        //   );
        //
        //   const searchRegex = new RegExp(sanitizedSearch, "i");
        //
        //   const platformLabel =
        //     options.find((option) => option.value === value)?.label || "";
        //
        //   return searchRegex.test(platformLabel) ? 1 : 0;
        // }}
        >
          <CommandInput placeholder={`Search ${label}...`} />
          <CommandEmpty>{`No ${label} found.`}</CommandEmpty>
          <CommandGroup>
            <CommandList>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={() => {
                    onChange(option.value === value ? "" : option.value);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 size-4",
                      value === option.value ? "opacity-100" : "opacity-0",
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
