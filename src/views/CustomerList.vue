<template>
    <Navbar></Navbar>
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            Customers
            <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400"></p>
        </caption>
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>

                <th scope="col" class="py-3 px-6">
                    Name
                </th>
                <th scope="col" class="py-3 px-6">
                    UserId
                </th>
                <th scope="col" class="py-3 px-6">
                    Email
                </th>
                <th scope="col" class="py-3 px-6">
                    Address
                </th>
                <th scope="col" class="py-3 px-6">
                    Phone Number
                </th>
                <th scope="col" class="py-3 px-6">
                    <span class="sr-only">Edit</span>
                </th>
                <th scope="col" class="py-3 px-6">
                    <span class="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody v-for="customer in customers" :key="customer.userId">
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{customer.firstName}} {{customer.lastName}}
                </th>
                <td class="py-4 px-6">
                    {{customer.userId}}
                </td>
                <td class="py-4 px-6">
                    {{customer.email}}
                </td>
                <td class="py-4 px-6">
                    {{customer.address}}
                </td>
                <td class="py-4 px-6">
                    {{customer.phone}}
                </td>
                <td class="py-4 px-6">
                    <button type="button" @click="showReport(customer.userId, customer.firstName)" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" >View customer report</button>
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
  name: 'CustomerList',
  data(){
    return{
    customers:[]
    }
  },

  components: {Navbar,Footer},

  methods: {
    showReport(id, name){
        this.$router.push('/report/'+id+'/'+name)
      },

  },
  mounted(){
    axios.post('https://gomart-production.up.railway.app/admin/customers', {senderId: localStorage.logged})
        .then(response => this.customers = response.data);
  }
   
}
</script>