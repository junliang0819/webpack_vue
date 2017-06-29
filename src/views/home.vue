<template>
	<div class="swiper">
		<mt-swipe :auto="4000">
			<mt-swipe-item>
				<img src="/static/IMG_2834.PNG" alt="" width="100%">
			</mt-swipe-item>
			<mt-swipe-item>
				<img src="/static/IMG_2887.PNG" alt="" width="100%">
			</mt-swipe-item>
			<mt-swipe-item>
				<img src="/static/IMG_2893.PNG" alt="" width="100%">
			</mt-swipe-item>
		</mt-swipe>

		<mt-navbar v-model="selected">
			<mt-tab-item id="1">选项一</mt-tab-item>
			<mt-tab-item id="2">选项二</mt-tab-item>
			<mt-tab-item id="3">选项三</mt-tab-item>
		</mt-navbar>
		<mt-tab-container v-model="selected" style="margin-top: 3px">
			<mt-tab-container-item id="1">
				<mt-cell v-for="n in 10" :key="n" :title="'内容 ' + n"></mt-cell>
			</mt-tab-container-item>
			<mt-tab-container-item id="2">
				<mt-cell v-for="n in 6" :key="n" :title="'内容 ' + n"></mt-cell>
			</mt-tab-container-item>
			<mt-tab-container-item id="3">
				<mt-cell v-for="n in 3" :key="n" :title="'内容 ' + n"></mt-cell>
			</mt-tab-container-item>
		</mt-tab-container>
		<mt-button type="primary" @click="openPrompt">用户22验证1</mt-button>
	</div>
</template>
<style lang="less" scoped>
	.swiper {
		height: 200px;
	}
</style>

<script>
	import { MessageBox,Toast } from 'mint-ui'
	export default {
		data() {
			return {
				selected: '1'
			}
		},
		methods: {
			openPrompt() {
				MessageBox.prompt('请输入你的姓名').then(({ value, action }) => {
					if(value !== '文妮'&& value !=='陈俊良'){
						Toast('这名字恐怕🚫，兄弟！')
					}else{
						Toast({
							message: '验证通过',
							iconClass: 'icon icon-success'
						})
					}
					
				})
				.catch(()=>{

				})
			}
		}
	}
</script>