import React from "react";
import Image from "next/image";
import Title from "../components/Title";
import cyber from "../../public/cyber-security.jpg";
import robotics from "../../public/robotics.jpg";
import programming from "../../public/programming.jpg";
import language from "../../public/language.jpg";
import health from "../../public/health.jpg";
import maintainance from "../../public/maintainance.jpg";
import montage from "../../public/montage.jpg"; 
import english from "../../public/english.jpg"; 
import french from "../../public/french.jpg"; 
import arab from "../../public/arab.jpg"; 
import graphic from "../../public/graphic-design.jpg";

const it = [
  {
    branch: "Information Technology",
    name: "Cyber Security",
    image: cyber,
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    duration: "3 months",
  },
  {
    branch: "Information Technology",
    name: "Maintainance",
    image: maintainance,
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    duration: "3 months",
  },
  {
    branch: "Information Technology",
    name: "Web Master",
    image: programming,
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    duration: "8 months",
  },
  {
    branch: "Information Technology",
    name: "Infograpgie 2D, 3D",
    image: graphic,
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    duration: "8 months",
  },
  {
    branch: "Information Technology",
    name: "Montage VIdeo",
    image: montage,
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    duration: "8 months",
  },
 
  
];

const health_card = [
  {
    branch: "Information Technology",
    name: "Cyber Security",
    image: programming,
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    duration: "3 months",
  },
  {
    branch: "Health",
    name: "Robotics",
    image: health,
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    duration: "5 months",
  },
  {
    branch: "Language",
    name: "Graphic design",
    image: language,
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    duration: "8 months",
  },
];

const languages = [
  {
    branch: "language",
    name: "French",
    image: french,
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    duration: "3 months",
  },
  {
    branch: "Health",
    name: "English",
    image: english,
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    duration: "5 months",
  },
  {
    branch: "Language",
    name: "Arab",
    image: arab,
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    duration: "8 months",
  },
];

const management = [
  {
    branch: "Information Technology",
    name: "Cyber Security",
    image: programming,
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    duration: "3 months",
  },
  {
    branch: "Health",
    name: "Robotics",
    image: health,
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    duration: "5 months",
  },
  {
    branch: "Language",
    name: "Graphic design",
    image: language,
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    duration: "8 months",
  },
];

const page = () => {
  return (
    <section className="py-10 mt-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl ">
        <div className="md:container mt-7">
          <Title title="Nos Formation en informatique  " />

          <div className="grid max-w-md grid-cols-1 mx-auto mt-12 lg:max-w-full lg:mt-16 lg:grid-cols-3 gap-x-16 gap-y-12 ">
            {it.map((item) => (
              <div key={item.name} className="trans hover:scale-90">
                <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                  <Image
                    className="object-cover w-full h-full"
                    src={item.image}
                    alt=""
                  />
                </a>
                <span
                  className={`inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full ${
                    item.branch == "Information Technology"
                      ? "bg-blue-300"
                      : item.branch == "Health"
                      ? "bg-red-300"
                      : "bg-green-500"
                  }  mt-9`}
                >
                  {" "}
                  {item.branch}{" "}
                </span>
                <p className="mt-6 text-xl font-semibold">
                  <a href="#" title="" className="text-black">
                    {" "}
                    {item.name}{" "}
                  </a>
                </p>
                <p className="mt-4 text-gray-600">{item.desc}</p>
                <div className="h-0 mt-6 mb-4 border-t-2 border-gray-300 "></div>
                <span className=" text-sm font-bold tracking-widest flex items-center justify-between text-gray-500 uppercase">
                  {" "}
                  {item.duration}{" "}
                  <button className="p-4 bg-blue-700 rounded-lg text-white">
                    Learn more &rarr;
                  </button>{" "}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/*  */}
        <div className="md:container mt-7">
          <Title title="Nos formation en management  " />

          <div className="grid max-w-md grid-cols-1 mx-auto mt-12 lg:max-w-full lg:mt-16 lg:grid-cols-3 gap-x-16 gap-y-12 ">
            {management.map((item) => (
              <div key={item.name} className="trans hover:scale-90">
                <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                  <Image
                    className="object-cover w-full h-full"
                    src={item.image}
                    alt=""
                  />
                </a>
                <span
                  className={`inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full ${
                    item.branch == "Information Technology"
                      ? "bg-blue-300"
                      : item.branch == "Health"
                      ? "bg-red-300"
                      : "bg-green-500"
                  }  mt-9`}
                >
                  {" "}
                  {item.branch}{" "}
                </span>
                <p className="mt-6 text-xl font-semibold">
                  <a href="#" title="" className="text-black">
                    {" "}
                    {item.name}{" "}
                  </a>
                </p>
                <p className="mt-4 text-gray-600">{item.desc}</p>
                <div className="h-0 mt-6 mb-4 border-t-2 border-gray-300 "></div>
                <span className=" text-sm font-bold tracking-widest flex items-center justify-between text-gray-500 uppercase">
                  {" "}
                  {item.duration}{" "}
                  <button className="p-4 bg-blue-700 rounded-lg text-white">
                    Learn more &rarr;
                  </button>{" "}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/*  */}
        <div className="md:container mt-7">
          <Title title="Nos formation de langues  " />

          <div className="grid max-w-md grid-cols-1 mx-auto mt-12 lg:max-w-full lg:mt-16 lg:grid-cols-3 gap-x-16 gap-y-12 ">
            {languages.map((item) => (
              <div key={item.name} className="trans hover:scale-90">
                <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                  <Image
                    className="object-cover w-full h-full"
                    src={item.image}
                    alt=""
                  />
                </a>
                <span
                  className={`inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full ${
                    item.branch == "Information Technology"
                      ? "bg-blue-300"
                      : item.branch == "Health"
                      ? "bg-red-300"
                      : "bg-green-500"
                  }  mt-9`}
                >
                  {" "}
                  {item.branch}{" "}
                </span>
                <p className="mt-6 text-xl font-semibold">
                  <a href="#" title="" className="text-black">
                    {" "}
                    {item.name}{" "}
                  </a>
                </p>
                <p className="mt-4 text-gray-600">{item.desc}</p>
                <div className="h-0 mt-6 mb-4 border-t-2 border-gray-300 "></div>
                <span className=" text-sm font-bold tracking-widest flex items-center justify-between text-gray-500 uppercase">
                  {" "}
                  {item.duration}{" "}
                  <button className="p-4 bg-blue-700 rounded-lg text-white">
                    Learn more &rarr;
                  </button>{" "}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/*  */}
        <div className="md:container mt-7">
          <Title title="Nos formation en Paramedical  " />

          <div className="grid max-w-md grid-cols-1 mx-auto mt-12 lg:max-w-full lg:mt-16 lg:grid-cols-3 gap-x-16 gap-y-12 ">
            {health_card.map((item) => (
              <div key={item.name} className="trans hover:scale-90">
                <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                  <Image
                    className="object-cover w-full h-full"
                    src={item.image}
                    alt=""
                  />
                </a>
                <span
                  className={`inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full ${
                    item.branch == "Information Technology"
                      ? "bg-blue-300"
                      : item.branch == "Health"
                      ? "bg-red-300"
                      : "bg-green-500"
                  }  mt-9`}
                >
                  {" "}
                  {item.branch}{" "}
                </span>
                <p className="mt-6 text-xl font-semibold">
                  <a href="#" title="" className="text-black">
                    {" "}
                    {item.name}{" "}
                  </a>
                </p>
                <p className="mt-4 text-gray-600">{item.desc}</p>
                <div className="h-0 mt-6 mb-4 border-t-2 border-gray-300 "></div>
                <span className=" text-sm font-bold tracking-widest flex items-center justify-between text-gray-500 uppercase">
                  {" "}
                  {item.duration}{" "}
                  <button className="p-4 bg-blue-700 rounded-lg text-white">
                    Learn more &rarr;
                  </button>{" "}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
