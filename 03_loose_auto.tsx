import React from "react";

// type IconSize = "xs" | "sm" | Omit<string, "xs" | "sm">;

type LooseAutocomplete<T extends string> = T | Omit<string, T>;
type IconSize = LooseAutocomplete<"xs" | "sm">;

interface IconProps {
  size: IconSize;
}

export const Icon = (_props: IconProps) => {
  return <div></div>;
};

export const Comp1 = () => {
  return (
    <>
      <Icon size="xs"></Icon>
      <Icon size="sm"></Icon>
      <Icon size="arbitrary"></Icon>
    </>
  );
};
