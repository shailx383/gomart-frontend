<template>
	<Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
		<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
			<div class="relative flex h-16 items-center justify-between">
				<div
					class="absolute inset-y-0 left-0 flex items-center sm:hidden"
				>
					<!-- Mobile menu button-->
					<DisclosureButton
						class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
					>
						<span class="sr-only">Open main menu</span>
						<Bars3Icon
							v-if="!open"
							class="block h-6 w-6"
							aria-hidden="true"
						/>
						<XMarkIcon
							v-else
							class="block h-6 w-6"
							aria-hidden="true"
						/>
					</DisclosureButton>
				</div>
				<div
					class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
				>
					<div class="flex flex-shrink-0 items-center">
						<router-link to="/mainadm"
							><img
								class="img max-h-8"
								src="../assets/shop.png"
								alt=""
								srcset=""
						/></router-link>
					</div>
					<div class="sm:ml-6 sm:block">
						<div class="flex space-x-4">
							<h2
								class="font-sansserif text-lg text-white pt-1 ml-3 mr-7"
							>
								Customer List
							</h2>
							<router-link
								to="/manadmlist"
								:class="[
									active
										? 'bg-gray-900 text-white'
										: 'text-gray-300 hover:bg-gray-700 hover:text-white',
									'px-3 py-2 rounded-md text-sm font-medium',
								]"
								>Managers</router-link
							>
							<router-link
								to="/addprod"
								:class="[
									active
										? 'bg-gray-900 text-white'
										: 'text-gray-300 hover:bg-gray-700 hover:text-white',
									'px-3 py-2 rounded-md text-sm font-medium',
								]"
								>Add Product</router-link
							>
							<router-link
								to="/prodbydate"
								:class="[
									active
										? 'bg-gray-900 text-white'
										: 'text-gray-300 hover:bg-gray-700 hover:text-white',
									'px-3 py-2 rounded-md text-sm font-medium',
								]"
								>Product By Date</router-link
							>
						</div>
					</div>
				</div>

				<div
					class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
				>
					<!-- Profile dropdown -->
					<Menu as="div" class="relative ml-3 z-50">
						<div>
							<MenuButton
								class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
							>
								<span class="sr-only">Open user menu</span>
								<div
									class="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600"
								>
									<svg
										class="absolute -left-1 w-12 h-12 text-gray-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
											clip-rule="evenodd"
										></path>
									</svg>
								</div>
							</MenuButton>
						</div>
						<transition
							enter-active-class="transition ease-out duration-100"
							enter-from-class="transform opacity-0 scale-95"
							enter-to-class="transform opacity-100 scale-100"
							leave-active-class="transition ease-in duration-75"
							leave-from-class="transform opacity-100 scale-100"
							leave-to-class="transform opacity-0 scale-95"
						>
							<MenuItems
								class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
							>
								<MenuItem v-slot="{ active }">
									<a
										href="/account"
										:class="[
											active ? 'bg-gray-100' : '',
											'block px-4 py-2 text-sm text-gray-700',
										]"
										>Your Profile</a
									>
								</MenuItem>
								<!-- <MenuItem v-slot="{ active }">
                  <a href="/pastorders" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Past Orders</a>
                </MenuItem> -->
								<MenuItem v-slot="{ active }">
									<a
										@click="logoutUser"
										:class="[
											active ? 'bg-gray-100' : '',
											'block px-4 py-2 text-sm text-gray-700',
										]"
										>Sign out</a
									>
								</MenuItem>
							</MenuItems>
						</transition>
					</Menu>
				</div>
			</div>
		</div>
	</Disclosure>
	<div class="overflow-x-auto relative shadow-md sm:rounded-lg">
		<table
			class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
		>
			<caption
				class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"
			>
				Customers
				<p
					class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400"
				></p>
			</caption>
			<thead
				class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
			>
				<tr>
					<th scope="col" class="py-3 px-6">Name</th>
					<th scope="col" class="py-3 px-6">UserId</th>
					<th scope="col" class="py-3 px-6">Email</th>
					<th scope="col" class="py-3 px-6">Address</th>
					<th scope="col" class="py-3 px-6">Phone Number</th>
					<th scope="col" class="py-3 px-6">
						<span class="sr-only">Edit</span>
					</th>
					<th scope="col" class="py-3 px-6">
						<span class="sr-only">Edit</span>
					</th>
				</tr>
			</thead>
			<tbody v-for="customer in customers" :key="customer.userId">
				<tr
					class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
				>
					<th
						scope="row"
						class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
					>
						{{ customer.firstName }} {{ customer.lastName }}
					</th>
					<td class="py-4 px-6">
						{{ customer.userId }}
					</td>
					<td class="py-4 px-6">
						{{ customer.email }}
					</td>
					<td class="py-4 px-6">
						{{ customer.address }}
					</td>
					<td class="py-4 px-6">
						{{ customer.phone }}
					</td>
					<td class="py-4 px-6">
						<button
							type="button"
							@click="
								showReport(customer.userId, customer.firstName)
							"
							class="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900"
						>
							View customer report
						</button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>

	<Footer></Footer>
</template>

<script>
import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Menu,
	MenuButton,
	MenuItem,
	MenuItems,
} from "@headlessui/vue";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/vue/24/outline";
import Footer from "../components/Footer.vue";
import ManAdmList from "../views/ManAdmList.vue";
import AddProd from "../views/AddProd.vue";
import EditProd from "../views/EditProd.vue";
import ProductList from "../components/ProductList.vue";
export default {
	name: "CustomerList",
	data() {
		return {
			customers: [],
		};
	},

	components: {
		ProductList,
		EditProd,
		AddProd,
		ManAdmList,
		Footer,
		Disclosure,
		DisclosureButton,
		DisclosurePanel,
		Menu,
		MenuButton,
		MenuItem,
		MenuItems,
		Bars3Icon,
		BellIcon,
		XMarkIcon,
	},

	methods: {
		showReport(id, name) {
			this.$router.push("/report/" + id + "/" + name);
		},
		async logoutUser() {
			await axios.post("http://localhost:8080/user/logout", {
				userId: localStorage.logged,
			});
			localStorage.removeItem("logged");
			this.$router.push("/");
		},
	},
	mounted() {
		axios
			.post("http://localhost:8080/admin/customers", {
				senderId: localStorage.logged,
			})
			.then((response) => (this.customers = response.data));
	},
};
</script>
