<template>
	<div id="app">
		<transition name="fade">
			<keep-alive>
	      <router-view></router-view>
	    </keep-alive>
		</transition>
	</div>
</template>
<style>
	.fade-enter-active, .fade-leave-active {
	  transition: opacity .5s
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
	  opacity: 0
	}
</style>