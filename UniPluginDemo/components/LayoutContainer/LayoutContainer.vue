<!-- props 插槽 具名插槽  -->
<template>
	<view class="layout">
		<view class="header">
			<slot name="header"></slot>
		</view>
		<view class="main">
			<slot></slot>
		</view>
		<view class="footer">
			<slot name="footer"></slot>
		</view>
		
	</view>
</template>

<script setup>
</script>

<style lang="scss">
	.layout{
		.header{
			height: 100px;
			background: #cfcfcf;
		}
		.main{
			min-height: 200px;
			background: green;
		}
		.footer{
			height: 100px;
			background: yellow;
		}
	}

</style>