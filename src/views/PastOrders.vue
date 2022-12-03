<template>
    <Navbar></Navbar>
        <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
            <h2 class="text-4xl font-sensserif text-black pt-10  text-center ">Past Orders:</h2>

            <div class="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">

                
                <button type="button" @click="OrderPopUp()" class="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 mb-2 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900">Get orders in date range</button>
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
                        <th scope="col" class="py-3 px-6">
                            Date Ordered
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Date Expected
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
                        <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                            {{order.orderDate}}
                        </td>
                        <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                            {{addDate(order.orderDate, order.product.deliveryTime)}}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div v-if="daterange" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
              <div class="relative w-full max-w-md h-full md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button @click = "OrderPopUp()" type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="wallet-modal">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Close modal</span>
            </button>
              <DateRangePopUp></DateRangePopUp>
    </div>
    </div>
    </div>
    <div v-if="daterange" class="opacity-25 fixed inset-0 z-40 bg-black"></div>

    <Footer></Footer>     
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DateRangePopUp from '../components/DateRangePopUp.vue'
export default {
  name: 'PastOrders',
  data(){
    return{
    orders:[],
    daterange: false
    }
  },
  components: {Navbar,Footer, DateRangePopUp},
  methods: {
    addDate(date, days){
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result.toISOString().slice(0,10);
    },
    OrderPopUp(){
        this.daterange = !this.daterange
    }
  },
  mounted(){
    axios.get('https://gomart-production.up.railway.app/user/'+localStorage.logged.toString()+'/orders')
        .then(response => {
        console.log(response.data);
          this.orders = response.data;
        })
    },
}
</script>