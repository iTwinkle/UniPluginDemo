<template>
	<view>
		4444444
	</view>
</template>

<script setup>
import {ref} from "vue"
const name = ref("张三")
import{onLoad,onReady} from "@dcloudio/uni-app"
	onLoad(()=>{
		name.value = "里斯"
		console.log("onLoad 函数")
	})
	onReady(()=>{
		
	})
	
</script>

<style lang="scss">

</style>