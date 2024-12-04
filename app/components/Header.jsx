"use client";

import { useState } from "react";
// import { useState } from 'react'
// import { Dialog, DialogPanel } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/compat/router";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Programs", href: "/proframs" },
];

export default function Header() {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const router = useRouter();

  // const pathname = router;

  

  // if (pathname === "/") {
    
  // } else {
  //   const [sticky, setSticky] = useState(true);
  // }
  const [sticky, setSticky] = useState(true);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     window.scrollY > 50 && pathname == '/programs' ? setSticky(true) : setSticky(false);
  //   });
  // }, []);

  return (
    <div>
      <header
        className={`w-full lg:fixed pb-6 ${
          sticky ? "bg-white text-white " : "bg-transparent"
        } lg:pb-0 border-b border-blue-gray-100 `}
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <a href="#" title="" className="flex">
                {/* <img className="w-auto h-8 lg:h-10" src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg" alt="" /> */}
                <h1
                  className={`${
                    sticky ? "text-black" : "text-white"
                  } font-extrabold text-3xl`}
                >
                  BrightHorizons
                </h1>
              </a>
            </div>

            <button
              type="button"
              className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            >
              <svg
                className="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 8h16M4 16h16"
                />
              </svg>

              <svg
                className="hidden w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
              
              <Link
                href="/"
                title=""
                className={`text-base font-medium ${
                  sticky ? "text-black" : "text-white"
                } transition-all duration-200 hover:text-blue-600 focus:text-blue-600`}
              >
                {" "}
                Acceuil{" "}
              </Link>
              <Link
                href="programs"
                title=""
                className={`text-base font-medium ${
                  sticky ? "text-black" : "text-white"
                } transition-all duration-200 hover:text-blue-600 focus:text-blue-600`}
              >
                {" "}
                Programs{" "}
              </Link>
              <Link
                href="about"
                title=""
                className={`text-base font-medium ${
                  sticky ? "text-black" : "text-white"
                } transition-all duration-200 hover:text-blue-600 focus:text-blue-600`}
              >
                {" "}
                A propos
              </Link>
            </div>

            <Link
              href="contact"
              title=""
              className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700"
              role="button"
            >
              {" "}
              Contactez nous
            </Link>
          </nav>

          <nav className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
            <div className="flow-root">
              <div className="flex flex-col px-6 -my-2 space-y-1">
                <Link
                  href="/"
                  title=""
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  Home{" "}
                </Link>
                <Link
                  href="program"
                  title=""
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  Programs{" "}
                </Link>
                <Link
                  href="about"
                  title=""
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  About{" "}
                </Link>
              </div>
            </div>

            <div className="px-6 mt-6">
              <Link
                href="contact"
                title=""
                className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md tems-center hover:bg-blue-700 focus:bg-blue-700"
                role="button"
              >
                {" "}
                Contact us{" "}
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}
