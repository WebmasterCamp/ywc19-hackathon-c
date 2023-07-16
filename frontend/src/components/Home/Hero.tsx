import {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";
import Container from "@/components/Container";

import Image from "next/image";
import Link from "next/link";

import { UserIcon } from "@heroicons/react/24/outline";

const Hero = () => {
  return (
    <Container className="relative bg-custom-cream py-8">
      <div className="flex flex-row gap-x-4">
        <div className="space-y-2">
          <div className="w-32 aspect-video relative">
            <Image
              src="/logo.svg"
              fill={true}
              alt=""
              className="object-contain"
            />
          </div>
          <div>Ror content thum why u mai thum ka e kwai</div>
        </div>
        <div>
          <div className="text-right fixed top-0 right-0 m-6">
            <Link href="/login">
              <button className="p-2 bg-white rounded-full shadow text-custom-dark-orange">
                <UserIcon className="w-6 h-6" />
              </button>
            </Link>
          </div>
          <svg viewBox="0 0 91 78" className="w-20 h-20" fill="none">
            <path
              d="M35.6183 12.4536H19.9922C16.1262 12.4536 12.9922 15.5876 12.9922 19.4536V32.3276C12.9922 36.1936 16.1262 39.3276 19.9922 39.3276H35.6183C39.4843 39.3276 42.6183 36.1936 42.6183 32.3276V19.4536C42.6183 15.5876 39.4843 12.4536 35.6183 12.4536Z"
              fill="#B33D26"
            />
            <path
              d="M55.0958 43.916H49.5859C45.7199 43.916 42.5859 47.05 42.5859 50.916V54.6135C42.5859 58.4795 45.7199 61.6135 49.5859 61.6135H55.0958C58.9618 61.6135 62.0958 58.4795 62.0958 54.6135V50.916C62.0958 47.05 58.9618 43.916 55.0958 43.916Z"
              fill="#F36A0E"
            />
            <path
              d="M35.6502 39.3276H7.01758C3.15159 39.3276 0.0175781 42.4616 0.0175781 46.3276V70.9999C0.0175781 74.8659 3.15158 77.9999 7.01757 77.9999H35.6502C39.5162 77.9999 42.6502 74.8659 42.6502 70.9999V46.3276C42.6502 42.4616 39.5162 39.3276 35.6502 39.3276Z"
              fill="#FFA808"
            />
            <path
              d="M83.9993 0H49.5859C45.7199 0 42.5859 3.134 42.5859 6.99999V36.916C42.5859 40.782 45.7199 43.916 49.5859 43.916H83.9993C87.8653 43.916 90.9993 40.782 90.9993 36.916V7C90.9993 3.13401 87.8653 0 83.9993 0Z"
              fill="#035B23"
            />
          </svg>
        </div>
      </div>
      <div className="absolute top-full left-0 px-4 transform -translate-y-1/2 flex flex-row gap-x-2 w-full">
        <div className="bg-white py-2 px-4 flex flex-row gap-2 items-center rounded-2xl w-full shadow-custom-search">
          <MagnifyingGlassIcon className="w-6 h-6 text-gray-400" />
          <input
            type="text"
            placeholder="Search Product"
            className="outline-none w-full focus:outline-none bg-transparent border-none  outline-dashed ring-0 placeholder-gray-400 py-1 px-2"
          />
        </div>
        <button className="bg-white p-2 rounded-2xl shadow-custom-search">
          <AdjustmentsHorizontalIcon className="w-8 h-8" />
        </button>
      </div>
    </Container>
  );
};

export default Hero;
