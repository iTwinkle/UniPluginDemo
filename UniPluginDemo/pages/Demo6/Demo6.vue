<template>
	<view
	  v-for="(dataInfo, index) in dataArray"
	  :key="dataInfo.id"
	  class="list-item"
	>
	  <view>{{dataInfo.title}}</view>
	  <view>{{dataInfo.body}}</view>
	</view>
</template>

<script setup>
	import{onLoad} from "@dcloudio/uni-app"
	import {ref} from "vue";
	const dataArray = ref([])
	
	onLoad((e)=>{
		console.log("onLoad 函数")
		request2()
	})
	
	
	function request(){
		uni.showLoading({
			title:"请求中"
		})
		uni.request({
		  url: 'https://jsonplaceholder.typicode.com/posts',
		  success: (res) => {
		    console.log(res.data)
			dataArray.value = res.data
		  },
		  fail: (res) => {
		  	
		  },
		  complete: () => {
		  	uni.hideLoading()
		  }
		})
		
	}
	
	function request1(){
		uni.request({
		  url: 'https://jsonplaceholder.typicode.com/posts',
		}).then(res=>{
			console.log(res.data)
			dataArray.value = res.data
		})
		
	}
	
	//异步转同步
	async function request2(){
		let res = await	uni.request({
		  url: 'https://jsonplaceholder.typicode.com/posts',
		  data:{
			  id:"1"
		  },
		  method:"GET",
		  timeout:5000,
		  header:{
			  token:"adddas",
		  }
		})
		
		console.log(res.data)
		dataArray.value = res.data
	}
	
	
	
</script>

<style>

</style>
