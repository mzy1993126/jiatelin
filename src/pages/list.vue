<template>
	<div class="content_max">
		<div class="nav_box">
			<ul class="nav_ul fs16">
				<template v-for="(tab,index) of tabs">
					<li :class="{ActiveColor: dataActive == index}" @click="navFn(index)">{{tab}}</li>
				</template>
			</ul>
			<div class="Release_box">
				<el-button type="primary" round icon="el-icon-plus" @click="Release">
					发起活动
				</el-button>
			</div>
		</div>
		<div class="Home_Ul-List">
			<ul class="Home_Ul-Box">
				<li class="Ul_Li_tab" v-for="item of 100">
					<div class="li_img_box" @click="handleLict(item)">
						<img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=652428793,3697265220&fm=27&gp=0.jpg" />
						<p class="clear">
							<img src="../assets/img/jxz.png" alt="" />
						</p>
						<p class="clear">
							<img src="../assets/img/bmjz.png" alt="" />
						</p>
						<p class="clear">
							<img src="../assets/img/bmjs.png" alt="" />
						</p>
					</div>
					<div class="li_text_box">
						<p class="fs18 ellipse text_own">武当山民才怪呢公司分工权威的阿斯达卡上看过</p>
						<p class="text_two">
							<time class="text_two_time">2018/06/24 - 2018/06/28</time>
							<span class="text_two_sign">+101报名</span>
							<span class="text_two_name">王小二,张三等</span>
						</p>
						<!--<p class="ellipse text_three">
							<span>报名资格:</span>
							<span>集团it信息工程中心的用户体验部报名参加，其他部门想报名…</span>
						</p>-->
						<p class="ellipse text_three">
							<span class="text_float">报名资格:</span>
							<span class="text_spanWidth ellipse">集团it信息工程中心的用户体验部报名参加，其他部门想报名…</span>
							<el-popover placement="bottom" trigger="click" width="100">
								<ul class="trigger_b">
									<li @click="handleActivities(item)">
										<i class="el-icon-edit-outline fs18"></i>
										<span class="fs16">编辑活动</span>
									</li>
									<li @click="handelDelete(item)">
										<i class="el-icon-delete fs18"></i>
										<span class="fs16">删除活动</span>
									</li>
								</ul>
								<button class="sel_Click" slot="reference">
									更多
									<i class="el-icon-caret-bottom"></i>
								</button>
							</el-popover>
						</p>
					</div>
				</li>
			</ul>
			<el-row>
				<el-col :span="24">
					<div class="grid-content bg-purple-dark page_align">
						<el-pagination background layout="prev, pager, next" :total="total" @current-change="Page_Success"></el-pagination>
					</div>
				</el-col>
			</el-row>
		</div>
		
		<el-dialog :visible.sync="dialogVisible" width="20%">
			<p class="fs20 text-top">是否删除该活动</p>
			<div class="dialog_box">
				<button class="fs12 dialog_btn btn1" @click="dialogVisible = false">取消</button>
				<button class="fs12 dialog_btn btn2" @click="confirm">确认</button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tabs: ['全部', '我参加的', '我发起的'],
				dataActive: 0,
				page: 1,
				size: 6,
				total: 100,
				dialogVisible: false
			}
		},
		methods: {
			navFn(index) {
				this.dataActive = index;
				console.log(index)
			},
			Release() {
				this.$router.push({
					path: 'Initiating'
				});
			},
			Page_Success(page) {
				console.log(page)
			},
			handleLict(data) {
				this.$router.push({
					path: 'details',
					query: {
						plan: data
					}
				})
			},
			handleActivities(item) {
				this.$router.push({path:'Initiating',query: {plan: item}})
			},
			handelDelete(item) {
				console.log(item)
				this.dialogVisible = true;
			},
			confirm() {
				this.dialogVisible = true;
			}
		},
		created() {

		},
		mounted() {

		}
	}
</script>

<style lang="scss" scoped="scoped">
	.nav_box {
		height: 55px;
		line-height: 55px;
		border-bottom: 1px solid #EDEDED;
		.nav_ul {
			float: left;
			li {
				float: left;
				color: $color-99;
				margin-right: 45px;
				cursor: pointer;
			}
		}
		.Release_box {
			float: right;
			button {
				height: 36px;
				width: 120px;
				background-color: #59B6D7;
				border: none;
				border-radius: 30px;
				color: #ffffff;
				cursor: pointer;
				&:hover {
					opacity: .8;
				}
				&:active {
					background-color: #0092C6;
				}
			}
		}
	}
	
	.Home_Ul-List {
		.Home_Ul-Box {
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			margin-top: 30px;
			.Ul_Li_tab {
				width: 525px;
				height: 360px;
				float: left;
				cursor: pointer;
				border-bottom: 6px solid #F3F6F7;
				margin-bottom: 25px;
				.li_img_box {
					position: relative;
					img {
						width: 525px;
					    height: 240px;
					}
					.clear {
						position: absolute;
						left: -7px;
						top: 10px;
						width: 74px;
						height: 40px;
						img {
							width: 74px;
							height: 40px;
						}
					}
				}
				.li_text_box {
					padding: 0 5px;
					p {
						padding-top: 12px;
					}
					.text_own {
						color: #333333;
					}
					.text_two {
						.text_two_time {
							color: $color-99;
						}
						.text_two_name {
							float: right;
						}
						.text_two_sign {
							color: $color-59;
							float: right;
							margin-right: 6px;
						}
					}
					.text_three {
						color: $color-66;
						.text_float {
							float: left;
						}
						.text_spanWidth {
							width: 390px;
							float: left;
							margin-left: 5px;
						}
						.sel_Click {
							border: 1px solid #59B6D7;
							color: #59B6D7;
							background: #FFFFFF;
					        padding: 2px 3px 2px 8px;
							float: right;
						}
					}
				}
			}
		}
		.page_align {
			text-align: center;
			margin-top: 40px;
		}
	}
	
	.ActiveColor {
		color: #333333!important;
	}
	.trigger_b{
		padding: 0 15px;
		li{
			line-height: 40px;
			cursor: pointer;
			i{
				color: #D5D5D5;
				margin-right: 13px;
			}
			span{
				color: #333333;
			}
		}
	}
	.text-top{
		text-align: center;
	}
	.dialog_box{
		text-align: center;
		padding: 25px 0;
		.dialog_btn{
			color:#FFFFFF;
			width: 80px;
			height: 30px;
			line-height: 30px;
			text-align: center;
			border: none;
			cursor: pointer;
		}
		.btn1{
			background-color: #CCCCCC;	
			margin-right: 10px;
		}
		.btn2{
			background-color: #59B6D7;
			margin-left: 10px;
		}
	}
</style>