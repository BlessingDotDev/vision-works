"use client";

import { useState } from "react";
import {
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  User,
} from "lucide-react";
import BackLink from "@/components/ui/BackLink";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { signUpSchema } from "@/app/schemas/auth";
import z from "zod";

type AuthMode = "login" | "signup";

type SignUpFormData = z.infer<typeof signUpSchema>;

export default function AuthPage() {
  const [mode, setMode] = useState<AuthMode>("login");
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<SignUpFormData>({
     resolver: zodResolver(signUpSchema),

      defaultValues: {
        name: "",
        email: "",
        password: "",
      },

      mode: "onBlur", // validated after leaving an input
      reValidateMode: "onChange"
  })

  const onSubmit = async (data: SignUpFormData) => {
    console.log(data)
  }

  const isLogin = mode === "login";

  return (
    <>
      <BackLink href="/" className="mt-4">
        Back to home
      </BackLink>

    <main className="min-h-screen bg-zinc-950 flex items-center justify-center p-4 ring-2 ring-purple-900">
      <div className="w-full max-w-5xl overflow-hidden rounded-3xl border
       border-white/10 bg-zinc-900 shadow-2xl lg:grid lg:grid-cols-2">

        {/* Left Side */}
        <div className="hidden lg:flex flex-col justify-between bg-green-950 p-12">
          <div>
            <div className="mb-16 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-xl font-bold text-zinc-900">
                V
              </div>

              <span className="text-xl font-semibold text-white">
                Vision
                <sup> (Works)</sup>
              </span>
            </div>

            <h1 className="max-w-md text-5xl font-bold leading-tight text-white">
              Build your future.
              <span className="block text-zinc-400">
                One step at a time.
              </span>
            </h1>

            <p className="mt-6 max-w-md text-zinc-400">
              Join our platform and experience a simpler, smarter way to
              manage everything in one place.
            </p>
          </div>

          <p className="text-sm text-zinc-500">
            © 2026 Vision. All rights reserved.
          </p>
        </div>

        {/* Form Side */}
        <div className="p-6 sm:p-10 lg:p-12">
          <div className="mx-auto max-w-md">

            {/* Mobile Logo */}
            <div className="mb-10 flex items-center gap-3 lg:hidden">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-xl font-bold text-zinc-900">
                V
              </div>

              <span className="text-xl font-semibold text-white">
                Vision
                <sup> (Works)</sup>
              </span>
            </div>

            {/* Heading */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white">
                {isLogin ? "Welcome back" : "Create an account"}
              </h2>

              <p className="mt-2 text-sm text-zinc-400">
                {isLogin
                  ? "Enter your details to access your account."
                  : "Create your account and get started today."}
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit(onSubmit)} 
              className="space-y-5"
            >

              {!isLogin && (
                <div>
                  <label className="mb-2 block text-sm font-medium text-zinc-300">
                    Full name
                  </label>

                  <div className="relative">
                    <User
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                    />

                    <input
                      type="text"
                      placeholder="John Doe"
                      {...register("name")}
                      className="w-full rounded-xl border border-white/10 bg-zinc-800 py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-white/30 focus:ring-2 focus:ring-white/10"
                    />

                  </div>
                    {errors.name && (
                      <p className="text-sm text-red-500 mt-2">
                        {errors.name.message}
                      </p>
                    )}
                </div>
              )}

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-300">
                  Email address
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                  />

                  <input
                    type="email"
                    placeholder="you@example.com"
                    {...register("email")}
                    className="w-full rounded-xl border border-white/10 bg-zinc-800 py-3.5 pl-11 pr-4 
                    text-sm text-white outline-none transition placeholder:text-zinc-600
                     focus:border-white/30 focus:ring-2 focus:ring-white/10"
                  />
                </div>
                {
                  errors.email && (
                    <p className="text-sm text-red-500 mt-2">
                      {errors.email.message}
                    </p>
                  )
                }
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="block text-sm font-medium text-zinc-300">
                    Password
                  </label>

                  {isLogin && (
                    <button
                      type="button"
                      className="text-xs text-zinc-400 transition hover:text-white"
                    >
                      Forgot password?
                    </button>
                  )}
                </div>

                <div className="relative">
                  <LockKeyhole
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    {...register("password")}
                    className="w-full rounded-xl border border-white/10 bg-zinc-800 py-3.5 pl-11 pr-12 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-white/30 focus:ring-2 focus:ring-white/10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 transition hover:text-white"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
                {
                  errors.password && (
                    <p className="text-sm text-red-500 mt-2">
                      {errors.password.message}
                    </p>
                  ) 
                }
              </div>

              {/* Confirm Password */}
              {!isLogin && (
                <div>
                  <label className="mb-2 block text-sm font-medium text-zinc-300">
                    Confirm password
                  </label>

                  <div className="relative">
                    <LockKeyhole
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                    />

                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full rounded-xl border border-white/10 bg-zinc-800 py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-white/30 focus:ring-2 focus:ring-white/10"
                    />
                  </div>
                </div>
              )}

              {/* Terms */}
              {!isLogin && (
                <label className="flex items-start gap-3 text-sm text-zinc-400">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-zinc-700 bg-zinc-800 accent-white"
                  />

                  <span>
                    I agree to the{" "}
                    <button
                      type="button"
                      className="text-white hover:underline"
                    >
                      Terms of Service
                    </button>{" "}
                    and{" "}
                    <button
                      type="button"
                      className="text-white hover:underline"
                    >
                      Privacy Policy
                    </button>
                  </span>
                </label>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-green-500 py-3.5 font-semibold text-zinc-900 transition hover:bg-zinc-200 active:scale-[0.98]"
              >
                {isLogin ? "Log in" : "Create account"}
              </button>
            </form>

            {/* Divider */}
            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-white/10" />

              <span className="text-xs text-zinc-500">
                OR
              </span>

              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Google Button */}
            <button
              type="button"
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-zinc-800 py-3.5 text-sm font-medium text-white transition hover:bg-zinc-700"
            >
              <span className="text-lg font-bold">G</span>
              Continue with Google
            </button>

            {/* Switch Auth Mode */}
            <p className="mt-8 text-center text-sm text-zinc-500">
              {isLogin
                ? "Don't have an account?"
                : "Already have an account?"}{" "}

              <button
                type="button"
                onClick={() => {
                  setMode(isLogin ? "signup" : "login");
                  setShowPassword(false);
                }}
                className="font-medium text-white hover:underline"
              >
                {isLogin ? "Sign up" : "Log in"}
              </button>
            </p>

          </div>
        </div>
      </div>
    </main>
    </>
  );
}