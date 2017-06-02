<template>
	<div>
		121332
		<img src="dist/assets/images/me.jpg" alt="">
		<img :src="photo_me_url">
	</div>
</template>

<script>
	import photo_me from 'src/assets/images/me.jpg'
	export default {
		data() {
			return {
				photo_me_url: photo_me
			}
		},
		methods: {
			
		}
	}
</script>