<template>
	<view>
		<Demo4Childe></Demo4Childe>
		<view>--------</view>
		<navigator url="/pages/demo3/demo3?name=王五&age=19">跳转到demo3</navigator>
	</view>
</template>

<script setup>
import {onMounted,ref} from "vue";

const child = ref(null);
const update = function(){
	
	
}

	
</script>

<style>

</style>
