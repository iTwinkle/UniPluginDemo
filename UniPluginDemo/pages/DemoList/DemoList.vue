<template>
	  <scroll-view scroll-y style="height:100vh">
	    <view
	      v-for="(item, index) in list"
	      :key="index"
	      class="list-item"
	      @click="selectRow(index)"
	    >
	      {{ index + 1 }} - {{ item }}
	    </view>
		
		
		
		
	  </scroll-view>
	</template>

<script setup>
	import {ref} from "vue";
	const dataArray = ref([])
	
	const list = ref([
	  'v-bind',
	  'slot--插槽',
	  'emit',
	  '生命周期',
	  'navigateTo',
	  'reLaunch',
	  'request',
	])
	
	// 点击某行，获取行号
	function selectRow(index) {
		console.log(index===0)
		if(index === 0){
			uni.navigateTo({
				url: `/pages/index/index`
			})
		}else if(index === 1){
			uni.navigateTo({
				url: `/pages/Demo2/Demo2`
			})
		}else if(index === 2){
			uni.navigateTo({
				url: `/pages/demo3/demo3`
			})
		}else if(index === 3){
			uni.navigateTo({
				url: `/pages/demo4/demo4`
			})
		}else if(index === 4){
			uni.navigateTo({
				url: `/pages/Demo5/Demo5?name='张三丰'&age=18`
			})
		}else if(index === 5){
			uni.reLaunch({
				url: `/pages/Home/Home`
			})
		}else if(index === 6){
			uni.navigateTo({
				url: `/pages/Demo6/Demo6`
			})
		}
	}
	

	
</script>



<style scoped>
	
<style>
view{
	background: white;
	height: 44px;
	
}
.list-item {
  padding: 12px;
  border-bottom: 1px solid #eee;
}
.list-item:hover {
  background-color: #f0f0f0;
}

</style>
