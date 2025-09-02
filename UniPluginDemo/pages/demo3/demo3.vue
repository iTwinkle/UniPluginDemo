<template>
	<view>
		<demo3child @onAaa="onAaaClick" @onBbb="onBbbClick" @change="onchange"></demo3child>
		<view> num :{{num}}</view>
		<view class="box" :style="{background:color}"></view>
		<view>{{inputStr}}</view>
	</view>
</template>

<script setup>
	import {ref} from "vue";
	const num = ref(0)
	const color = ref('#ccc')
	const inputStr = ref('123')
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
	
</script>


<style>
.box{
	width: 300px;
	height: 300px;
}
</style>
