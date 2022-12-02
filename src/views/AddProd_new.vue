<template>
<div class="bg-white">
<div class="pt-6">
    <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div class="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
            <div class="flex items-center justify-center w-full">
                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span class="font-semibold">Click to upload</span> or drag and drop</p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">JPG</p>
                        <img v-if="visible" :src="previewImage" class="h-full w-full object-cover object-center"/>
                        <input id="dropzone-file" type="file" accept="image/jpeg" class="hidden" @change=uploadImage>
                    </div>
                </label>
            </div> 
        </div>
        
        <div>
            <form @submit.prevent="addProduct" class="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="-space-y-px rounded-md shadow-sm">
            <h1>Add Product:</h1>
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 pt-4 pb-3">Name</label>
            <input v-model="product.name" id="name" name="name" type="text" autocomplete="" required="" class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="" />
          </div>
          <div>
            <label for="desc" class="block text-sm font-medium text-gray-700 pt-4 pb-3">Description</label>
            <input v-model="product.description" id="desc" name="desc" type="text" autocomplete="" required="" class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="" />
          </div>
          <div>
            <label for="price" class="block text-sm font-medium text-gray-700 pt-4 pb-3">Price</label>
            <input v-model="product.price" id="price" name="price" type="number" min="0" autocomplete="" required="" class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="" />
          </div>
          <div>
            <label for="q" class="block text-sm font-medium text-gray-700 pt-4 pb-3">Quantity</label>
            <input v-model="product.quantity" id="q" name="q" type="number" min="0" autocomplete="" required="" class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="" />
          </div>
            <div>
                <label for="q" class="block text-sm font-medium text-gray-700 pt-4 pb-3">Category</label>
                <select v-model="product.category" class="form-select appearance-none
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding bg-no-repeat
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                    <option value="0">Home Appliance</option>
                    <option value="1">Stationery</option>
                    <option value="2">Groceries</option>
                    <option value="3">Food</option>
                    <option value="4">Miscellanious</option>
                </select>
            </div>
          <div>
            <label for="address" class="block text-sm font-medium text-gray-700 pt-4 pb-3">Delivery time (days)</label>
            <input v-model="product.deliveryTime" id="del" min="0" name="del" type="number" autocomplete="" required="" class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="" />
          </div>
          <div>
            <label for="offer" class="block text-sm font-medium text-gray-700 pt-4 pb-3">Offer (% off)</label>
            <input v-model="product.offer" id="offer" name="offer" type="number" min="0" max="100" autocomplete="" required="" class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="" />
          </div>
        </div>
        <button type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Add Product
          </button>
      </form>
        </div>
    </div>
</div> 
</div>
<div v-if="show" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
    <div class="relative w-full max-w-md h-full md:h-auto">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button @click = "showSuccess()" type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="wallet-modal">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Close modal</span>
            </button>
            <AddedProduct></AddedProduct>
        </div>
    </div>
</div>
<div v-if="show" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
</template>

<script>
import AddedProduct from '../components/AddedProduct.vue'
export default{
    name: 'AddProd_new',
    components: {AddedProduct},
    data(){
        return {
            product: {
                name: '',
                description: '',
                price: 0,
                quantity: 0, 
                category: '',
                deliveryTime: 0,
                offer: 0,
                image: ''
            },
            visible: false,
            previewImage: null,
            show: false
        }
    },
    methods: {
        uploadImage(e){
            const image = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = e =>{
                this.previewImage = e.target.result;
                this.product.image = this.previewImage.slice(23,);
                this.visible=true;
                console.log(this.productimage);
            };
            
        },
        addProduct(){
             axios.post('https://gomart-production.up.railway.app/admin/addProduct', {senderId: localStorage.logged, product: this.product})
                 //.then(resp => (this.saveImage(resp.data)))
                 .then(this.showSuccess())
        },
        saveImage(id){
            axios.post('https://gomart-production.up.railway.app/manager/saveImage', {productId: id, file: this.image, userId: localStorage.logged})
                .then(this.showSuccess())
        },
        showSuccess(){
            this.show = !this.show
        }
    }
}
</script>