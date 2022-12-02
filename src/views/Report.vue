<template>
    <Navbar></Navbar>
        <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
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
                            ₹{{order.product.price*order.quantity}}
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
  name: 'Report',
  data(){
    return{
    orders:[]
    }
  },
  methods:{

  },

  components: {Navbar,Footer},
  mounted(){
    axios.post('https://gomart-production.up.railway.app/admin/report', {senderId: localStorage.logged, userId: id, startDate:'2022-11-22', endDate:'2022-12-02'})
        .then(response => this.orders = response.data);
    },
}
</script>