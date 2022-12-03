<template>
    <Navbar></Navbar>
    <div class="max-h-15">
        <Carousel></Carousel>
    </div>
    <div class="bg-gray-100">

    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <h2 class="text-2xl font-bold text-gray-900">Shop by Category:</h2>

        <div class="mt-6 space-y-12 lg:grid lg:grid-cols-5 lg:gap-x-6 lg:space-y-0">
          <div v-for="callout in callouts" :key="callout.name" class="group relative">
            <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
              <img :src="callout.imageSrc" :alt="callout.imageAlt" class="h-full w-full object-cover object-center" />
            </div>
            <h2 class="mt-6 text-lg text-black-500">
              <a :href="callout.href">
                <span class="absolute inset-0" />
                {{ callout.name }}
              </a>
            </h2>
            <!-- <p class="text-base font-semibold text-gray-900">{{ callout.description }}</p> -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import Carousel from '../components/Carousel.vue'
import { ref } from 'vue'

export default {
    name: 'Main',
    components: {Navbar, Footer, Carousel},
    data(){
        return {
            callouts: [
  {
    name: 'Home Appliances',
    description: 'Home Appliances',
    imageSrc: 'https://img.freepik.com/premium-photo/home-appliances-gas-cooker-tv-cinema-refrigerator-air-conditioner-microwave-laptop-washing-machine_252025-693.jpg?w=2000',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '/prodsearchbycat/0',
  },
  {
    name: 'Stationery',
    description: 'Stationery',
    imageSrc: 'https://www.stationeryhut.in/blog/wp-content/uploads/2016/01/office.jpg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '/prodsearchbycat/1',
  },
  {
    name: 'Groceries',
    description: 'Groceries',
    imageSrc: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JvY2VyeXxlbnwwfHwwfHw%3D&w=1000&q=80',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '/prodsearchbycat/2',
  },
  {
    name: 'Food',
    description: 'Food',
    imageSrc: 'https://media.istockphoto.com/id/458413277/photo/american-grocery-collection.jpg?s=612x612&w=0&k=20&c=gDN8XOo265kaFB7exEcdGhmAeh3kRfY1Er-CkNaA1iw=',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '/prodsearchbycat/3',
  },
  {
    name: 'Miscellaneous',
    description: 'Miscellaneous',
    imageSrc: 'https://media.istockphoto.com/id/499481514/photo/shopping-basket-with-body-care-and-beauty-products-over-white.jpg?s=612x612&w=0&k=20&c=5CW3Xg2Ax3Y5oihshVkKhpRyCGCTmuRDqSAbhR2HXw8=',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '/prodsearchbycat/4',
  },
]
        }
    }
}
</script>
