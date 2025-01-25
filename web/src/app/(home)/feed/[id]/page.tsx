import { AddComment, CommentCard } from "@/components/comment";
import { Bookmark, Love } from "@/components/user-feed-actions";
import Image from "next/image";

export default function FeedDetail() {
  return (
    <div className="border-r h-dvh overflow-y-auto scrollbar-thin">
      <div className="p-5">
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

        <div className="space-y-2">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus veniam sint deserunt dolor labore debitis necessitatibus
            voluptatibus asperiores rem? Quae?
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

        <div className="flex w-full justify-between mt-4 border-b pb-4">
          <div className="flex gap-3">
            <Love />
          </div>
          <div>
            <Bookmark />
          </div>
        </div>
      </div>

      <div className="px-5 mb-5">
        <AddComment />
      </div>

      <div className="grid grid-cols-1 border-t">
        {Array(5)
          .fill("")
          .map((_, idx) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <CommentCard key={idx} />
          ))}
      </div>
    </div>
  );
}
