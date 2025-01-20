"use client";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import Image from "next/image";

export function AddComment() {
  return (
    <div>
      <div className="relative">
        <Textarea rows={7} placeholder="add your comment" />
        <Button className="absolute bottom-0 right-0 m-2">
          <Send />
        </Button>
      </div>
    </div>
  );
}

export function CommentCard() {
  return (
    <div className="p-5 border-b">
      <div className="flex items-center gap-2">
        <Image
          src={"/logo.svg"}
          alt="User profile pic"
          width={100}
          height={100}
          quality={100}
          className="w-10 h-10 object-cover rounded-full border"
        />
        <div>
          <h1 className="font-semibold">User full name</h1>
          <p className="text-xs text-neutral-700">created at</p>
        </div>
      </div>
      <div className="mt-2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ut nemo
          vel doloribus necessitatibus adipisci autem? Ipsum corporis sapiente
          enim.
        </p>
      </div>
    </div>
  );
}
