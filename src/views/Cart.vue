<template>
    <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <DisclosureButton class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex flex-shrink-0 items-center">
              <img class="block h-8 w-auto lg:hidden" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
              <img class="hidden h-8 w-auto lg:block" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
            </div>
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
              </div>
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button type="button" class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>
  
            <!-- Profile dropdown -->
            <Menu as="div" class="relative ml-3">
              <div>
                <MenuButton class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span class="sr-only">Open user menu</span>
                  
                  <div class="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                      <svg class="absolute -left-1 w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                  </div>

                </MenuButton>
              </div>
              <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <MenuItem v-slot="{ active }">
                    <a href="account" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Your Profile</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Settings</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Sign out</a>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>
  
      <DisclosurePanel class="sm:hidden">
        <div class="space-y-1 px-2 pt-2 pb-3">
          <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
<div class="overflow-x-auto relative shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">
                    <span class="sr-only">Image</span>
                </th>
                <th scope="col" class="py-3 px-6">
                    Product
                </th>
                <th scope="col" class="py-3 px-6">
                    Qty
                </th>
                <th scope="col" class="py-3 px-6">
                    Price
                </th>
                <th scope="col" class="py-3 px-6">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="p-4 w-32">
                    <img src="data:image/jpeg;base64,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" alt="Apple Watch">
                </td>
                <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                    Apple Watch
                </td>
                <td class="py-4 px-6">
                    <div class="flex items-center space-x-3">
                        <button class="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span class="sr-only">Quantity button</span>
                            <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>
                        <div>
                            <input type="number" id="first_product" class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required>
                        </div>
                        <button class="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span class="sr-only">Quantity button</span>
                            <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                </td>
                <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                    $599
                </td>
                <td class="py-4 px-6">
                    <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="p-4 w-32">
                    <img src="data:image/jpeg;base64,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" alt="Apple Imac">
                </td>
                <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                    Imac 27"
                </td>
                <td class="py-4 px-6">
                    <div class="flex items-center space-x-3">
                        <button class="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span class="sr-only">Quantity button</span>
                            <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>
                        <div>
                            <input type="number" id="second_product" class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required>
                        </div>
                        <button class="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span class="sr-only">Quantity button</span>
                            <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                </td>
                <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                    $2499
                </td>
                <td class="py-4 px-6">
                    <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="p-4 w-32">
                    <img src="https://m.media-amazon.com/images/I/31jQ91XUDhS.jpg" alt="Iphone 12">
                </td>
                <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                    Iphone 12 
                </td>
                <td class="py-4 px-6">
                    <div class="flex items-center space-x-3">
                        <button class="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span class="sr-only">Quantity button</span>
                            <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>
                        <div>
                            <input type="number" id="third_product" class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required>
                        </div>
                        <button class="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span class="sr-only">Quantity button</span>
                            <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                </td>
                <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                    $999
                </td>
                <td class="py-4 px-6">
                    <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

<footer class="bg-white dark:bg-gray-900">
    <div class="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Company</h2>
            <ul class="text-gray-500 dark:text-gray-400">
                <li class="mb-4">
                    <a href="#" class=" hover:underline">About</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Careers</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Brand Center</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Blog</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Help center</h2>
            <ul class="text-gray-500 dark:text-gray-400">
                <li class="mb-4">
                    <a href="#" class="hover:underline">Discord Server</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Twitter</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Facebook</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Contact Us</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Legal</h2>
            <ul class="text-gray-500 dark:text-gray-400">
                <li class="mb-4">
                    <a href="#" class="hover:underline">Privacy Policy</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Licensing</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Download</h2>
            <ul class="text-gray-500 dark:text-gray-400">
                <li class="mb-4">
                    <a href="#" class="hover:underline">iOS</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Android</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Windows</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">MacOS</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="py-6 px-4 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2022 <a href="https://flowbite.com/">Flowbite™</a>. All Rights Reserved.
        </span>
        <div class="flex mt-4 space-x-6 sm:justify-center md:mt-0">
            <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                <span class="sr-only">Facebook page</span>
            </a>
            <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
                <span class="sr-only">Instagram page</span>
            </a>
            <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                <span class="sr-only">Twitter page</span>
            </a>
            <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                <span class="sr-only">GitHub account</span>
            </a>
            <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
                <span class="sr-only">Dribbble account</span>
            </a>
        </div>
    </div>
</footer>

</template>
<!-- 
<script>

export default{
data() {
return {
  type:'type of product',
  product: 'Blender',
  brand: 'Prestige',
  details: ['detail1 ','detail2','detail3'],
  id:'',
  image:image,
  quantity:0,
  stock:5
}
},

methods: {
addToCart() {
  this.quantity++
  this.stock--
},
subFromCart() {
  if(this.quantity!=0){
  this.quantity--
  this.stock++
  }
},
},
computed: {
 productName() {
   return this.brand + ' ' + this.product
 },
 image() {
   return this.image
 },
 inStock() {
   return this.stock
 },
 quan() {
   return this.quantity
 }

 },
name: 'ProdDisp'

}

</script> 
 -->

 <script setup>
 import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
 import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
 import { ref } from 'vue'
   import { StarIcon } from '@heroicons/vue/20/solid'
   import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'

 const navigation = [
    { name: 'Cart', href: '/cart', current: false },
    { name: 'Search', href: '#', current: false },
 ]
 const product = {
 name: 'Basic Tee 6-Pack',
 price: '$192',
 href: '#',
 breadcrumbs: [
   { id: 1, name: 'Men', href: '#' },
   { id: 2, name: 'Clothing', href: '#' },
 ],
 images: [
   {
     src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
     alt: 'Two each of gray, white, and black shirts laying flat.',
   },
   {
     src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
     alt: 'Model wearing plain black basic tee.',
   },
   {
     src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
     alt: 'Model wearing plain gray basic tee.',
   },
   {
     src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
     alt: 'Model wearing plain white basic tee.',
   },
 ],
 colors: [
   { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
   { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
   { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
 ],
 sizes: [
   { name: 'XXS', inStock: false },
   { name: 'XS', inStock: true },
   { name: 'S', inStock: true },
   { name: 'M', inStock: true },
   { name: 'L', inStock: true },
   { name: 'XL', inStock: true },
   { name: '2XL', inStock: true },
   { name: '3XL', inStock: true },
 ],
 description:
   'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
 highlights: [
   'Hand cut and sewn locally',
   'Dyed with our proprietary colors',
   'Pre-washed & pre-shrunk',
   'Ultra-soft 100% cotton',
 ],
 details:
   'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
 quantity: 5,
 offer: 30,
 category: 'Food'

}
const reviews = { href: '#', average: 4, totalCount: 117 }

const selectedColor = ref(product.colors[0])
const selectedSize = ref(product.sizes[2])
 </script>
