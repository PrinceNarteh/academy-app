"use client";

import React, { InputHTMLAttributes } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { useFormContext } from "react-hook-form";

type InputFieldProps = {
  name: string;
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const InputField = ({ label, name, ...props }: InputFieldProps) => {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>Title</FormLabel>}
          <FormControl>
            <Input {...field} {...props} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default InputField;
