<template>
  <Navbar></Navbar>
  <!-- <Cart></Cart> -->

<div class="bg-white">
  <div class="pt-6">


  <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
      <div class="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
        <img src="" alt="" class="h-full w-full object-cover object-center" />
      </div>
      <div class="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
      <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
        <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{{ product.name }}</h1>
      </div>

      <div class="mt-4 lg:row-span-3 lg:mt-0">
        <h2 class="sr-only">Product information</h2>
        <p class="text-3xl tracking-tight text-gray-900">₹{{ product.price }}</p>


        <form class="mt-10">



          <button type="submit" class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add to Cart</button>
        </form>
      </div>

      <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
        <div>
          <h3 class="sr-only">Description</h3>

          <div class="space-y-6">
            <p class="text-base text-gray-900">{{ product.description }}</p>
            <p class="text-base text-gray-900">Offer: {{ product.offer }}% off</p>
            <p class="text-base text-gray-900">In Stock: {{ product.quantity }}</p>
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
  import Cart from '../components/Cart_new.vue'
  export default{
      components: { Navbar, Footer, Cart},
      name: 'Product',
      data () {
        return{
          product : {}
        }
      },
      mounted(){
        axios.get('http://localhost:8080/user/products/'+this.$route.params.id)
          .then(response => (this.product = response.data))
      }

  }

</script>
