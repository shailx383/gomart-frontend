<template>
	<div class="py-6 px-6 lg:px-8">
		<h2 class="mb-4 text-xl font-medium text-black-900 dark:text-black">
			Are you sure you want to delete user {{ name }}?
		</h2>
		<br /><br /><br />
		<button
			@click="deleteUser"
			type="button"
			class="w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
		>
			Yes
		</button>
	</div>
</template>

<script>
import axios from "axios";
export default {
	name: "LoginError",
	props: ["id", "name"],
	data() {
		return {};
	},
	methods: {
		async deleteUser() {
			await axios.post("http://localhost:8080/admin/delete/user", {
				senderId: localStorage.logged,
				userId: this.id,
			});
			window.location.reload();
		},
	},
};
</script>
