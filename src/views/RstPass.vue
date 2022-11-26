<template>

    <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 border-2">
      <div class="w-full max-w-md space-y-8">
        <div>
          <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
          <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Reset Password</h2>
  
        </div>
        <form class="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div class="-space-y-px rounded-md shadow-sm">
            <div>
              <label for="password" class="block text-sm font-medium text-gray-700 pt-4 pb-3">Password</label>
              <input id="password" name="password" type="password" autocomplete="" required="" class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="" />
            </div>
            <div>
              <label for="password1" class="block text-sm font-medium text-gray-700 pt-4 pb-3">Confirm password</label>
              <input id="password1" name="password1" type="password" autocomplete="" required="" class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="" />
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 pt-4 pb-3">Email</label>
              <input id="email" name="email" type="email" autocomplete="" required="" class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="" />
            </div>
            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700 pt-4 pb-3">Phone number</label>
              <input id="phone" name="phone" type="tel" autocomplete="" required="" class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="" />
            </div>
          </div>
          
  
          <div>
            <button type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>

  </script>