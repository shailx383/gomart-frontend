<template>
	<div class="py-6 px-6 lg:px-8">
		<h2 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
			Please enter your email
		</h2>
		<form @submit="ForgotPass" class="space-y-6" action="#">
			<div>
				<input
					v-model="login_data.email"
					type="email"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
					placeholder=""
					required
				/>
			</div>
			<button
				type="submit"
				class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>
				Enter
			</button>
		</form>
		<h3>Please check your email for relevant details</h3>

		<br /><br />
	</div>
</template>

<script>
import axios from "axios";
export default {
	name: "ForgotPass",
	data() {
		return {
			login_data: {
				email: "",
			},
		};
	},
	methods: {
		ForgotPass() {
			axios.post(
				"https://gomart-production.up.railway.app/mail/reset/password",
				this.login_data,
			);
		},
	},
};
</script>
