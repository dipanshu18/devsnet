import { FeedCard } from "@/components/feed-card";

export default function Feed() {
  return (
    <>
      <div className="grid grid-cols-1 w-full lg:h-dvh lg:overflow-y-auto scrollbar-thin">
        <h1 className="p-5 text-xl font-bold">Feed</h1>
        {Array(50)
          .fill("")
          .map((_, idx) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <FeedCard key={idx} />
          ))}
      </div>
    </>
  );
}
