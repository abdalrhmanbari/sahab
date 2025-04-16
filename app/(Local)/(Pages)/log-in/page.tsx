import React from 'react'

export default function LogIn() {
  return (
<div className="   gap-4 text-end  flex min-h-full flex-1 flex-col items-center justify-center px-6  lg:px-8 -mt-14 sm:m-0">
          <h2 className="m-auto mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            تسجيل دخول ل سحاب
          </h2>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                اسم
              </label>
              <div className="mt-2">
                <input
                dir='rtl'
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                إيميل
              </label>
              <div className="mt-2">
                <input
                dir='rtl'
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder='example@gmail.com'
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div>

                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                كلمة السر
                </label>
           
              <div className="mt-2">
                <input
                dir='rtl'
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
  )
}
