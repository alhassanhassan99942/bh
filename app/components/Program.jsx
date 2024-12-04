import React from "react";
import { MdHealthAndSafety } from "react-icons/md";
import "../styles/program.css";
import robotics from "../../public/programming.jpg";
import fre_en from "../../public/fre-en.jpg";
import management from "../../public/management.jpg";
import health from "../../public/health.jpg";
import Image from "next/image";
import Link from "next/link";

const Program = () => {
  return (
    <div className="mt-10">
      <section class="bg-white text-gray-900 container mx-auto py-16 px-4 md:px-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Nos Filiere de formation 
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis.
          </p>
          <div class="w-24 h-1 rounded-full bg-indigo-500 inline-flex"></div>
        </div>

        <div class="space-y-12 my-5">
          <div class="flex flex-col md:flex-row items-center md:items-start md:justify-between">
            <div class="md:w-5/12">
              <h2 class="text-2xl font-bold mb-4">Informatique </h2>
              <p class="text-gray-600 mb-6 text-center md:text-left">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Asperiores aperiam aliquid perspiciatis cumque quidem
                reprehenderit, sed ipsa et omnis libero repellat, natus totam
                voluptate nam non ab minus ex aliquam dolores corporis
                laudantium. Eum ut nulla officia minus fuga optio harum officiis
                quia minima a fugit vel dicta esse itaque porro molestias omnis,
                beatae iure modi laboriosam. Ex, odit modi?
              </p>
            </div>

            <div class="md:w-5/12 max-w-sm">
              <Image
                class="rounded-md border-none"
                src={robotics}
                // width={500}
                // height={500}
                alt="Filiere informatiqe "
              />
            </div>
          </div>

          <div class="flex flex-col my-5 md:flex-row-reverse items-center md:items-start md:justify-between">
            <div class="md:w-5/12">
              <h2 class="text-2xl font-bold mb-4">Langue Francais, Arabe, English</h2>
              <p class="text-gray-600 mb-6 text-center md:text-left">
                Challenge yourself with Bible Trivia and sharpen your biblical
                knowledge through engaging games. Test your memory on biblical
                events, characters, locations, and teachings. Choose your
                difficulty level and enjoy a fun, personalized learning journey
                at your own pace.
              </p>
            </div>

            <div class="md:w-5/12 max-w-sm">
              <Image
                class="rounded-md border-none"
                src={fre_en}
                alt="Bible Trivia Image"
              />
            </div>
          </div>
        </div>
        <div class="space-y-12">
          <div class="flex flex-col md:flex-row items-center md:items-start md:justify-between">
            <div class="md:w-5/12">
              <h2 class="text-2xl font-bold mb-4">Management </h2>
              <p class="text-gray-600 mb-6 text-center md:text-left">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Asperiores aperiam aliquid perspiciatis cumque quidem
                reprehenderit, sed ipsa et omnis libero repellat, natus totam
                voluptate nam non ab minus ex aliquam dolores corporis
                laudantium. Eum ut nulla officia minus fuga optio harum officiis
                quia minima a fugit vel dicta esse itaque porro molestias omnis,
                beatae iure modi laboriosam. Ex, odit modi?
              </p>
            </div>

            <div class="md:w-5/12 max-w-sm">
              <Image
                class="rounded-md border-none"
                src={management}
                alt="Verse Finder Image"
              />
            </div>
          </div>

          <div class="flex flex-col md:flex-row-reverse items-center md:items-start md:justify-between">
            <div class="md:w-5/12">
              <h2 class="text-2xl font-bold mb-4">Medecine</h2>
              <p class="text-gray-600 mb-6 text-center md:text-left">
                Challenge yourself with Bible Trivia and sharpen your biblical
                knowledge through engaging games. Test your memory on biblical
                events, characters, locations, and teachings. Choose your
                difficulty level and enjoy a fun, personalized learning journey
                at your own pace.
              </p>
            </div>

            <div class="md:w-5/12 max-w-sm">
              <Image
                class="rounded-md border-none"
                src={health}
                alt="health"
              />
            </div>
          </div>
        </div>

       
      </section>
    </div>
  );
};

export default Program;
