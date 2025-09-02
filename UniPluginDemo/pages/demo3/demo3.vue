<template>
	<view>
		<demo3child @onAaa="onAaaClick" @onBbb="onBbbClick" @change="onchange"></demo3child>
		<view> num :{{num}}</view>
		<view class="box" :style="{background:color}"></view>
		<view>{{inputStr}}</view>
		
		<view>{{name}} {{age}}</view>
		
		<navigator url="/pages/Demo2/Demo2">跳转到Demo2</navigator>
		
	</view>
</template>

<script setup>
	import {ref} from "vue";
	import{onLoad,onReady,onShow,onHide} from "@dcloudio/uni-app"
	const num = ref(0)
	const color = ref('#ccc')
	const inputStr = ref('123')
	const name = ref('张三')
	const age = ref('18')
	const onAaaClick = function(e){
		console.log(e)
		num.value = e
		color.value = "#" + String(e).substring(3,6)
		
	}
	
	const onBbbClick = function(e){
		console.log(e)
		num.value = e
		color.value = "#" + String(e).substring(3,6)
		
	}
	
	const onchange = function(v){
		inputStr.value = v
	}
	
	onLoad((e)=>{
		console.log("onLoad 函数")
		name.value = e.name
		age.value = e.age
	})
	
	onShow((e)=>{
		console.log("onShow 函数") //每次进入组件都会调用
		
	})
	
	onHide((e)=>{
		console.log("onHide 函数") //每次离开组件都会调用
		
	})
	
	
	
	onReady((e)=>{
		console.log("onReady 函数") 
		
	})
	
</script>


<style>
.box{
	width: 300px;
	height: 300px;
}
</style>
