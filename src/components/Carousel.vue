<template>
	<div class="carousel w-full max-h-15">
		<div id="slide1" class="carousel-item relative w-full">
			<img src="../assets/banner_12-1294x372.jpg" class="w-full" />
			<div
				class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
			>
				<a href="#slide3" class="btn btn-circle">❮</a>
				<a href="#slide2" class="btn btn-circle">❯</a>
			</div>
		</div>
		<div id="slide2" class="carousel-item relative w-full">
			<img
				src="../assets/orchard-product-fruit-banner-grocery-supermarket-store-shelves-variety-different-orgnaic-fresh-ripe-pears-apples-138064305.jpg"
				class="w-full"
			/>
			<div
				class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
			>
				<a href="#slide1" class="btn btn-circle">❮</a>
				<a href="#slide3" class="btn btn-circle">❯</a>
			</div>
		</div>
		<div id="slide3" class="carousel-item relative w-full">
			<img src="../assets/supermarket-banner.jpg" class="w-full" />
			<div
				class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
			>
				<a href="#slide2" class="btn btn-circle">❮</a>
				<a href="#slide1" class="btn btn-circle">❯</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Carousel",
};
</script>
