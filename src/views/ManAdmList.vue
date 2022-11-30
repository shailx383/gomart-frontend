<template>
<Navbar/>
<div>
<div v-if="modal_shown" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
    <div class="relative w-full max-w-2xl h-full md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button @click = "showModal" type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Close modal</span>
            </button>
              <ManProfile></ManProfile>
    </div>
    </div>
</div>
<div v-if="modal_shown" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
</div>

<div class="overflow-x-auto relative shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            Current Managers/Admins
            <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400"></p>
        </caption>
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">
                    ID
                </th>
                <th scope="col" class="py-3 px-6">
                    Username
                </th>
                <th scope="col" class="py-3 px-6">
                    Accepted On
                </th>
                <th scope="col" class="py-3 px-6">
                    Role
                </th>
                <th scope="col" class="py-3 px-6">
                    <span class="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    1
                </th>
                <td class="py-4 px-6">
                    shailx123
                </td>
                <td class="py-4 px-6">
                    17/6/19
                </td>
                <td class="py-4 px-6">
                    Manager
                </td>
                <td class="py-4 px-6">
                    <button @click = "showModal" type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" >View</button>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    2
                </th>
                <td class="py-4 px-6">
                    shailx123
                </td>
                <td class="py-4 px-6">
                    1/1/21
                </td>
                <td class="py-4 px-6">
                    Manager
                </td>
                <td class="py-4 px-6">

                    <a href="#" type="button" data-modal-toggle="editUserModal" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   3
                </th>
                <td class="py-4 px-6">
                    shailx123
                </td>
                <td class="py-4 px-6">
                    20/12/18
                </td>
                <td class="py-4 px-6">
                    Admin
                </td>
                <td class="py-4 px-6">

                    <a href="#" type="button" data-modal-toggle="editUserModal" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>





<div class="overflow-x-auto relative shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            Pending Requests
            <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400"></p>
        </caption>
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">
                    ID
                </th>
                <th scope="col" class="py-3 px-6">
                    Username
                </th>
                <th scope="col" class="py-3 px-6">
                    Requested On
                </th>
                <th scope="col" class="py-3 px-6">
                    Applying For
                </th>
                <th scope="col" class="py-3 px-6">
                    <span class="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    1
                </th>
                <td class="py-4 px-6">
                    shailx123
                </td>
                <td class="py-4 px-6">
                    17/6/19
                </td>
                <td class="py-4 px-6">
                    Manager
                </td>
                <td class="py-4 px-6">

                    <a href="#" type="button" data-modal-toggle="editUserModal" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    2
                </th>
                <td class="py-4 px-6">
                    shailx123
                </td>
                <td class="py-4 px-6">
                    1/1/21
                </td>
                <td class="py-4 px-6">
                    Manager
                </td>
                <td class="py-4 px-6">

                    <a href="#" type="button" data-modal-toggle="editUserModal" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   3
                </th>
                <td class="py-4 px-6">
                    shailx123
                </td>
                <td class="py-4 px-6">
                    20/12/18
                </td>
                <td class="py-4 px-6">
                    Admin
                </td>
                <td class="py-4 px-6">

                    <a href="#" type="button" data-modal-toggle="editUserModal" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
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
import ManProfile from '../components/ManProfile'

export default{
  name: 'ManAdmList',
  data() {
      return{

          modal_shown: false,
          edit: false
      }
  },
  components: {Navbar, Footer, ManProfile},
  methods: {
      showModal(){
        this.modal_shown = !this.modal_shown
      },


  }
}
</script>
