<template>
	<view>
		
	</view>
</template>

<script setup>
	import{onLoad} from "@dcloudio/uni-app"
	onLoad((e) => {
	  console.log(`onLoad 函数 ${e.name} ${e.age}`)
	  console.log("onLoad 函数 " + e.name + " " + e.age)
	})
</script>

<style>

</style>
