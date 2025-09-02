<!-- props 父传子 -->
<template>
	<view class="userinfo">
		<text class="title">{{userName}}</text>
		<text class="age">{{age}}</text>
		<text class="sex">{{ageVlue}}</text>
	</view>
</template>

<script setup>
import { computed } from 'vue';
const  props = defineProps(['userName','age','sex'])
console.log(props.userName)
const ageVlue = computed(()=>props.age + '岁')

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