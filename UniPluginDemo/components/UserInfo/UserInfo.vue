<!-- 计算属性 计算属性和函数的区别 计算属性调用多次整个生命周期只执行一次 -->
<template>
	<view class="userinfo">
		<text class="title">{{username}}</text>
		<text class="age">{{age}}</text>
		<text class="sex">{{sexVlue}}</text>
	</view>
</template>

<script setup>
import { computed } from 'vue';

const sexVlue = computed(()=>{
		return props.sex?"男":"女";
	}	
)


const props = defineProps({
	username:{
		type:String,
		default:"匿名"
	},
	age:Number,
	sex:Boolean
})


</script>

<style lang="scss" scoped>
	.userinfo{
		width: 100%;
		height: 200px;
		background: #ccc;
		display: flex;
		align-items: center;
		justify-content: column;
		
		.title{
			background: blue;
			background-color: red;
			width: 100%;
			height: 44px;
			
			
		}
		.age{
			background-color: #fff;
			text-align: left;
			font-size: 14;
		}
	}
	

</style>