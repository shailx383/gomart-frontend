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
            <dt class="text-sm font-medium text-gray-500">ID</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{{profile.ID}}</dd>
          </div>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Full name</dt>
            <dd contenteditable @input="changeName" class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{{profile.name}}
                
            </dd>
          </div>
          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Email</dt>
            <dd contenteditable @input="changeEmail" class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{{profile.email}}</dd>
          </div>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Address</dt>
            <dd contenteditable @input="changeAddress" class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{{profile.address}}</dd>
          </div>
          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Phone number</dt>
            <dd contenteditable @input="changePhone" class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{{profile.phone}}</dd>
            <button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Update Profile</button>
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
            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">₹{{profile.balance}}</dd>
            <button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Add money</button>
          </div>
        </div>
        </div>
    <Footer></Footer>
</template>
  
  <script>
  import Navbar from '../components/Navbar'
  import Footer from '../components/Footer'
  export default{
    name: 'Account',
    data() {
        return{
            profile: {
                name: 'Arnav Yayavaram',
                ID: '#UC479',
                email: 'arnavyayavaram@gmail.com',
                address: 'VK-214, BITS Pilani Hyderabad Campus',
                phone: '9663388332',
                balance: 1000
            },
        }
    },
    components: {Navbar, Footer},
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
    }
  }
  </script>