<!-- 
<template>
 <div class="mt-10 sm:mt-0">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="mt-5 md:col-span-2 md:mt-0">
        <form action="#" method="POST">
          <div class="overflow-hidden shadow sm:rounded-md">
            <div class="bg-white px-4 py-5 sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label for="first-name" class="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>
                <div class="col-span-6 sm:col-span-4">
                  <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>
                  <input type="text" name="email-address" id="email-address" autocomplete="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input type="text" name="phone" id="phone" autocomplete="" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label for="gender" class="block text-sm font-medium text-gray-700">Gender</label>
                  <select id="gender" name="gender" autocomplete="" class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                  <input type="password" name="password" id="password" autocomplete="" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label for="password1" class="block text-sm font-medium text-gray-700">Confirm Password</label>
                  <input type="password" name="password1" id="password1" autocomplete="" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <button type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Create Account</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import FormInput from './FormInput.vue';
export default {
  name: 'SignUp'
}
</script> -->
<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-gray-50">
    <body class="h-full">
    ```
  -->
  <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 border-2">
    <div class="w-full max-w-md space-y-8">
      <div>
        <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Create your account</h2>

      </div>
      <form class="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 pt-4 pb-3">Name</label>
            <input id="name" name="name" type="text" autocomplete="" required="" class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="" />
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 pt-4 pb-3">Email</label>
            <input id="email" name="email" type="email" autocomplete="" required="" class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="" />
          </div>
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700 pt-4 pb-3">Password</label>
            <input id="password" name="password" type="password" autocomplete="" required="" class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="" />
          </div>
          <div>
            <label for="password1" class="block text-sm font-medium text-gray-700 pt-4 pb-3">Confirm password</label>
            <input id="password1" name="password1" type="password" autocomplete="" required="" class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="" />
          </div>
          <div>
            <label for="dob" class="block text-sm font-medium text-gray-700 pt-4 pb-3">Date of Birth</label>
            <input id="dob" name="dob" type="date" autocomplete="" required="" class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="" />
          </div>
          <div>
            <label for="phone" class="block text-sm font-medium text-gray-700 pt-4 pb-3">Phone number</label>
            <input id="phone" name="phone" type="tel" autocomplete="" required="" class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="" />
          </div>
        </div>
        <div class="col-span-6 sm:col-span-3">
          <label for="gender" class="block text-sm font-medium text-gray-700">Gender</label>
          <select id="gender" name="gender" autocomplete="" class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
        
        <div class="flex items-center justify-between">

          <div class="text-sm">
            <a href="/" class="font-medium text-indigo-600 hover:text-indigo-500">Already have an account?</a>
          </div>
        </div>

        <div>
          <button type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Create Account
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { LockClosedIcon } from '@heroicons/vue/20/solid'
</script>