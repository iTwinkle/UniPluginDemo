<!-- props 父传子 -->
<template>
	<view>
		<text>{{obj.username}}</text>
		<text>{{obj.age}}</text>
		<text>{{obj.sex}}</text>
	</view>
</template>

<script setup>
// defineProps(['obj'])
defineProps({
	obj:{
		type:Object,
		default(){
			return {username:"里斯",age:"22",sex:"flase"}
		}
	}
})
	
</script>

<style lang="scss">

</style>