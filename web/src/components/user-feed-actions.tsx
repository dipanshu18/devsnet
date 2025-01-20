"use client";

import Link from "next/link";

import { BookmarkIcon, Heart, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";

export function Love() {
  return (
    <Button>
      <Heart />
    </Button>
  );
}

export function Bookmark() {
  return (
    <Button variant={"secondary"}>
      <BookmarkIcon />
    </Button>
  );
}

export function Comment() {
  return (
    <Link href={"/feed/:id"}>
      <Button variant={"outline"}>
        <MessageSquare />
      </Button>
    </Link>
  );
}
