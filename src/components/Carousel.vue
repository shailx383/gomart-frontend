<template>
	<div class="carousel w-full max-h-15">
		<div id="slide1" class="carousel-item relative w-full">
			<img src="../assets/c1.jpg" class="w-full" />
			<div
				class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
			>
				<a href="#slide3" class="btn btn-circle">❮</a>
				<a href="#slide2" class="btn btn-circle">❯</a>
			</div>
		</div>
		<div id="slide2" class="carousel-item relative w-full">
			<img
				src="../assets/c2.jpg"
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
			<img src="../assets/c3.jpg" class="w-full" />
			<div
				class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
			>
				<a href="#slide2" class="btn btn-circle">❮</a>
				<a href="#slide4" class="btn btn-circle">❯</a>
			</div>
		</div>
		<div id="slide4" class="carousel-item relative w-full">
			<img src="../assets/c4.jpg" class="w-full" />
			<div
				class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
			>
				<a href="#slide3" class="btn btn-circle">❮</a>
				<a href="#slide5" class="btn btn-circle">❯</a>
			</div>
		</div>
		<div id="slide5" class="carousel-item relative w-full">
			<img src="../assets/c5.jpg" class="w-full" />
			<div
				class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
			>
				<a href="#slide4" class="btn btn-circle">❮</a>
				<a href="#slide6" class="btn btn-circle">❯</a>
			</div>
		</div>
		<div id="slide6" class="carousel-item relative w-full">
			<img src="../assets/c6.jpg" class="w-full" />
			<div
				class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
			>
				<a href="#slide5" class="btn btn-circle">❮</a>
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
