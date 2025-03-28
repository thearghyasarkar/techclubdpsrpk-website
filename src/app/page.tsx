import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Inter, Montserrat } from "next/font/google";

const inter = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`min-h-screen bg-black text-white relative overflow-hidden ${inter.className}`}>
      {/* Half Spherical Background */}
      <div className="absolute inset-0 flex justify-center items-center -top-1/1">
        <div className="w-[1200px] h-[1200px] bg-yellow-700 opacity-40 rounded-full blur-[300px]"></div>
      </div>

      <header className="flex w-[100vw] align-middle flex-row space-x-36 justify-evenly text-center items-center p-6 absolute z-10">
        <h1 className="text-xl text-yellow-400 font-bold">Tech Club DPSRPK</h1>
        <nav className="space-x-4">
          <a href="#" className="hover:text-gray-300 font-medium">home</a>
          <a href="#" className="hover:text-gray-300 font-medium">about</a>
          <a href="#" className="hover:text-gray-300 font-medium">gallery</a>
          <a href="#" className="hover:text-gray-300 font-medium">legacy</a>
          <a href="#" className="hover:text-gray-300 font-medium">blog</a>
        </nav>
        <div className="space-x-2">
          <Button className="bg-white/10 backdrop-blur-lg text-white border border-white/20 px-4 py-2 rounded-lg hover:bg-white/20 transition-all">Sign In</Button>
          <Button className="bg-white/10 backdrop-blur-lg text-white border border-white/20 px-4 py-2 rounded-lg hover:bg-white/20 transition-all">Register</Button>
        </div>
      </header>
      
      <main className="flex flex-col items-center text-center mt-[21vh] px-4 relative z-10">
        <p className="bg-yellow-800/60 px-4 py-1 rounded-full text-sm mb-4 backdrop-blur-md">registrations open for session 2025-26</p>
        <h2 className="text-5xl mt-2 space-y-4 font-bold">welcome to the <br /> <span className="text-yellow-400 font-bold text-6xl"> Tech Club DPSRPK</span></h2>
        <p className="text-gray-300 mt-4 max-w-2xl text-lg">
          Fostering creativity and innovation among high-schoolers through hands-on mentoring and inculcating in young minds fascination towards technology and harnessing their potential by opening them up to a multitude of opportunities.
        </p>
        <Button className=" px-8 py-3 bg-white/10 backdrop-blur-lg text-white border border-white/20 rounded-lg text-lg hover:bg-white/20 transition-all mt-12 shadow-lg">Apply Now</Button>
        <div className="relative mx-auto mt-17 aspect-[1170/411] w-full max-w-[1170px]" data-wow-delay="0.1s">
          {/* <Image alt="hero" loading="lazy" decoding="async" data-nimg="fill" className=" absolute h-full w-full left-0 top-0 right-0 bottom-0 fill-transparent mx-auto" src="./images/hero/hero.svg"></Image> */}
          <Image
            src="/hero.svg"
            className=" absolute h-full w-full left-0 top-0 right-0 bottom-0 fill-transparent mx-auto"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </main>
    </div>
  );
}
