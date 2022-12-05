<template>
	<div class="py-6 px-6 lg:px-8">
		<h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
			Edit User Info:
		</h3>
		<form @submit="editInfo" class="space-y-6" action="#">
			<div>
				<label
					for="fname"
					class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>First name:</label
				>
				<input
					v-model="edit_info.firstName"
					type="text"
					name="fname"
					id="fname"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
				/>
			</div>
			<div>
				<label
					for="lname"
					class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>Last name:</label
				>
				<input
					v-model="edit_info.lastName"
					type="text"
					name="lname"
					id="lname"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
				/>
			</div>
			<div>
				<label
					for="email"
					class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>Email:</label
				>
				<input
					v-model="edit_info.email"
					type="email"
					name="email"
					id="email"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
				/>
			</div>
			<div>
				<label
					for="phone"
					class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>Phone number:</label
				>
				<input
					v-model="edit_info.phoneNumber"
					type="tel"
					name="phone"
					id="phone"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
				/>
			</div>
			<div>
				<label
					for="address"
					class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>Address:</label
				>
				<input
					v-model="edit_info.address"
					type="text"
					name="address"
					id="address"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
				/>
			</div>
			<button
				type="submit"
				class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>
				Update
			</button>
		</form>
	</div>
</template>

<script>
import axios from "axios";
export default {
	name: "UpdateUser",
	props: ["edit_info"],
	data() {
		return {
			edit_info: {
				userId: localStorage.logged,
				firstName: "",
				middleName: null,
				lastName: "",
				dob: "2003-08-03",
				email: "",
				phoneNumber: "",
				address: "",
			},
		};
	},
	mounted() {
		axios
			.get(
				"https://gomart-production.up.railway.app/user/" +
					localStorage.logged.toString(),
			)
			.then((response) => {
				this.edit_info = response.data;
			});
	},
	methods: {
		async editInfo() {
			await axios.post(
				"https://gomart-production.up.railway.app/user/update",
				this.edit_info,
			);
			window.location.reload();
		},
	},
};
</script>
