<template>
<Navbar></Navbar>

<div class="bg-white">
<div class="pt-6">


      <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
      <div class="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">

      <div class="flex items-center justify-center w-full">
      <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
      <div class="flex flex-col items-center justify-center pt-5 pb-6">
      <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
      <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
      <p class="text-xs text-gray-500 dark:text-gray-400">JPG</p>

      <img v-if="visible" :src="previewImage" class="h-full w-full object-cover object-center"/>
      <input id="dropzone-file" type="file" accept="image/jpeg" class="hidden" @change=uploadImage>
      </div>
      </label>
      </div> 

      </div>
      <div class="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
      <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <label for="message" class="block mb-2 text-sm font-large text-gray-900 dark:text-white">Add Name</label>
            <textarea v-model="product.name"  id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" Enter Name Here"></textarea>
      </div>

      <div class="mt-4 lg:row-span-3 lg:mt-0">
            
      <h2 class="sr-only">Product information</h2>
      <label for="message" class="block mb-2 text-sm font-large text-gray-900 dark:text-white">Add Price</label>
            <input v-model="product.price"  type="number" id="price" min="0" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" "/>

            <label for="message" class="block mb-2 text-sm font-large text-gray-900 dark:text-white">Add Quantity</label>
            <input v-model="product.quantity"  type="number" id="quan" min="0" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" "/>

            <label for="message" class="block mb-2 text-sm font-large text-gray-900 dark:text-white">Add Delivery Time</label>
            <input v-model="product.deliveryTime"  type="number" id="del" min="0" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""/>

            <label for="message" class="block mb-2 text-sm font-large text-gray-900 dark:text-white">Add Offer</label>
            <input v-model="product.offer"  min="0" max= "100" type="number" id="offer" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""/>

            
      <form class="mt-10">

      <button type="submit" class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add Product</button>
      </form>
      </div>

      <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
      <div>
            <h3 class="sr-only">Description</h3>

            <div class="space-y-6">
            
            <label for="message" class="block mb-2 text-sm font-large text-gray-900 dark:text-white">Add Description</label>
            <textarea v-model="product.description"  id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" Enter Details Here"></textarea>
            </div>
      </div>
      </div>
      </div>
      
      </div>
      
</div>
</div>

<Footer></Footer>
</template>

<script>
import { ref } from 'vue'
import { StarIcon } from '@heroicons/vue/20/solid'
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
export default{
      components: { Navbar, Footer},
      name: 'AddProd',
      data () {
      return{
            visible:false,
            previewImage:null,
            product : {
                  name: '',
                  price: '',
                  href: '#',
                  images: [
                  {
                  src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
                  alt: 'Two each of gray, white, and black shirts laying flat.',
                  },
                  ],
                  description:'',
                  quantity: '',
                  deliveryTime: '',
                  offer: ''
            }
      }
      },
      methods:{
            uploadImage(e){

                const image = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = e =>{
                    this.previewImage = e.target.result;
                    console.log(this.previewImage);
                    this.visible=true
                };
                
            },
      }

}

</script>
