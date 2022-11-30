<template>
    <Navbar></Navbar>

    
        <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
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
                        <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                            {{order.product.name}}
                        </td>
                        <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                            {{order.quantity}}
                        </td>
                        <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                            {{order.product.price}}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>



    <Footer></Footer>     
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default {
  name: 'PastOrders',
  data(){
    return{
    orders:[]
    }
  },

  components: {Navbar,Footer},
  mounted(){
    axios.get('https://gomart-production.up.railway.app/user/'+localStorage.logged.toString()+'/orders')
        .then(response => {
        console.log(response.data);
          this.orders = response.data;
        })
    },
}
</script>