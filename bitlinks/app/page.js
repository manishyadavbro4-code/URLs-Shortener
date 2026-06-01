import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className=" grid grid-cols-2 h-[50vh] ">
        <div className=" flex flex-col gap-4 items-center justify-center ">
          <p className="text-3xl font-bold">
            The best URL shortener in the Market
          </p>
          <p className="px-16 text-center">
            We are the most straightforward URL shortener in the world. Most of the URL shorteners will track you or ask you to give your details for login. We understand your needs and hence we  have created this URL shortener 
          </p>
          <div className='flex gap-5'>
                    <Link href="/shorten"><button className='bg-purple-600 shadow-lg p-3 rounded-lg font-bold py-1 text-white'>Try Now</button></Link>
                    <Link href="/github"><button className='bg-purple-600 shadow-lg p-3 rounded-lg font-bold py-1 text-white'>GitHub</button></Link>
                </div>
        </div>
        <div className=" flex justify-start relative ">
          <Image className="mix-blend-darken" alt="an Image of a vector" src={"/vector.jpg"} fill={true} />
        </div>
      </section>
    </main>
  );
}
