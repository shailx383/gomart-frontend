<template>
    <Navbar></Navbar>
<div class="overflow-x-auto relative">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6 rounded-l-lg">
                    Product name
                </th>
                <th scope="col" class="py-3 px-6">
                    Qty
                </th>
                <th scope="col" class="py-3 px-6">
                    Offer
                </th>
                <th scope="col" class="py-3 px-6 rounded-r-lg">
                    Total Price
                </th>
            </tr>
        </thead>
        <tbody v-for="product in products" :key="product.product.productId">
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{product.product.name}}
                </th>
                <td class="py-4 px-6">
                    {{product.quantity}}
                </td>
                <td class="py-4 px-6">
                    {{product.product.offer}}% off
                </td>
                <td class="py-4 px-6">
                    {{(product.product.price * product.quantity)*(1-(product.product.offer / 100))}}
                </td>
            </tr>
            <!-- <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td class="py-4 px-6">
                    1
                </td>
                <td class="py-4 px-6">
                    $1999
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td class="py-4 px-6">
                   1
                </td>
                <td class="py-4 px-6">
                    $99
                </td>
            </tr> -->
        </tbody>
        <tfoot>
            <tr class="font-semibold text-gray-900 dark:text-white">
                <th scope="row" class="py-3 px-6 text-base">Total</th>
                <td class="py-3 px-6">{{totalQuan}}</td>
                <td></td>
                <td class="py-3 px-6">₹{{totalPrice}}</td>
            </tr>
        </tfoot>
    </table>
</div>
<div class = "justify-center">
<div class="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">


    <button @click="placeOrder" type="button" class="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900">Place Order</button>
</div>
</div>
<div v-if="error_shown" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
              <div class="relative w-full max-w-md h-full md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button @click = "showError" type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="wallet-modal">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Close modal</span>
            </button>
              <WalletError></WalletError>
    </div>
    </div>
    </div>
    <div v-if="boughtShown" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
              <div class="relative w-full max-w-md h-full md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button @click = "checkedOut()" type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="wallet-modal">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Close modal</span>
            </button>
              <CheckoutPopUp></CheckoutPopUp>
    </div>
    </div>
    </div>
    <div v-if="boughtShown" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
<Footer></Footer>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import WalletError from '@/components/WalletError.vue'
import CheckoutPopUp from '@/components/CheckoutPopUp.vue'
export default {
    name: 'Checkout',
    data(){
        return{
            products: [],
            totalPrice: 0,
            totalQuan: 0,
            error_shown: false,
            error: '',
            boughtShown: false
        }
    },
    components: {Navbar, Footer, WalletError, CheckoutPopUp},
    methods: {
        total_price(){
        for (let i = 0; i < this.products.length; i++){
          this.totalPrice += (this.products[i].product.price * this.products[i].quantity * (1-(this.products[i].product.offer)/100))
        }
      },
      total_quantity(){
        for (let i = 0; i < this.products.length; i++){
          this.totalQuan += (this.products[i].quantity)
        }
      },
      showError(){
        this.error_shown = !this.error_shown
      },
      placeOrder(){
        axios.post('https://gomart-production.up.railway.app/user/cart/checkout', {userId: localStorage.logged})
        .then(response => {
                            this.checkedOut();
                            }) 
        .catch(error => {this.error = error.response.data.message;
                          if (this.error =='Insufficient balance'){
                            this.showError()
                          }
        })

      },
      goToMain(){
        this.$router.push('/main')
      },
      checkedOut(){
        this.boughtShown = !this.boughtShown
      }
    },
    mounted(){
      axios.get('https://gomart-production.up.railway.app/user/'+localStorage.logged.toString()+'/cart')
        .then(response => {this.products = response.data;
                            this.total_price();
                            this.total_quantity();
                })
    }
}
</script>
