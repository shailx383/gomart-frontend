<template>
	<div class="py-6 px-6 lg:px-8">
		<h2 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
			Success!
		</h2>
		<div>
			<h3>Your product has been {{ mode }} the store.</h3>
		</div>
		<br /><br />
		<button
			@click="goToMain()"
			type="button"
			class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
		>
			Go to Dashboard
		</button>
	</div>
</template>

<script>
import axios from "axios";
export default {
	name: "AddedProduct",
	props: ["mode"],
	data() {
		return {
			role: "",
		};
	},
	methods: {
		goToMain() {
			if (this.role == "MANAGER") {
				this.$router.push("/mainman");
			} else if (this.role == "ADMIN") {
				this.$router.push("/mainadm");
			}
		},
	},
	mounted() {
		axios
			.get(
				"https://gomart-production.up.railway.app/user/" +
					localStorage.logged,
			)
			.then((response) => {
				this.role = response.data.role;
			});
	},
};
</script>
