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
      <div className="absolute top-8 right-0">
        <svg
          className="w-24 h-24"
          viewBox="0 0 59 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M56.7243 74.6775C57.1132 84.3012 54.5535 93.2107 50.0068 100.006C46.1036 93.9674 43.6287 86.4013 43.3034 78.0999C42.9145 68.4762 45.4954 59.5737 50.0209 52.7713C53.9241 58.81 56.399 66.376 56.7243 74.6775Z"
            fill="#B33D26"
          />
          <path
            d="M56.7243 21.9274C57.1132 31.5511 54.5535 40.4606 50.0068 47.2559C46.1036 41.2172 43.6287 33.6512 43.3034 25.3498C42.9145 15.726 45.4954 6.82356 50.0209 0.0211889C53.9241 6.05988 56.399 13.6259 56.7243 21.9274Z"
            fill="#B33D26"
          />
          <path
            d="M74.6708 43.2961C84.2945 42.9072 93.2041 45.467 99.9994 50.0137C93.9607 53.9169 86.3946 56.3918 78.0932 56.717C68.4695 57.1059 59.567 54.525 52.7646 49.9995C58.8033 46.0963 66.3694 43.6214 74.6708 43.2961Z"
            fill="#B33D26"
          />
          <path
            d="M21.9062 43.2961C31.5299 42.9072 40.4394 45.467 47.2347 50.0136C41.196 53.9169 33.63 56.3918 25.3286 56.717C15.7048 57.1059 6.80237 54.525 0 49.9995C6.03869 46.0963 13.6047 43.6214 21.9062 43.2961Z"
            fill="#B33D26"
          />
          <path
            d="M45.6441 52.2411L38.0356 59.8495C37.5904 60.2947 37.5904 61.0165 38.0356 61.4617L38.5589 61.985C39.0041 62.4302 39.7259 62.4302 40.1711 61.985L47.7795 54.3765C48.2247 53.9313 48.2247 53.2095 47.7795 52.7643L47.2563 52.2411C46.8111 51.7959 46.0893 51.7959 45.6441 52.2411Z"
            fill="#FFA808"
          />
          <path
            d="M59.6724 38.212L52.0639 45.8205C51.6187 46.2657 51.6187 46.9875 52.0639 47.4327L52.5872 47.956C53.0324 48.4011 53.7542 48.4011 54.1994 47.956L61.8078 40.3475C62.253 39.9023 62.253 39.1805 61.8078 38.7353L61.2846 38.212C60.8394 37.7668 60.1176 37.7668 59.6724 38.212Z"
            fill="#FFA808"
          />
          <path
            d="M51.8735 53.931L59.6587 61.7162C60.1039 62.1614 60.8257 62.1614 61.2709 61.7162L61.7942 61.193C62.2394 60.7478 62.2394 60.026 61.7942 59.5808L54.009 51.7955C53.5638 51.3503 52.842 51.3503 52.3968 51.7955L51.8735 52.3188C51.4283 52.764 51.4283 53.4858 51.8735 53.931Z"
            fill="#FFA808"
          />
          <path
            d="M38.311 40.3546L46.0962 48.1398C46.5414 48.585 47.2632 48.585 47.7084 48.1398L48.2317 47.6166C48.6769 47.1714 48.6769 46.4496 48.2317 46.0044L40.4465 38.2191C40.0013 37.7739 39.2794 37.7739 38.8342 38.2191L38.311 38.7424C37.8658 39.1876 37.8658 39.9094 38.311 40.3546Z"
            fill="#FFA808"
          />
          <path
            d="M59.0905 49.4729L41.3105 49.4729L41.3105 50.5329L59.0905 50.5329L59.0905 49.4729Z"
            fill="white"
          />
          <path
            d="M49.4307 41.1068L49.4307 58.8868L50.4907 58.8868L50.4907 41.1068L49.4307 41.1068Z"
            fill="white"
          />
        </svg>
      </div>
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
