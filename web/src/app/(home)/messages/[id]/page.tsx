import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MessageChatBox() {
  return (
    <div className="flex flex-col h-full border-r">
      <div className="flex items-center gap-2 border-b pl-5 pb-5 lg:p-5 sticky top-0">
        <Link href={"/messages"}>
          <ArrowLeft className="" width={"40"} />
        </Link>
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
      <div className="flex-1 h-[70dvh] flex flex-col gap-5 my-5 overflow-y-auto">
        {Array(20)
          .fill("")
          .map((_, idx) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <div key={idx} className="border p-5 mx-2 rounded-md">
              <div className="mb-2">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Similique necessitatibus culpa, illum vel esse fugit laborum
                  dolorum aperiam tempora a!
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src={"/logo.svg"}
                  alt="User profile pic"
                  width={100}
                  height={100}
                  quality={100}
                  className="w-8 h-8 object-cover rounded-full border"
                />
                <div>
                  <h1 className="font-semibold">User full name</h1>
                  <p className="text-xs text-neutral-700">created at</p>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="sticky bottom-0 px-2">
        <div className="relative">
          <Textarea placeholder="enter your message" />
          <Button className="absolute bottom-0 right-0 m-2">
            <Send />
          </Button>
        </div>
      </div>
    </div>
  );
}
