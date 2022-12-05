<template>
  
    <div class="py-6 px-6 lg:px-8">
        <h2 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Error!</h2>
            <div>
                <h3>Incorrect Password!</h3>
            </div>
            <br/><br/><br/><br/><br/>
            <button @click="goToAccount" type="button" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Try Again</button>
        
    </div>
</template>

<script>
import axios from 'axios'
export default {
name: 'PasswordError',
data(){
return{
}
},
methods: {
goToAccount(){
    this.$router.push('/login')
}
}
}
</script>
