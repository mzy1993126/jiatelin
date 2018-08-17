<template>
	<div class="home">
		<nav class="nav_top">
			<div class="nav_left">
					<img src="../assets/img/logo.png" alt="" />
			</div>
			<div class="nav_right">
					<img src="../assets/img/logo.png"/>
					<span class="fs16">root</span>
			</div>
			<div class="nav_center">
					<ul class="nav_center_ul">
						<li><a>活动</a></li>
					</ul>
			</div>
		</nav>
		
		<router-view/>
		
		<scroll></scroll>
	</div>
</template>

<script>
	import scroll from "../components/scroll";
	export default {
		name: "App",
		data() {
			return {
				
			}
		},
		components: {
			scroll
		},
		created() {
//			let env = this.$address.ENV === 'dev' ? 't_env' : 's_env' // t_env测试环境  s_env生产环境
//			let oaUrl = 'http://oa.geely.com/sitepages/appcenter.aspx' //
//			this.$apis
//				.login(env)
//				.then(res => {
//					localStorage.setItem('userId', res.data.userId)
//				})
//				.catch(err => {
//					// 处理错误
//					window.location.href = oaUrl
//				})
		}
	}
</script>

<style lang="scss" scoped>
	.nav_top {
		min-width: 1200px;
		height: 64px;
		width: 100%;
		position: relative;
		background: #fff;
		margin-bottom: 36px;
		.nav_left {
			float: left;
			margin-left: 50px;
			img {
				width: 64px;
				height: 64px;
				float: left;
			}
		}
		.nav_center {
			margin: 0 auto;
			width: 1080px;
			.nav_center_ul{
				display: flex;
			    height: 62px;
			    margin-bottom: 0;
			    justify-content: flex-start;
			    align-items: center;
			    float: left;
				li{
			    float: left;
			    text-align: center;
			    margin-right: 15px;
			    transition: all .3s;
			    position: relative;
			    cursor: pointer;
			    a{
	    	    color: #59b6d7;
    				border-bottom: 2px solid #59b6d7;
			    	font-size: 18px;
    				transition: all .1s;
			    	display: inline-block;
				    margin: 0 10px;
				    padding: 20px 10px;
			    }
				}
				.liActive{
			    color: #59b6d7;
    			border-bottom: 2px solid #59b6d7;
				}
			}
		}
		.nav_right {
			float: right;
			margin: 17px 50px;
			img{
		    float: left;
		    width: 30px;
		    height: 30px;
		    margin-right: 9px;
		    cursor: pointer;
		    border-radius: 50%;
			}
			span{
				display: inline-block;
			    float: left;
			    overflow: hidden;
			    width: 84px;
			    padding-top: 4px;
			    white-space: nowrap;
			    text-overflow: ellipsis;
			    color: #343434;
			}
		}
	}
</style>