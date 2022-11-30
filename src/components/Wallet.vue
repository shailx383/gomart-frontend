<template>
  
            <div class="py-6 px-6 lg:px-8">
                <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Top-up wallet:</h3>
                <form @submit="topUpWallet" class="space-y-6" action="#">
                    <div>
                        <label for="amt" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter amount:</label>
                        <input v-model="edit_info.amount" type="number" name="amt" id="amt" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" required>
                    </div>
                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Top-up</button>
                </form>
            </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Wallet',
    data(){
        return{
            edit_info: {
                userId: localStorage.logged,
                amount: ''
            }
        }
    },
    methods: {
        topUpWallet(){
            axios.post('https://gomart-production.up.railway.app/user/wallet', this.edit_info)
        }
    }
}
</script>
