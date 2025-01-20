import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Follow/Unfollow users",
    description: "",
  },
  {
    title: "Realtime messaging",
    description: "",
  },
  {
    title: "Like, comment",
    description: "",
  },
  {
    title: "Notifications",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="">
        <div className="relative h-[80dvh]">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center place-content-center h-full">
            <div className="space-y-3">
              <h1 className="text-3xl leading-tight font-extrabold">
                Connect, Post with fellow devs
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores iusto ab, hic aperiam nesciunt autem eaque tempora
                vel quas eos!
              </p>

              <Link href={"#"} className="">
                <Button className="my-5">Signup today</Button>
              </Link>
            </div>
            <div>
              <Image
                src={"/header.svg"}
                width={1080}
                height={1920}
                quality={100}
                alt="Header pic"
                className="bg-white"
              />
            </div>
          </div>
        </div>

        <section className="my-10 max-w-3xl mx-auto">
          <h1 className="text-center text-xl font-semibold">Features</h1>

          <div className="min-h-[50dvh] my-5 grid grid-cols-1 md:grid-cols-2 gap-5">
            {features.map((item, idx) => (
              <div
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={idx}
                className="shadow p-5 rounded-md hover:shadow-md transition-all duration-300"
              >
                <h1 className="text-lg font-bold">{item.title}</h1>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="my-5 relative min-h-[50dvh] flex flex-col justify-center items-center max-w-3xl mx-auto rounded-md p-5">
          <div className="absolute top-0 z-[-2] h-full w-full  rounded-md bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#000000_1px)] bg-[size:20px_20px]" />

          <h1 className="text-center mb-5 text-white text-2xl font-extrabold">
            Get started today and connect with like minded people and join a
            healthy community
          </h1>
          <Button variant={"outline"}>Create your account</Button>
        </section>
      </main>
    </>
  );
}
