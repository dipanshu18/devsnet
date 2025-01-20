"use client";

import { Button } from "./ui/button";

export function ContinueWithBtn({
  text,
  icon,
}: {
  text: string;
  icon: React.ReactNode;
}) {
  return (
    <Button className="w-full">
      {icon} Continue with {text}
    </Button>
  );
}
