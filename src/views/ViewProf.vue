<template>
	<Navbar />
	<div class="relative w-full max-w-2xl h-full md:h-auto">
		<!-- Modal content -->
		<form
			action="#"
			class="relative bg-white rounded-lg shadow dark:bg-gray-700"
		>
			<!-- Modal header -->
			<div
				class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600"
			>
				<h3 class="text-xl font-semibold text-gray-900 dark:text-white">
					Edit user
				</h3>
				<button
					type="button"
					class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
					data-modal-toggle="editUserModal"
				>
					<svg
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
				</button>
			</div>
			<!-- Modal body -->
			<div class="p-6 space-y-6">
				<div class="grid grid-cols-6 gap-6">
					<div class="col-span-6 sm:col-span-3">
						<label
							for="first-name"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>First Name</label
						>
						<input
							type="text"
							name="first-name"
							id="first-name"
							class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Bonnie"
							required=""
						/>
					</div>
					<div class="col-span-6 sm:col-span-3">
						<label
							for="last-name"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Last Name</label
						>
						<input
							type="text"
							name="last-name"
							id="last-name"
							class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Green"
							required=""
						/>
					</div>
					<div class="col-span-6 sm:col-span-3">
						<label
							for="email"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Email</label
						>
						<input
							type="email"
							name="email"
							id="email"
							class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="example@company.com"
							required=""
						/>
					</div>
					<div class="col-span-6 sm:col-span-3">
						<label
							for="phone-number"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Phone Number</label
						>
						<input
							type="number"
							name="phone-number"
							id="phone-number"
							class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="e.g. +(12)3456 789"
							required=""
						/>
					</div>
					<div class="col-span-6 sm:col-span-3">
						<label
							for="department"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Department</label
						>
						<input
							type="text"
							name="department"
							id="department"
							class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Development"
							required=""
						/>
					</div>
					<div class="col-span-6 sm:col-span-3">
						<label
							for="company"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Company</label
						>
						<input
							type="number"
							name="company"
							id="company"
							class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="123456"
							required=""
						/>
					</div>
					<div class="col-span-6 sm:col-span-3">
						<label
							for="current-password"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Current Password</label
						>
						<input
							type="password"
							name="current-password"
							id="current-password"
							class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="••••••••"
							required=""
						/>
					</div>
					<div class="col-span-6 sm:col-span-3">
						<label
							for="new-password"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>New Password</label
						>
						<input
							type="password"
							name="new-password"
							id="new-password"
							class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="••••••••"
							required=""
						/>
					</div>
				</div>
			</div>
			<!-- Modal footer -->
			<div
				class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600"
			>
				<button
					type="submit"
					class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Save all
				</button>
			</div>
		</form>
	</div>
	<Footer></Footer>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default {
	name: "ViewProf",
	components: { Navbar, Footer },
};
</script>
