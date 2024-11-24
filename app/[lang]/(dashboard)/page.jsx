"use client"
import Image from "next/image";
import bg from "@/public/images/auth/auth3-dark.png"

import bg1 from "@/public/images/auth/gradient2.png"
import bg2 from "@/public/images/auth/gradient.png"


import slider1 from "@/public/images/auth/slide-1.png"
import slider2 from "@/public/images/auth/slide-2.png"
import slider3 from "@/public/images/auth/slide-3.png"

import slide1 from "@/public/images/auth/background1.jpg"
import slide2 from "@/public/images/auth/background2.jpg"
import slide3 from "@/public/images/auth/background3.jpg"
import slide4 from "@/public/images/auth/background4.jpg"
import slide5 from "@/public/images/auth/background5.jpg"
import slide6 from "@/public/images/auth/background6.jpg"
import slide7 from "@/public/images/auth/background7.jpg"


import slide8 from "@/public/images/auth/Libertalia1.png"
import slide9 from "@/public/images/auth/Libertalia2.png"


import LogInForm from "@/components/auth/login-form.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useThemeStore } from "@/store";

//import LoginForm from "@/components/auth/loginForm.jsx";
import LoginForm from "@/components/auth/login-form.jsx";


const Login3 = () => {


  return (
    <>
    
    <div
        className="bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${bg2.src})` }}
      >
    <div className="m-auto xl:container px-12 sm:px-0 mx-auto">
  <div className="mx-auto h-full sm:w-max">
    <div className="m-auto py-2 px-2">
      
    <div className="mt-2 rounded-3xl border bg-gray-50 dark:border-gray-700 -mx-6 sm:-mx-10 p-8 sm:p-10">
          
      <LoginForm />

    </div>
      <div className="border-t pt-12 text-gray-500 dark:border-gray-800">
        <div className="space-x-4 text-center">
          <span>Libertalia &copy; 2024</span>
          <a href="#" className="text-sm hover:text-sky-900 dark:hover:text-gray-300">Contact</a>
          <a href="#" className="text-sm hover:text-sky-900 dark:hover:text-gray-300">Privacy & Terms</a>
        </div>
      </div>
    </div>
  </div>
</div>
</div>                                               
    </>
  );
};

export default Login3;


/**
 * 
 * 
 * 
const LoginPage = () => {
  const { isRtl } = useThemeStore();

  return (
    <div className="loginwrapper bg-background flex items-center min-h-screen overflow-hidden  w-full">
      <div className="lg-inner-column  grid  lg:grid-cols-2 w-full flex-wrap justify-center  p-4 overflow-y-auto">
        <div
          className="h-full w-full  bg-no-repeat bg-center bg-cover hidden lg:block rounded-xl"
          style={{ backgroundImage: `url(${bg2.src})` }}
        >
          <Swiper
            key={`${isRtl}-swiper`}
            dir={isRtl ? "rtl" : "ltr"}
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="w-full h-full rounded-2xl auth-swiper"
            style={{
              "--swiper-pagination-color": "#fff",
              "--swiper-pagination-bottom": "40px",
              "--swiper-pagination-bullet-size": "10px",
            }}
          >
            <SwiperSlide>
              <div className="w-full h-full flex justify-center items-center fill-transparent border-dashed">
                <Image src={slide8} alt="image" className="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full flex justify-center items-center">
                <Image src={slide8} alt="image" className="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full flex justify-center items-center">
                <Image src={slide8} alt="image" className="" />
              </div>
            </SwiperSlide>
          </Swiper>

        </div>
        <div className=" px-4  py-5 flex justify-center items-center">
          <div className="lg:w-[480px]">
            <LogInForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

 * 
 * 
 * 
 */