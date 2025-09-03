<template>
	<view class="homeLayout">
		<view class="banner">
			<swiper indicator-dots indicator-color="#c0c0c0" indicator-active-color="#fff" autoplay>
				<swiper-item v-for="item in 3">
					<image src="/static/logo.png"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="notice">
			<view class="left">
				<uni-icons type="sound-filled" size="30" color="#28b389"></uni-icons>
				<text>公共</text>
				
			</view>
			<view class="center">
				<swiper vertical autoplay interval="1500" duration="300" circular="">
					<swiper-item v-for="item1 in 4">文字内容</swiper-item>
				</swiper>
			</view>
			<view class="right">
				<uni-icons type="right" size="16" color="#28b389"></uni-icons>
			</view>
		</view>
	</view>
	
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
	.homeLayout{
		.banner{
			width: 750rpx;
			padding: 30rpx 20rpx;
			swiper{
				width: 100%;
				height: 340rpx;
				&-item{
					width: 100%;
					height: 100%;
					padding: 0 30rpx;
					image{
						width: 100%;
						height: 100%;
						border-radius: 10rps;
					}
				}
			}
		}
		.notice{
			width: 690rpx;
			height: 80rpx;
			line-height: 80rpx;
			background: #f9f9f9f9;
			margin: 0 auto;
			border-radius: 40rpx;
			display: flex;
			.left{
				width: 140rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				.text{
					color: #28b389;
					font-weight: 600;
					font-size: 28rpx;
				}
			}
			.center{
				flex: 1;
				swiper{
					height: 100%;
					&-item{
						height: 100%;
						font-size: 30rpx;
						color: #666;
					}
				}
			}
			.right{
				width: 70rpx;
			}
		}
	}
</style>
