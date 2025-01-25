import Image from "next/image";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FeedCard } from "@/components/feed-card";
import { Button } from "@/components/ui/button";

export default function OtherUserProfile() {
  return (
    <div className="h-dvh lg:overflow-y-auto scrollbar-thin">
      <h1 className="px-5 pt-0 lg:p-5 text-xl font-bold">Profile</h1>
      <div className="p-5 space-y-2">
        <div className="flex items-center justify-between">
          <Image
            src={"/logo.svg"}
            alt="User profile pic"
            width={100}
            height={100}
            quality={100}
            className="w-24 h-24 object-cover rounded-full border"
          />
          <Button>Follow</Button>
        </div>
        <div className="pl-2">
          <h1 className="text-xl font-semibold">User full name</h1>
          <p>
            BIO: Lorem, ipsum dolor sit amet Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Sapiente tempora recusandae quam omnis
            natus nam reiciendis minima, blanditiis labore ab.
          </p>
        </div>
      </div>

      <div className="px-6 w-full overflow-y-auto">
        <Tabs defaultValue="posts" className="w-full">
          <TabsList className="w-full">
            <TabsTrigger value="posts" className="w-full">
              Posts
            </TabsTrigger>
            <TabsTrigger value="activity" className="w-full">
              Activity
            </TabsTrigger>
            <TabsTrigger value="bookmarks" className="w-full">
              Bookmarks
            </TabsTrigger>
          </TabsList>
          <TabsContent value="posts">
            {Array(20)
              .fill("")
              .map((_, idx) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                <FeedCard key={idx} />
              ))}
          </TabsContent>
          <TabsContent value="activity">
            {Array(20)
              .fill("")
              .map((_, idx) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                <FeedCard key={idx} />
              ))}
          </TabsContent>
          <TabsContent value="bookmarks">
            {Array(20)
              .fill("")
              .map((_, idx) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                <FeedCard key={idx} />
              ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
