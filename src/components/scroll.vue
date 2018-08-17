<template>
	<div class="scroll_box" @click="scrollTopFn()" v-show="shows">
		<img src="../assets/img/zd.png"/>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				shows:false
			}
		},
		methods: {
			scrollTopFn() {
				this.$nextTick(() => {
					let dom = document.documentElement || document.body;
					if (dom) {
						document.documentElement.scrollTop = 0;
					} else {
						document.body = 0;
					}
				})
			}
		},
		mounted() {
			window.addEventListener('scroll',()=>{
				let scroll = document.documentElement.scrollTop || document.body.scrollTop;
				if (scroll > 100) {
					this.shows = true;
				} else {
					this.shows = false;
				}
			})
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.scroll_box{
		position: fixed;
	    right: 80px;
    	bottom: 80px;
		width: 48px;
		height: 48px;
		background-color: #59B6D7;
		border-radius: 50%;
		cursor: pointer;
		&:hover{
			opacity: .8;
		}
	}
</style>