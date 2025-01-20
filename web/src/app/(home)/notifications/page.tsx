import Image from "next/image";

export default function Notifications() {
  return (
    <>
      <div className="h-dvh w-full lg:overflow-y-auto">
        <h1 className="p-5 text-xl font-bold lg:sticky lg:top-0 lg:z-10 lg:bg-white">
          Notifications
        </h1>
        {Array(100)
          .fill("")
          .map((_, idx) => (
            <div
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={idx}
              className="w-full border-r flex items-center gap-2 p-5 border-b hover:bg-neutral-200 transition-all duration-300"
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
                <p className="font-bold">
                  last message: Lorem, ipsum dolor sit amet
                </p>
                <h1 className="font-medium">User full name</h1>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
