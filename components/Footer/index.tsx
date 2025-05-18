import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer: React.FC = () => {
  const pathname = usePathname();

  return (
    <footer className=" pb-12 flex flex-col   gap-4">
      <div className=" h-52 text-white relative py-12">
        <div className="absolute inset-0 overflow-hidden z-0">
          <Image
            src="images/abstract/line1.svg"
            alt="Abstract Line 1"
            width={1600}
            height={100}
            className="absolute object-contain top-0 left-1/2 transform -translate-x-1/2"
          />
          <Image
            src="images/abstract/line2.svg"
            alt="Abstract Line 2"
            width={1600}
            height={100}
            className="absolute object-contain  top-12 left-1/2 transform -translate-x-1/2"
          />
          <Image
            src="images/abstract/line3.svg"
            alt="Abstract Line 3"
            width={1600}
            height={100}
            className="absolute object-contain  top-24 left-1/2 transform -translate-x-1/2"
          />
        </div>
      </div>

      <div className="flex flex-col  gap-4">
        {(pathname === "/" || pathname === "/contact") && (
          <div
            className={`grid text-sm mb-6 sm:flex justify-center items-center gap-4 ${
              pathname === "/contact" ? "hidden sm:flex   " : ""
            }`}
          >
            <div className="grid grid-cols-3 col-span-3 gap-4 justify-items-center">
              <Link href="/services">
                <span className="hover:underline cursor-pointer">Services</span>
              </Link>
              <Link href="/works">
                <span className="hover:underline cursor-pointer">Works</span>
              </Link>
              <Link href="/insights">
                <span className="hover:underline cursor-pointer">Insights</span>
              </Link>
            </div>

            <div className="grid grid-cols-2 col-span-3 gap-4 justify-self-center justify-items-center">
              <Link href="/careers">
                <span className="hover:underline cursor-pointer">Careers</span>
              </Link>
              <Link href="/contact-us">
                <span className="hover:underline cursor-pointer">
                  Contact Us
                </span>
              </Link>
            </div>
          </div>
        )}

        {pathname === "/contact" && (
          <ul className="text-sm mb-6   flex-col gap-4 px-6 block sm:hidden">
            <li className="list-none">
              <details className="group">
                <summary className="cursor-pointer hover:underline list-none marker:hidden uppercase text-[#666666]">
                  Asia
                </summary>
                <ul className="mt-2 space-y-1 text-[#F5F5F5]">
                  <li>Hong Kong</li>
                  <li>Kuala Lumpur</li>
                  <li>Manila</li>
                  <li>Singapore</li>
                </ul>
              </details>
            </li>

            <li className="list-none mt-2">
              <details className="group">
                <summary className="list-none marker:hidden uppercase text-[#666666]">
                  Middle East
                </summary>
                <ul className="mt-2 space-y-1 text-[#F5F5F5]">
                  <li>United Arab Emirates</li>
                </ul>
              </details>
            </li>
          </ul>
        )}

        <div className="flex justify-center gap-4 mb-4 ">
          <a href="#" aria-label="LinkedIn">
            <Image
              src="/icons/linkedin.svg"
              alt="LinkedIn"
              width={24}
              height={24}
            />
          </a>
          <a href="#" aria-label="Facebook">
            <Image
              src="/icons/facebook.svg"
              alt="Facebook"
              width={24}
              height={24}
            />
          </a>
          <a href="#" aria-label="Instagram">
            <Image
              src="/icons/instagram.svg"
              alt="Instagram"
              width={24}
              height={24}
            />
          </a>
          <a href="#" aria-label="YouTube">
            <Image
              src="/icons/youtube.svg"
              alt="YouTube"
              width={24}
              height={24}
            />
          </a>
        </div>
      </div>

      {pathname === "/" && (
        <div className="w-5/6 mx-auto  flex flex-col justify-center lg:flex-row lg:justify-between lg:items-end text-xs text-center text-gray-400 space-y-2 py-18 sm:py-24">
          <div className="hidden md:block">
            © COPYRIGHT GROWTHTOPS. ALL RIGHTS RESERVED.
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 ">
            <a href="#" className="hover:underline">
              Go to global GrowthTops website
            </a>
            <a href="#" className="hover:underline">
              Privacy policy
            </a>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
