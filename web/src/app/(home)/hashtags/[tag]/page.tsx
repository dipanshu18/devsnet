import { FeedCard } from "@/components/feed-card";

export default function HashTagFeed() {
  return (
    <div className="lg:h-dvh lg:overflow-y-auto scrollbar-thin">
      <h1 className="p-5 font-xl font-semibold">[:tag] Posts</h1>
      <div className="border-t">
        {Array(10)
          .fill("")
          .map((_, idx) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <FeedCard key={idx} />
          ))}
      </div>
    </div>
  );
}
