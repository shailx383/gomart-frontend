<template>
  <Navbar></Navbar>

<div class="bg-white">
  <div class="pt-6">


    <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
      <div class="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
        <img :src="product.images[0].src" :alt="product.images[0].alt" class="h-full w-full object-cover object-center" />
      </div>
      <div class="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
      <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
        <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{{ product.name }}</h1>
      </div>

      <div class="mt-4 lg:row-span-3 lg:mt-0">
        <h2 class="sr-only">Product information</h2>
        <p class="text-3xl tracking-tight text-gray-900">{{ product.price }}</p>


        <form class="mt-10">



          <button type="submit" class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add to bag</button>
        </form>
      </div>

      <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
        <div>
          <h3 class="sr-only">Description</h3>

          <div class="space-y-6">
            <p class="text-base text-gray-900">{{ product.description }}</p>
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
      name: 'Product',
      data () {
        return{
          product : {
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
}
        }
      }

  }

</script>
