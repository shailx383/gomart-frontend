<template>
      <Navbar></Navbar>
      
      <Footer></Footer>

</template>

<script>
 import Navbar from '../components/Navbar.vue'
 import Footer from '../components/Footer.vue'

 export default{
      components: { Navbar, Footer},
      name: 'AddProd'
 }
      

</script>