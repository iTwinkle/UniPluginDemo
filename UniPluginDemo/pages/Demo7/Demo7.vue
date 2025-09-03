<template>
	<view class="container">
		<view class="layout">
			<view class="box" v-for="item in pets" :key="item.id">
				<view class="pic">
					<view>{{item.title}}</view>
					<image :src="item.url" mode="widthFix"></image>
			<!-- 		<view class="tex">{{item.width}}*{{item.height}} </view> -->
				</view>
				
			</view>
			
		</view>
		
		
	</view>
</template>

<script setup>
	import{onLoad} from "@dcloudio/uni-app"
	import {ref} from "vue";
	const pets = ref([])
	
	let arr1 = [1,2,3]
	let arr2 = [4,5,6]
	let allArr = [...arr1,...arr2]
	
	console.log(allArr)
	
	// onLoad((e)=>{
	// 	console.log("onLoad 函数")
	// 	request()
	// })
	
	
	// function request(){
	// 	uni.showLoading({
	// 		title:"请求中"
	// 	})
	// 	uni.request({
	// 	  url: 'https://jsonplaceholder.typicode.com/photos',
	// 	  success: (res) => {
	// 	    console.log(res.data)
	// 		pets.value = res.data
	// 	  },
	// 	  fail: (res) => {
		  	
	// 	  },
	// 	  complete: () => {
	// 	  	uni.hideLoading()
	// 	  }
	// 	})
		
	// }
	
</script>

<style>

</style>
