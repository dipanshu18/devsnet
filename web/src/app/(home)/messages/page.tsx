import Image from "next/image";

export default function Messages() {
  return (
    <div className="h-full lg:overflow-y-auto scrollbar-thin">
      <h1 className="p-5 text-xl font-bold">Messages</h1>

      {/* all chats */}

      <div className="grid grid-cols-1 border-t">
        {Array(100)
          .fill("")
          .map((_, idx) => (
            <div
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={idx}
              className="w-full lg:border-r flex items-center gap-2 p-5 border-b hover:bg-neutral-100 transition-all duration-300"
            >
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
                <p>last message: Lorem, ipsum dolor sit amet</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
