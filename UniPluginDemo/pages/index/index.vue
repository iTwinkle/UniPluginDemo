<template>
	<Home :userName="name" :age="age" :sex="sex"></Home>
	<UserInfo :username="name" :age="18" :sex="true"></UserInfo>
	<UserInfo :age="29" :sex="flase"></UserInfo>
	<!-- <demo1 :obj='userinfo'></demo1> -->
	<demo1 v-for="(item,index) in  userinfos" :obj="item"></demo1>
	<button @click="showModal">showModal</button>
	
	<button @click="showshet">showShet</button>
	
</template>

<script setup>
	import {ref} from "vue";
	const name = ref("王五")
	const age = ref("18")
	const sex = ref("男")
	
	const userinfos = ref([{username:"张三疯",age:"18",sex:true},
	{username:"张三",age:"18",sex:true},
	{username:"王五",age:"19",sex:true}])
	
	function showModal() {
		uni.showModal({
			title: '是否删除',
			content: '确认要删除吗',
			showCancel: true,
			cancelText: '删除',
			confirmText: '确认',
			success: res => {},
			fail: () => {},
			complete: () => {}
		});
		
	}
	let arrs =  ['高中','本科','大专'];
	function showshet(){
		uni.showActionSheet({
			title:"请选择",
			itemList:arrs,
			success: res => {
				console.log(res.tapIndex);
				console.log(arrs[res.tapIndex])
			},
			fail: () => {},
			complete: () => {}
		})
	}
	
</script>

<style>
	
</style>
