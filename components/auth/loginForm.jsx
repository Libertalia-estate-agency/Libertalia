import React, { useState } from "react";
//import Textinput from "@/components/ui/Textinput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { handleLogin } from "./store";
import { toast } from "react-toastify";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";


import { 
  Listbox
} from "@headlessui/react";
import { Transition } from "react-transition-group";


import RoleSelect from './RoleSelect';
//import TeamSelect from "./RoleSelect";
import TeamSelect from "./TeamSelect";


const schema = yup
  .object({
    email: yup.string().email("Invalid email").required("Email is Required"),
    password: yup.string().required("Password is Required"),
  })
  .required();
 
const LoginForm = () => {

  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    //
    mode: "all",
  });

  const [selectedRole, setSelectedRole] =  useState(null);
  
  const handleRoleSelect = (selectedOption) => 
  {
    setSelectedRole(selectedOption);
    console.log("SELECTED OPITON ::: ", selectedOption);
  }



  const router = useRouter();

  const onSubmit = (data) => {
    const user = users.find(
      (user) => user.email === data.email && user.password === data.password
    );
    if (user) {
      dispatch(handleLogin(true));
      
      setTimeout(() => {
          router.push(`/dashboard`);
      }, 1500);

    } else {
      toast.error("Invalid credentials", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const [checked, setChecked] = useState(true);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
      <Input
        name="email"
        label="email"
        defaultValue="info@libertalia.co.za"
        type="email"
        register={register}
        error={errors?.email}
      />
      <Input
        name="password"
        label="password"
        type="password"
        defaultValue="libertalia"
        register={register}
        error={errors.password}
      />

      <div className="sm:col-span-8">
              <label htmlFor="team" className="block text-sm font-medium leading-6 text-gray-900">
                Branch
              </label>

              <TeamSelect onChange={handleRoleSelect} selectedOption={selectedRole} />

              
            </div>

      <div className="flex justify-between">
        <Checkbox
          value={checked}
          onChange={() => setChecked(!checked)}
          label="Keep me signed in"
          
        />
        <Button text="Forgot Password?" className="btn-outline-warning rounded-[999px]" link="/forgot-password2" />

      </div>

      
      <div class="mt-12 flex flex-wrap sm:grid gap-6 grid-cols-2">
        <button
          class="w-full h-11 rounded-full border border-gray-300/75 bg-white px-6 transition active:bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-800 dark:hover:border-gray-700"
        >
          <div class="w-max mx-auto flex items-center justify-center space-x-4">
            <img src="assets/images/logo/google.svg" class="w-5" alt="" />
            <span class="block w-max text-sm font-semibold tracking-wide text-cyan-700 dark:text-white"
              >With Google</span
            >
          </div>
        </button>
        <button
          class="w-full h-11 rounded-full bg-gray-900 px-6 transition hover:bg-gray-800 focus:bg-gray-700 active:bg-gray-600 dark:bg-gray-700 dark:border dark:border-gray-600 dark:hover:bg-gray-800 dark:hover:border-gray-700"
        >
          <div class="w-max mx-auto flex items-center justify-center space-x-4 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="w-5"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
              />
            </svg>
            <span class="block w-max text-sm font-semibold tracking-wide text-white"
              >With Email Address</span
            >
          </div>
        </button>
      </div>

      <Button className="btn  bg-amber-200 border-orange-400 rounded-md block w-full text-center" link="/dashboard" text="Sign in" />
      <div className=" relative border-b-[#9AA2AF] border-opacity-[16%] border-b pt-6">
                  <div className=" absolute inline-block  bg-white dark:bg-slate-800 left-1/2 top-1/2 transform -translate-x-1/2 px-4 min-w-max text-sm  text-slate-500  dark:text-slate-400font-normal ">
                    Or
                  </div>
      </div>
      <Button
            text="Register"
            className=" btn-warning block-btn light bg-amber-200 border-orange-400"
            link="/register"
          />
    </form>
  );
};

export default LoginForm;
