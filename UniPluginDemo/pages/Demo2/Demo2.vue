<!-- 插槽 -->
<template>
	<view>
		<LayoutContainer> 
		<template v-slot:header>
			<text> 具名插槽 我是头部在父亲自定义</text>
		</template>
		<template #footer>
			<text> 具名插槽 我是尾部在父亲自定义</text>
		</template>
		<text> 普通插槽 我是内容</text>
		</LayoutContainer>
		<LayoutContainer> bbbb</LayoutContainer>
	</view>
</template>

<script setup>
	
</script>

<style>

</style>
