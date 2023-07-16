import Image from "next/image";
import MainLayout from "@/layouts/MainLayout";

import { LockClosedIcon, UserIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Router from "next/router";

function Login() {
  // const [roles, setRoles] = useState("")
  const [message, setMessage] = useState("");

  const handleChange = (event: any) => {
    setMessage(event.target.value);
  };

  const handleClick = () => {
    if (message == "admin") {
      Router.push("/dashboard");
    } else if (message == "manager") {
      Router.push("/analytic");
    } else {
      Router.push("/");
    }
  };

  return (
    <MainLayout>
      <div className=" bg-[#F5E4CC]">
      <div className="h-screen">
        <div className="flex flex-row justify-center items-center max-h-screen pt-0">
          <div className="flex flex-col justify-center items-center mt-20">
            <Image 
              src="/loginlogo.svg"
              alt="Logo"
              width={414}
              height={172}
            />
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full rounded-t-3xl h-4/6 bg-white shadow-custom-shadow">
        <div className="p-6 h-full flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <h1 className="text-4xl font-bold text-center text-custom-dark-orange mt-8">เข้าสู่ระบบ</h1>
            </div>
            <div className="left-0 px-4flex flex-row gap-x-2 w-full mt-10">
              <div className="bg-white py-4 px-4 flex flex-row gap-2 items-center rounded-2xl w-full shadow-custom-search">
                <LockClosedIcon className="w-6 h-6 text-custom-dark-orange" />
                <input
                  type="text"
                  placeholder="username"
                  onChange={handleChange}
                  value={message}
                  className="outline-none w-full focus:outline-none bg-transparent border-none  outline-dashed ring-0 placeholder-gray-400 py-1 px-2"
                />
              </div>
            </div>
            <div className="left-0 px-4flex flex-row gap-x-2 w-full mt-10">
              <div className="bg-white py-4 px-4 flex flex-row gap-2 items-center rounded-2xl w-full shadow-custom-search">
                <UserIcon className="w-6 h-6 text-custom-dark-orange" />
                <input
                  type="password"
                  placeholder="password"
                  className="outline-none w-full focus:outline-none bg-transparent border-none  outline-dashed ring-0 placeholder-gray-400 py-1 px-2"
                  
                  
                  
                />
              </div>
            </div>
            <div className="flex flex-row-reverse"><p className="text-custom-dark-orange font-bold">ลืมรหัสผ่าน</p></div>
            
            <button 
            onClick={handleClick}
            className="rounded-full px-5 py-3 flex flex-row gap-2 justify-center items-center bg-custom-dark-orange border border-custom-dark-orange text-white w-full">
              <div>เข้าสู่ระบบ</div>
            </button>

            <div><p className=" font-bold text-center"><span className="text-[##BFBFBF]">ยังไม่มีบัญชี ?</span> <span className="text-custom-dark-orange">สมัครบัญชี</span></p></div>
            

              
            </div>
          </div>

          
        </div>
      </div>

    </MainLayout>
  );
}

export default Login;
