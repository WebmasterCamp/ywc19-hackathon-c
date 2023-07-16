import { useEffect, useState } from "react";
import Button from "./Button";

const Cookie = () => {
  const [show, setShow] = useState(true);
  const handleAccept = () => {
    localStorage.setItem("cookie", "true");
    setShow(false);
  };

  const handleDeny = () => {
    localStorage.setItem("cookie", "false");
  };

  useEffect(() => {
    const cookie = localStorage.getItem("cookie");

    if (cookie === "true") {
      setShow(false);
    }
  }, []);

  if (show) {
    return (
      <div className="p-6 bg-white rounded-t-3xl fixed bottom-0 left-0 w-full space-y-2">
        <div className="flex flex-row space-x-2 items-center">
          <div>
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <mask
                id="mask0_139_1264"
                style={{ maskType: "alpha" }}
                width="24"
                height="24"
                x="0"
                y="0"
                maskUnits="userSpaceOnUse"
              >
                <path fill="#D9D9D9" d="M0 0H24V24H0z"></path>
              </mask>
              <g mask="url(#mask0_139_1264)">
                <path
                  fill="#B33D26"
                  d="M10.5 10c.417 0 .77-.146 1.063-.437.291-.292.437-.646.437-1.063 0-.417-.146-.77-.438-1.062A1.447 1.447 0 0010.5 7c-.417 0-.77.146-1.063.438A1.447 1.447 0 009 8.5c0 .417.146.77.438 1.063.291.291.645.437 1.062.437zm-2 5c.417 0 .77-.146 1.063-.437.291-.292.437-.646.437-1.063 0-.417-.146-.77-.438-1.062A1.446 1.446 0 008.5 12c-.417 0-.77.146-1.063.438A1.446 1.446 0 007 13.5c0 .417.146.77.438 1.063.291.291.645.437 1.062.437zm6.5 1c.283 0 .52-.096.713-.287A.968.968 0 0016 15a.967.967 0 00-.287-.712A.968.968 0 0015 14a.968.968 0 00-.713.288A.967.967 0 0014 15c0 .283.096.52.287.713.192.191.43.287.713.287zm-3 6a9.738 9.738 0 01-3.9-.787 10.099 10.099 0 01-3.175-2.138A10.1 10.1 0 012.788 15.9 9.738 9.738 0 012 12c0-1.4.3-2.767.9-4.1a10.235 10.235 0 012.512-3.45c1.075-.967 2.35-1.675 3.826-2.125 1.475-.45 3.087-.492 4.837-.125-.15.75-.1 1.454.15 2.113.25.658.625 1.212 1.125 1.662.5.45 1.092.758 1.775.925.683.167 1.4.125 2.15-.125-.517 1.15-.425 2.133.275 2.95.7.817 1.5 1.242 2.4 1.275.15 1.483-.008 2.892-.475 4.225a10.11 10.11 0 01-2.063 3.5c-.908 1-2 1.796-3.274 2.388-1.276.591-2.655.887-4.138.887zm0-2c2.033 0 3.838-.7 5.413-2.1 1.575-1.4 2.437-3.183 2.587-5.35-.833-.367-1.488-.867-1.962-1.5a5.358 5.358 0 01-.963-2.125 5.688 5.688 0 01-3.3-1.65 5.961 5.961 0 01-1.7-3.3c-1.333-.033-2.504.208-3.512.725-1.009.517-1.85 1.18-2.526 1.988a8.673 8.673 0 00-1.524 2.637C4.17 10.275 4 11.167 4 12c0 2.217.78 4.104 2.338 5.663C7.896 19.22 9.783 20 12 20z"
                ></path>
              </g>
            </svg>
          </div>
          <div className="font-bold">
            Accept 'Cookies' For collecting cookies to deliver better user
            experience
          </div>
        </div>

        <div className="flex flex-row space-x-2">
          <Button
            onClick={handleDeny}
            text={"Deny"}
            color={"secondary"}
            size={"md"}
            icon={undefined}
            full={true}
          />
          <Button
            onClick={handleAccept}
            text={"Accept"}
            color={"primary"}
            size={"md"}
            icon={undefined}
            full={true}
          />
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};
export default Cookie;
