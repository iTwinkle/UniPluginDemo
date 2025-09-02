<template>
	<Home :userName="name" :age="age" :sex="sex"></Home>
	<UserInfo :username="name" :age="18" :sex="true"></UserInfo>
	<UserInfo :age="29" :sex="flase"></UserInfo>
	<!-- <demo1 :obj='userinfo'></demo1> -->
	<demo1 v-for="(item,index) in  userinfos" :obj="item"></demo1>
	
</template>

<script setup>
	import {ref} from "vue";
	const name = ref("王五")
	const age = ref("18")
	const sex = ref("男")
	
	const userinfos = ref([{username:"张三疯",age:"18",sex:true},
	{username:"张三",age:"18",sex:true},
	{username:"王五",age:"19",sex:true}])
	// const userinfo2 = ref({username:"",age:"18",sex:true})
	
</script>

<style>
	
</style>
