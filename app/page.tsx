"use client"
// Import Images
import Image, { StaticImageData } from "next/image";
import dcpeaks from "@/public/home/dcpeaks.jpg";
import Folsom from "@/public/home/folsom.jpg";
import LaLaLand from "@/public/home/movies/lalaland.jpg";
import WalterMitty from "@/public/home/movies/waltermitty.jpg"
import SpiderMan from "@/public/home/movies/spiderman.jpg";
import Utah from "@/public/home/alpine-loop.jpg";
import HBLL from "@/public/home/hbll.jpg";
import Philippines from "@/public/home/philippines.jpg";
// Import Components
import { Separator } from "@/components/ui/separator";
import GridBlock from "@/components/ui/grid-block";

// Hero Header
function HeroBlock() {
    return (
        <section className="relative w-full h-screen">
  <div className="flex flex-col lg:flex-row justify-center items-stretch">
    {/* Image block */}
    <div
      id="img-block"
      className="relative mt-0 md:mt-0 lg:mt-0 lg:w-8/16"
    >
      <div className="relative w-full h-full">
        <Image
          src={dcpeaks}
          alt="Picture of Jacob Sargent"
          className="w-full h-full relative hidden lg:block rounded"
        />
      </div>
    </div>

    {/* Text block */}
    <div
        id="text-block"
        className="absolute inset-0 flex flex-col justify-start items-end text-right p-6 md:p-16 bg-black bg-opacity-0 text-white inline-block"
    >
        <h1 className="text-4xl md:text-5xl xl:text-9xl font-semibold">
            Who is he?
        </h1>
        <p className="mt-2 lg:mt-7 text-base leading-normal">
            Master of Information Systems Student at BYU. <br></br>
            Winner of multiple national competitons for Information Systems.<br></br>
            Multi-Ultra Trail Marathon finisher.<br></br>
            Loyal friend, husband and a true people person.<br></br>
            <br></br>
            Welcome to the site.
        </p>
    </div>
  </div>
</section>
    )
}

// Content
export default function Home() {
    return (
        <main> 
            <HeroBlock />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Separator className="container w-9/12 my-9" />
        </main>
    );
}



