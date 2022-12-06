<template>
	<t-card>
		<div
			class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
		>
			<div class="w-full max-w-md space-y-8">
				<div>
					<img
						class="mx-auto h-12 w-auto"
						src="../assets/shop.png"
						alt="Your Company"
					/>
					<h2
						class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"
					>
						Sign in to your account
					</h2>
					<p class="mt-2 text-center text-sm text-gray-600">
						Or
						{{ " " }}
						<router-link to="/signup"
							><a class="text-lg"><u>Create an Account</u></a></router-link
						>
					</p>
				</div>
				<form
					@submit.prevent="loginUser"
					class="mt-8 space-y-6"
					action="#"
					method="POST"
				>
					<input type="hidden" name="remember" value="true" />
					<div class="-space-y-px rounded-md shadow-sm">
						<div>
							<label for="email-address" class="sr-only"
								>Email address</label
							>
							<input
								v-model="login_data.email"
								id="email-address"
								name="email"
								type="email"
								autocomplete="email"
								required=""
								class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
								placeholder="Email address"
							/>
						</div>
						<div>
							<label for="password" class="sr-only"
								>Password</label
							>
							<input
								v-model="login_data.password"
								id="password"
								name="password"
								type="password"
								autocomplete="current-password"
								required=""
								class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
								placeholder="Password"
							/>
						</div>
					</div>

					<div class="flex items-center justify-between">
						<!-- <div class="flex items-center">
							<input
								id="remember-me"
								name="remember-me"
								type="checkbox"
								class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
							/>
							<label
								for="remember-me"
								class="ml-2 block text-sm text-gray-900"
								>Remember me</label
							>
						</div> -->

						<button
							type="button"
							class="font-medium text-indigo-600 hover:text-indigo-500"
							@click="userForgot"
						>
							Forgot Password
							<span aria-hidden="true"> &rarr;</span>
						</button>
					</div>

					<div>
						<button
							type="submit"
							class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
						>
							<span
								class="absolute inset-y-0 left-0 flex items-center pl-3"
							>
								<LockClosedIcon
									class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
									aria-hidden="true"
								/>
							</span>
							Sign in
						</button>
					</div>
				</form>
			</div>
		</div>
		<!-- <button @click = "showModal" type="button" class="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900" data-modal-toggle="wallet-modal" >Add money</button> -->
		<div
			v-if="showError"
			class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
		>
			<div class="relative w-full max-w-md h-full md:h-auto">
				<!-- Modal content -->
				<div
					class="relative bg-white rounded-lg shadow dark:bg-gray-700"
				>
					<button
						@click="userError()"
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
					<LoginError></LoginError>
				</div>
			</div>
		</div>
		<div
			v-if="showError"
			class="opacity-25 fixed inset-0 z-40 bg-black"
		></div>

		<!-- <button @click = "showModal" type="button" class="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900" data-modal-toggle="wallet-modal" >Add money</button> -->
		<div
			v-if="showForgot"
			class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
		>
			<div class="relative w-full max-w-md h-full md:h-auto">
				<!-- Modal content -->
				<div
					class="relative bg-white rounded-lg shadow dark:bg-gray-700"
				>
					<button
						@click="userForgot()"
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
					<ForgotPass></ForgotPass>
				</div>
			</div>
		</div>
		<div
			v-if="showForgot"
			class="opacity-25 fixed inset-0 z-40 bg-black"
		></div>

		<div
			v-if="wrong"
			class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
		>
			<div class="relative w-full max-w-md h-full md:h-auto">
				<!-- Modal content -->
				<div
					class="relative bg-white rounded-lg shadow dark:bg-gray-700"
				>
					<button
						@click="wrongPassword()"
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
					<PasswordError></PasswordError>
				</div>
			</div>
		</div>
		<div v-if="wrong" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
	</t-card>
</template>

<script>
import { LockClosedIcon } from "@heroicons/vue/20/solid";
import LoginError from "../components/LoginError.vue";
import ForgotPass from "../components/ForgotPass.vue";
import PasswordError from "../components/PasswordError.vue";
export default {
	name: "Login",
	components: { LoginError, ForgotPass, PasswordError },
	data() {
		return {
			logged: "",
			login_data: {
				email: "",
				password: "",
			},
			role: "",
			error: "",
			showError: false,
			showForgot: false,
			wrong: false,
		};
	},
	methods: {
		loginUser() {
			axios
				.post(
					"https://gomart-production.up.railway.app/user/login",
					this.login_data,
				)
				.then((response) => {
					this.logged = response.data.userId;
					this.logging(response.data.role);
				})
				.catch((error) => {
					this.error = error.response.data.message;
					if (this.error == "User does not exist") {
						this.userError();
					} else if (this.error == "Invalid Password") {
						this.wrongPassword();
					}
				});
		},
		logging(r) {
			if (r == "CUSTOMER") {
				this.$router.push("/main");
			} else if (r == "MANAGER") {
				this.$router.push("/mainman");
			} else {
				this.$router.push("/mainadm");
			}
		},
		userError() {
			this.showError = !this.showError;
		},
		userForgot() {
			this.showForgot = !this.showForgot;
		},
		wrongPassword() {
			this.wrong = !this.wrong;
		},
	},
	mounted() {
		if (localStorage.logged) {
			this.logged = localStorage.logged;
		}
	},
	watch: {
		logged(newLogged) {
			localStorage.logged = newLogged;
		},
	},
};
</script>
