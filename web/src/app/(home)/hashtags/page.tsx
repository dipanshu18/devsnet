import Link from "next/link";

export default function Hashtags() {
  return (
    <div className="h-dvh overflow-y-auto">
      <h1 className="p-5 text-xl font-bold lg:sticky lg:top-0 lg:z-10 lg:bg-white">
        Hashtags
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
        {Array(100)
          .fill("")
          .map((_, idx) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <Link href={"/hashtags/:tag"} key={idx}>
              <div className="shadow rounded-md p-5 hover:shadow-md transition-all duration-300">
                #hashtag
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
