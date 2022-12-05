<template>
	<Navbar></Navbar>
	<!-- <Cart></Cart> -->

	<div class="bg-white" v-cloak>
		<div class="pt-6">
			<div
				class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
			>
				<div
					class="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block"
				>
					<img
						:src="'data:image/jpeg;base64,' + product.image"
						alt=""
						class="h-full w-full object-cover object-center"
					/>
				</div>
				<div
					class="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24"
				>
					<div
						class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8"
					>
						<h1
							class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
						>
							{{ product.name }}
						</h1>
					</div>

					<div class="mt-4 lg:row-span-3 lg:mt-0">
						<h2 class="sr-only">Product information</h2>
						<p class="text-3xl tracking-tight text-gray-900">
							₹{{ product.price }}
						</p>

						<form @submit.prevent="addToCart" class="mt-10">
							<div class="flex justify-center">
								<div class="mb-3 xl:w-96">
									<label
										for="exampleNumber0"
										class="form-label inline-block mb-2 text-gray-700"
										>Quantity:</label
									>
									<input
										v-model="purchase.quantity"
										type="number"
										class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
										id="exampleNumber0"
										placeholder=""
										min="1"
										:max="product.quantity"
									/>
								</div>
							</div>

							<button
								type="submit"
								class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
							>
								Add to Cart
							</button>
						</form>
					</div>

					<div
						class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8"
					>
						<div>
							<h3 class="sr-only">Description</h3>

							<div class="space-y-6">
								<p class="text-base text-gray-900">
									{{ product.description }}
								</p>
								<p class="text-base text-gray-900">
									Offer: {{ product.offer }}% off
								</p>
								<p class="text-base text-gray-900">
									In Stock: {{ product.quantity }}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div
		v-if="addedShown"
		class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
	>
		<div class="relative w-full max-w-md h-full md:h-auto">
			<!-- Modal content -->
			<div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
				<button
					@click="addedToCart()"
					type="button"
					class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
					data-modal-toggle="wallet-modal"
				>
					<svg
						aria-hidden="true"
						class="w-5 h-5"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							clip-rule="evenodd"
						></path>
					</svg>
					<span class="sr-only">Close modal</span>
				</button>
				<CartPopUp></CartPopUp>
			</div>
		</div>
	</div>
	<div v-if="addedShown" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
	<Footer></Footer>
</template>

<script>
import { ref } from "vue";
import { StarIcon } from "@heroicons/vue/20/solid";
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Cart from "../components/Cart_new.vue";
import CartPopUp from "../components/CartPopUp.vue";
export default {
	components: { Navbar, Footer, Cart, CartPopUp },
	name: "Product",
	data() {
		return {
			product: {},
			quan: "",
			purchase: {
				productId: this.$route.params.id,
				userId: localStorage.logged,
				quantity: "",
			},
			addedShown: false,
		};
	},
	mounted() {
		axios
			.get(
				"https://gomart-production.up.railway.app/user/products/" +
					this.$route.params.id,
			)
			.then((response) => (this.product = response.data));
	},
	methods: {
		addToCart() {
			axios
				.post(
					"https://gomart-production.up.railway.app/user/addToCart",
					this.purchase,
				)
				.then((response) => {
					this.addedToCart();
				});
		},
		addedToCart() {
			this.addedShown = !this.addedShown;
		},
	},
};
</script>

<style>
[v-cloak] {
	display: none !important;
}
</style>
