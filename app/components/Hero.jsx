"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";
import sharing from '../../public/sharing.jpg'

function Hero() {
    return (
        // <header className="bg-white p-8">
        //   <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        //     <div className="row-start-2 lg:row-auto">
        //       <Typography
        //         variant="h1"
        //         color="blue-gray"
        //         className="mb-4 lg:text-5xl !leading-tight text-3xl"
        //       >
        //         Welcome to my Web <br /> Development Portofolio!
        //       </Typography>
        //       <Typography
        //         variant="lead"
        //         className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
        //       >
        //         I&apos;m Lily Smith, a passionate web developer based in USA. Here,
        //         you&apos;ll get a glimpse of my journey in the world of web
        //         development, where creativity meets functionality.
        //       </Typography>
        //       <div className="grid">
        //         <Typography
        //           variant="small"
        //           className="mb-2 text-gray-900 font-medium"
        //         >
        //           Your email
        //         </Typography>
        //         <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
        //           {/* @ts-ignore */}
        //           <Input color="gray" label="Enter your email" size="lg" />
        //           <Button color="gray" className="w-full px-4 md:w-[12rem]">
        //             require offer
        //           </Button>
        //         </div>
        //       </div>
        //       <Typography variant="small" className="font-normal !text-gray-500">
        //         Read my{" "}
        //         <a href="#" className="font-medium underline transition-colors">
        //           Terms and Conditions
        //         </a>
        //       </Typography>
        //     </div>
        //     <Image
        //       width={1024}
        //       height={1024}
        //       alt="team work"
        //       src="/sharing.jpg"
        //       className="h-[36rem] w-full rounded-xl object-cover"
        //     />
        //   </div>
        // </header>




        // <div className=''>
        //     <section class="relative flex items-center justify-center min-h-[100vh] py-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32">
        //         <div class="absolute inset-0">
        //             <img class="object-cover w-full h-full md:object-left md:scale-150 md:origin-top-left" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/5/girl-working-on-laptop.jpg" alt="" />
        //         </div>

        //         <div class="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent"></div>

        //         <div class="absolute inset-0 block bg-black/60 md:hidden"></div>

        //         <div class="relative px-10 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        //             <div class="text-center md:w-2/3 lg:w-1/2 xl:w-1/3 md:text-left">
        //                 <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Get full access to Celebration</h2>
        //                 <p class="mt-4 text-base text-gray-200">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam.</p>

        //                 <form action="#" method="POST" class="mt-8 lg:mt-12">
        //                     <div class="flex flex-col items-center sm:flex-row sm:justify-center">
        //                         <div class="flex-1 w-full min-w-0 px-4 sm:px-0">
        //                             <div class="relative text-gray-400 focus-within:text-gray-600">
        //                                 <label for="email" class="sr-only"></label>
        //                                 <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        //                                     <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        //                                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
        //                                     </svg>
        //                                 </div>
        //                                 <input
        //                                     type="email"
        //                                     name="email"
        //                                     id="email"
        //                                     placeholder="Enter email address"
        //                                     class="block w-full py-4 pl-10 pr-4 text-base text-black placeholder-gray-500 transition-all duration-200 border-gray-200 rounded-md sm:rounded-r-none caret-blue-600 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
        //                                     required
        //                                 />
        //                             </div>
        //                         </div>

        //                         <button type="submit" class="inline-flex items-center justify-center flex-shrink-0 w-auto px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md sm:mt-0 sm:rounded-l-none sm:w-auto hover:bg-blue-700 focus:bg-blue-700">
        //                             Get instant access
        //                         </button>
        //                     </div>
        //                 </form>
        //             </div>
        //         </div>
        //     </section>


        // </div>

        <div className=' hero w-full min-h-[100vh] bg-cover bg-center flex items-center justify-center text-white ' >
            <div className=" text-center max-w-[800px]">
                <h1 className="text-[50px] sm:text-3xl font-bold ">We ensure better education for a better world</h1>
                <p className="max-w-[700px] ">Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experience needed to exell in the dynamic field of education</p>
                <button className="bg-white text-blue-600 py-[14px] px-[25px] text-[16px] rounded-3xl border-0 outline-0 inline-flex items-center  justify-center">Explore &rarr;</button>
                <button className=''></button>
                <h1></h1>
            </div>
        </div>
    );
}

export default Hero;
