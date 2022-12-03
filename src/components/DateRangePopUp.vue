<template>
  
    <div class="py-6 px-6 lg:px-8">
        <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Top-up wallet:</h3>
        <form @submit.prevent="showOrders()" class="space-y-6" action="#">
            <div>
                <label for="startDate" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Start Date:</label>
                <input v-model="startDate" type="date" name="startDate" id="startDate" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" required>
            </div>
            <div>
                <label for="endDate" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter End Date:</label>
                <input v-model="endDate" type="date" name="endDate" id="endDate" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" required>
            </div>
            <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get Orders</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
name: 'DateRangePopUp',
    data(){
        return{
            startDate: '',
            endDate: ''
            }
    },
    methods: {
        showOrders(){
            this.$router.push('/ordersbydate/'+this.startDate+'/'+this.endDate)
    }
    }
}
</script>
