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
           <img class="block h-8 w-auto lg:hidden" src="../assets/shop.png" alt="Your Company" />
           <img class="hidden h-8 w-auto lg:block" src="../assets/shop.png" alt="Your Company" />
         </div>
         <div class="sm:ml-6 sm:block">
           <div class="flex space-x-4">
             <h2 class="text-lg text-white pt-1">Product by Date</h2>
             <router-link to="/mainadm" :class="[active ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium']">Main Menu</router-link>
           </div>
         </div>

       </div>

       <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
         

         <!-- Profile dropdown -->
         <Menu as="div" class="relative ml-3 z-50">
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
                 <a href="/account" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Your Profile</a>
               </MenuItem>
               <!-- <MenuItem v-slot="{ active }">
                 <a href="/pastorders" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Past Orders</a>
               </MenuItem> -->
               <MenuItem v-slot="{ active }">
                 <a @click= "logoutUser" href="/" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Sign out</a>
               </MenuItem>
             </MenuItems>
           </transition>
         </Menu>
       </div>
     </div>
   </div>
 </Disclosure>

    
        <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
            <h2 class=" font-sensserif text-4xl font-bold text-black pt-4 pb-4 text-center">Products by Date</h2>


            <div>

              <form class="flex items-center">   
                <label for="simple-search text-center" class="sr-only">Search</label>
                <div class="relative pl-6">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-9 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z " clip-rule="evenodd"></path></svg>
                    </div>
                    <input v-model="date" type="date" id="simple-search" class="bg-black-50 border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Date" required>
                </div>
                <button @click.prevent="datesearch(date)" class="p-2.5 ml-4 text-sm font-medium   text-black bg-black-700 rounded-lg border border-white-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    <span class="sr-only">Search</span>
                </button>
              </form>


            </div>

            

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
                    </tr>
                </thead>
                <tbody v-for="order in orders" :key="order.transactionId">
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td class="p-4 w-32">
                            <img :src="('data:image/jpeg;base64,'+order.product.image)" alt="urmom">
                        </td>
                        <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                            {{order.product.name}}
                        </td>
                        <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                            {{order.quantity}}
                        </td>
                        <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                            ₹{{(order.product.price*order.quantity)}}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    <Footer></Footer>     
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import Footer from '../components/Footer'
export default {
  name: 'PastOrders',
  data(){
    return{
    orders:[],
    date:'',
    }
  },
  components: {Footer,Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems, Bars3Icon, BellIcon, XMarkIcon},
  methods: {
    onSearch(){
        location.reload();
    },
    async datesearch(date){
      console.log(date)
        const resp = await axios.post('https://gomart-production.up.railway.app/admin/report/date',{senderId: localStorage.logged,startDate: date})
        .then(response => {
        console.log(response.data);
          this.orders = response.data;
        //window.location.reload()
      })}
  },
  mounted(){
    axios.post('https://gomart-production.up.railway.app/admin/report/date',{senderId: localStorage.logged,startDate:this.date})
        .then(response => {
        console.log(response.data);
          this.orders = response.data;
        })
    },
}

</script>