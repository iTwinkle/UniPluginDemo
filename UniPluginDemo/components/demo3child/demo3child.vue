<!-- $emit 子传父 -->
<template>
	<view>
		<button @click="$emit('onAaa',Math.random())"> 按钮1</button>
		<button @click="onClick"> 按钮2</button>
		<input type="text" @input="onInput"/>
	</view>
</template>

<script setup>
	const emit = defineEmits(["onAaa","onBbb","change"])
	function onClick(){
		emit("onBbb",Math.random())
	}
	
	function onInput(e){
		console.log(e.detail.value)
		emit("change",e.detail.value)
	}
</script>

<style lang="scss">
input{
	border: 1px solid #ccc;
	height: 30px;
	padding: 0 10px;
	margin: 10px;
}
</style>