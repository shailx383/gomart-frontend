<template>
    <Navbar></Navbar>
        
    
        <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
            <h2 class="text-4xl font-extrabold dark:text-white pt-4 pb-4">Past Orders:</h2>
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
  methods: {
    addDate(date, days){
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result.toISOString().slice(0,10);
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