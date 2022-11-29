<template>
   <Navbar></Navbar>

    <div class="overflow-hidden bg-white shadow sm:rounded-lg">
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg font-medium leading-6 text-gray-900">Applicant Information</h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500">Personal details and wallet.</p>
      </div>
      <div class="border-t border-gray-200">
        <dl>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Full name</dt>
            <dd contenteditable @input="changeName" class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{{account_info.firstName}} {{account_info.lastName}}
            </dd>
          </div>
          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Email</dt>
            <dd contenteditable @input="changeEmail" class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{{account_info.email}}</dd>
          </div>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Address</dt>
            <dd contenteditable @input="changeAddress" class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{{account_info.address}}</dd>
          </div>
          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Phone number</dt>
            <dd contenteditable @input="changePhone" class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{{account_info.phoneNumber}}</dd>
            <button @click="editInfo" type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Update Profile</button>
            <div v-if="edit" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
              <UpdateUser></UpdateUser>
    </div>
        </div>
        </dl>
      </div>
    </div>
    <div class="overflow-hidden bg-white shadow sm:rounded-lg">
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg font-medium leading-6 text-gray-900">E-wallet</h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500">Edit balance:</p>
      </div>
      <div class="border-t border-gray-200">
        <dl>
        </dl>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Current Balance:</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">₹{{ewallet.amount}}</dd>
            <button @click = "showModal" type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" data-modal-toggle="wallet-modal" >Add money</button>
            <div v-if="modal_shown" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
              <div class="relative w-full max-w-md h-full md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button @click = "showModal" type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="wallet-modal">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Close modal</span>
            </button>
              <Wallet></Wallet>
    </div>
    </div>
    </div>
    <div v-if="modal_shown" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </div>
        </div>
        </div>
         <Footer></Footer>
</template>
  
  <script>
  import Wallet from '../components/Wallet'
  import Navbar from '../components/Navbar'
  import Footer from '../components/Footer'
  import UpdateUser from '../components/UpdateUser'
  
  export default{
    name: 'Account',
    data() {
        return{
            account_info: '',
            customer_info: '',
            ewallet: '',
            modal_shown: false,
            edit: false
        }
    },
    components: {Navbar, Footer, Wallet, UpdateUser},
    methods: {
        changeName(e){
            this.profile.name=e.target.innerText
                },
        changeEmail(e){
            this.profile.email=e.target.innerText
                },
        changeAddress(e){
            this.profile.address=e.target.innerText
                },
        changePhone(e){
            this.profile.phone=e.target.innerText
                },   
        showModal(){
          this.modal_shown = !this.modal_shown
        },
        editInfo(){
          this.edit = !this.edit
        }  

    },
    mounted(){
      axios.get('http://localhost:8080/user/'+localStorage.logged.toString())
        .then(response => {
          this.account_info = response.data;
          
          console.log(response.data);
          this.customer_info = response.data.customer
          this.ewallet = this.customer_info.wallet;
        })

  }
}
  </script>