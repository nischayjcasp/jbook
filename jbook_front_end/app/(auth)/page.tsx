"use client";

import Image from "next/image";
import jbookLogo from "@/app/favicon.ico";
import jcaspLogo from "@/app/assets/logos/imgi_4_JCasp-logo-homepage.svg";
import googleLogo from "@/app/assets/logos/google_logo.svg";
import facebookLogo from "@/app/assets/logos/fb_logo.svg";
import { FaLinkedin, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Controller, useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

//deployed

export default function Home() {
  const [authState, setAuthState] = useState<"login" | "signup">("login");
  const [loginPassEye, setLoginPassEye] = useState<boolean>(false);

  // Login Form
  const {
    handleSubmit: loginSubmit,
    control: loginControl,
    setValue: loginSetValue,
    getValues: loginGetValues,
    clearErrors: loginClearErrors,
    formState: { errors: loginErrors },
  } = useForm();

  // Sign up form
  const {
    handleSubmit: signupSubmit,
    control: signupControl,
    setValue: signupSetValue,
    getValues: signupGetValues,
    clearErrors: signupClearErrors,
    formState: { errors: signupErrors },
  } = useForm();

  return (
    <div className="w-full h-full max-h-screen flex overflow-hidden">
      {/* Login Form */}
      <div className="w-1/2 overflow-y-auto px-24 py-10 hideScrollBar">
        {/* JBook Logo */}
        <div className="flex items-end mb-7">
          <Image src={jbookLogo} alt="JBook logo" className="w-9 h-9" />
          <span className="font-medium text-3xl leading-none">Book</span>
        </div>

        <p className="font-semibold text-3xl leading-normal mb-12">
          Welcome back!
        </p>

        <form className="w-full">
          {/* Login with */}
          <ul className="flex flex-col gap-3">
            <li>
              <button
                type="button"
                className="w-full py-3 flex justify-center items-center gap-3 border border-slate-200  hover:border-slate-300 bg-white
              hover:bg-slate-100 rounded-lg cursor-pointer"
              >
                <Image
                  src={googleLogo}
                  alt="Google Logo"
                  className="w-[18px] h-[18px]"
                />
                <span className="font-semibold text-lg">
                  Continue with Google
                </span>
              </button>
            </li>

            <li>
              <button
                type="button"
                className="w-full py-3 flex justify-center items-center gap-3 border border-slate-200  hover:border-slate-300 bg-white
              hover:bg-slate-100 rounded-lg cursor-pointer"
              >
                <Image
                  src={facebookLogo}
                  alt="Google Logo"
                  className="w-[18px] h-[18px]"
                />
                <span className="font-semibold text-lg">
                  Continue with Google
                </span>
              </button>
            </li>

            <li>
              <button
                type="button"
                className="w-full py-3 flex justify-center items-center gap-3 border border-slate-200  hover:border-slate-300 bg-white
              hover:bg-slate-100 rounded-lg cursor-pointer"
              >
                <FaLinkedin className="w-[18px] h-[18px] text-[#2e78b6]" />
                <span className="font-semibold text-lg">
                  Continue with Google
                </span>
              </button>
            </li>
          </ul>

          <hr className="my-4 w-full h-px border-none bg-slate-300" />

          {/* Email */}
          <div className="mb-2">
            <Controller
              name="login_email"
              control={loginControl}
              render={({ field: { value, onChange, name } }) => (
                <TextField
                  label="Email"
                  placeholder="Enter email "
                  name={name}
                  value={value}
                  onChange={onChange}
                  variant="outlined"
                  className="w-full"
                  helperText={
                    loginErrors.login_email?.message
                      ? `${loginErrors.login_email.message}`
                      : " "
                  }
                />
              )}
            />
          </div>

          {/* Login Password */}
          <div className="mb-2">
            <Controller
              name="login_password"
              control={loginControl}
              render={({ field: { value, onChange, name } }) => (
                <TextField
                  type={loginPassEye ? "text" : "password"}
                  label="Password"
                  placeholder="Enter password "
                  name={name}
                  value={value}
                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment position="end">
                          <button
                            type="button"
                            onClick={() => setLoginPassEye(!loginPassEye)}
                          >
                            {loginPassEye ? <VisibilityOff /> : <Visibility />}
                          </button>
                        </InputAdornment>
                      ),
                    },
                  }}
                  onChange={onChange}
                  variant="outlined"
                  className="w-full"
                  helperText={
                    loginErrors.login_password?.message
                      ? `${loginErrors.login_password.message}`
                      : " "
                  }
                />
              )}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-primary cursor-pointer text-white font-semibold text-lg rounded-lg"
          >
            Log in
          </button>

          <div className="my-4">
            <Link
              href="/forgotPassword"
              className="text-sm underline text-primary"
            >
              Forgot you password?
            </Link>
          </div>

          <hr className="my-4 w-full h-px border-none bg-slate-200" />

          <p className="my-4 flex justify-center items-center gap-3">
            <span className="text-sm">Don't have account ?</span>
            <button
              type="button"
              className="text-sm font-medium underline text-primary cursor-pointer"
              onClick={() => setAuthState("signup")}
            >
              Sign Up
            </button>
          </p>
        </form>
      </div>

      {/* Sign Up Form */}
      <div className="w-1/2 overflow-y-auto px-24 py-10 hideScrollBar">
        {/* JBook Logo */}
        <div className="flex items-end mb-7">
          <Image src={jbookLogo} alt="JBook logo" className="w-9 h-9" />
          <span className="font-medium text-3xl leading-none">Book</span>
        </div>

        <p className="font-semibold text-3xl leading-normal mb-12">Sign Up</p>

        <form className="w-full">
          {/* Login with */}
          <ul className="flex flex-col gap-3">
            <li>
              <button
                type="button"
                className="w-full py-3 flex justify-center items-center gap-3 border border-slate-200  hover:border-slate-300 bg-white
              hover:bg-slate-100 rounded-lg cursor-pointer"
              >
                <Image
                  src={googleLogo}
                  alt="Google Logo"
                  className="w-[18px] h-[18px]"
                />
                <span className="font-semibold text-lg">
                  Continue with Google
                </span>
              </button>
            </li>

            <li>
              <button
                type="button"
                className="w-full py-3 flex justify-center items-center gap-3 border border-slate-200  hover:border-slate-300 bg-white
              hover:bg-slate-100 rounded-lg cursor-pointer"
              >
                <Image
                  src={facebookLogo}
                  alt="Google Logo"
                  className="w-[18px] h-[18px]"
                />
                <span className="font-semibold text-lg">
                  Continue with Google
                </span>
              </button>
            </li>

            <li>
              <button
                type="button"
                className="w-full py-3 flex justify-center items-center gap-3 border border-slate-200  hover:border-slate-300 bg-white
              hover:bg-slate-100 rounded-lg cursor-pointer"
              >
                <FaLinkedin className="w-[18px] h-[18px] text-[#2e78b6]" />
                <span className="font-semibold text-lg">
                  Continue with Google
                </span>
              </button>
            </li>
          </ul>

          <hr className="my-4 w-full h-px border-none bg-slate-300" />
          {/* Username */}
          <div className="mb-2">
            <Controller
              name="signup_username"
              control={signupControl}
              render={({ field: { value, onChange, name } }) => (
                <TextField
                  label="Username"
                  placeholder="Enter username "
                  name={name}
                  value={value}
                  onChange={onChange}
                  variant="outlined"
                  className="w-full"
                  helperText={
                    loginErrors.signup_username?.message
                      ? `${loginErrors.signup_username.message}`
                      : " "
                  }
                />
              )}
            />
          </div>

          {/* Birthdate */}
          <div className="mb-2">
            <Controller
              name="signup_dob"
              control={signupControl}
              render={({ field: { value, onChange, name } }) => (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    name={name}
                    label="Birthdate"
                    format="DD-MM-YYYY"
                    value={value}
                    onChange={onChange}
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        helperText: loginErrors.signup_dob?.message
                          ? `${loginErrors.signup_dob.message}`
                          : " ",
                      },
                    }}
                  />
                </LocalizationProvider>
              )}
            />
          </div>

          {/* Gender */}
          <div className="mb-2">
            <Controller
              name="signup_gender"
              control={signupControl}
              render={({ field: { name, value, onChange } }) => (
                <div>
                  <div className="px-2 flex items-center gap-3">
                    <p className="font-medium">Gender : </p>
                    <RadioGroup
                      row
                      name={name}
                      value={value}
                      onChange={onChange}
                    >
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                    </RadioGroup>
                  </div>
                  <p className="text-sm px-2">
                    {signupErrors.signup_gender?.message ? (
                      `${signupErrors.signup_gender.message}`
                    ) : (
                      <>&nbsp;</>
                    )}
                  </p>
                </div>
              )}
            />
          </div>

          {/* Email */}
          <div className="mb-2">
            <Controller
              name="signup_email"
              control={loginControl}
              render={({ field: { value, onChange, name } }) => (
                <TextField
                  label="Email"
                  placeholder="Enter email "
                  name={name}
                  value={value}
                  onChange={onChange}
                  variant="outlined"
                  className="w-full"
                  helperText={
                    loginErrors.signup_email?.message
                      ? `${loginErrors.signup_email.message}`
                      : " "
                  }
                />
              )}
            />
          </div>

          {/* Sign up Password */}
          <div className="mb-2">
            <Controller
              name="signup_password"
              control={signupControl}
              render={({ field: { value, onChange, name } }) => (
                <TextField
                  type="password"
                  label="Password"
                  placeholder="Enter password "
                  name={name}
                  value={value}
                  onChange={onChange}
                  variant="outlined"
                  className="w-full"
                  helperText={
                    loginErrors.signup_password?.message
                      ? `${loginErrors.signup_password.message}`
                      : " "
                  }
                />
              )}
            />
          </div>

          {/* Sign up Confirm Password */}
          <div className="mb-2">
            <Controller
              name="signup_cpassword"
              control={signupControl}
              render={({ field: { value, onChange, name } }) => (
                <TextField
                  type="password"
                  label="Confirm Password"
                  placeholder="Enter confirm password"
                  name={name}
                  value={value}
                  onChange={onChange}
                  variant="outlined"
                  className="w-full"
                  helperText={
                    loginErrors.signup_password?.message
                      ? `${loginErrors.signup_password.message}`
                      : " "
                  }
                />
              )}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-primary cursor-pointer text-white font-semibold text-lg rounded-lg"
          >
            Sign up with Email
          </button>

          <hr className="my-4 w-full h-px border-none bg-slate-200" />
          <p className="my-4 flex justify-center items-center gap-3">
            <span className="text-sm">Already have account ?</span>
            <button
              type="button"
              className="text-sm font-medium underline text-primary"
              onClick={() => setAuthState("login")}
            >
              Login
            </button>
          </p>
        </form>
      </div>

      {/* Cover Slide */}
      <div
        className={`fixed top-0 bottom-0 ${
          authState == "signup"
            ? "translate-x-0 rounded-se-4xl rounded-ee-4xl"
            : "translate-x-full rounded-es-4xl rounded-ss-4xl"
        } w-1/2 flex flex-col justify-center items-center bg-[#1C2A39] z-10 border border-slate-200 transition-transform duration-200
      `}
      >
        {/* JBook Logo */}
        <div className="flex items-end mb-14">
          <Image src={jcaspLogo} alt="JBook logo" className="max-h-[100px]" />
        </div>

        <div className="text-white text-xl flex flex-col">
          <p className="flex gap-2">
            <FaQuoteLeft className="text-sm" />
            Craft your perfect day.
          </p>
          <div className="flex">
            <div className="flex items-end gap-1">
              <Image src={jbookLogo} alt="JBook logo" className="w-7 h-7" />
              <span className="font-medium text-xl">Book</span>
            </div>
            <p>&nbsp;keeps your tasks simple and your goals clear.&nbsp;</p>
            <FaQuoteRight className="text-sm" />
          </div>
        </div>
      </div>
    </div>
  );
}
