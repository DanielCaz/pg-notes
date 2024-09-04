"use client";

import { Button } from "./button";
import { useFormStatus } from "react-dom";

const ButtonDelete = ({ children }: { children: React.ReactNode }) => {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} variant="destructive">
      {pending ? "Loading..." : <>{children}</>}
    </Button>
  );
};

export default ButtonDelete;
