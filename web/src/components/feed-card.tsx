import Image from "next/image";
import { Bookmark, Comment, Love } from "./user-feed-actions";

export function FeedCard() {
  return (
    <div className="w-full flex flex-col gap-2 p-5 border-b">
      <div className="space-y-2">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          veniam sint deserunt dolor labore debitis necessitatibus voluptatibus
          asperiores rem? Quae?
        </p>

        <Image
          src={"/header.svg"}
          alt="post image"
          width={1080}
          height={1920}
          quality={100}
          className="w-full h-72 object-contain border rounded-md"
        />
      </div>

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

      <div className="flex w-full justify-between">
        <div className="flex gap-3">
          <Love />
          <Comment />
        </div>
        <div>
          <Bookmark />
        </div>
      </div>
    </div>
  );
}
