<template>
	<div class="content_max">
		<div class="details_box">
			<h1>武当山风景名胜区骑行活动</h1>
			<p class="details_List">
				<span class="details_span_left">报名资格</span>
				<span class="details_span_right">2018/06/06-2018/06/06</span>
			</p>
			<p class="details_List">
				<span class="details_span_left">报名截至</span>
				<span class="details_span_right">2018/06/06</span>
			</p>
			<p class="details_List">
				<span class="details_span_left">报名资格</span>
				<span class="details_span_right">集团it信息工程中心的用户体验部报名参加，其他部门想报名者可去4楼xxx处说明</span>
			</p>
			<p class="details_List">
				<span class="details_span_left">参与活动的人</span>
				<span class="details_span_right" style="width: auto;">2/15</span>
				<button class="details_btn" @click="ViewTheDetails(1)">查看详情</button>
			</p>
		</div>
		<div class="img_box">
			<h3>活动详情</h3>
			<img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=652428793,3697265220&fm=27&gp=0.jpg" alt="" class="img" />
		</div>
		<div class="text_box">
			<p>集团it信息工程中心的用户体验部报名参加集团it信息工程中心的用户体验部报名参加集团it信息工程中心的用户体验部报名参加集团it信息工程中心的用户体验部报名参加集团it信息工程中心的用户体验部报名参加</p>
			<p>集团it信息工程中心的用户体验部报名参加集团it信息工程中心的用户体验部报名参加集团it信息工程中心的用户体验部报名参加集团it信息工程中心的用户体验部报名参加集团it信息工程中心的用户体验部报名参加</p>
		</div>
		<div class="btn-text">
			<button class="button1" @click="dialogVisible = true">立即报名</button>
			<button class="button_cl">等待审核中...</button>
			<button class="button_cl">已报名成功!</button>
			<button class="button_cl">报名已截止!</button>
		</div>
		<!--弹出框-->
		<el-dialog :visible.sync="dialogVisible" width="25%">
			<div class="dialog_box">
				<p class="people_na">申请人信息</p>
				<el-alert title="请完善您的信息" type="warning" show-icon v-show="showActive" :closable="false"></el-alert>
				<el-form :model="ruleForm" ref="ruleForm" label-width="50px" class="demo-ruleForm">
					<el-form-item label="姓名" prop="name">
						<span>王某某</span>
					</el-form-item>
					<el-form-item label="手机" prop="phone">
						<el-input v-model="ruleForm.phone" placeholder="请填写手机号码"></el-input>
					</el-form-item>
					<el-form-item label="公司" prop="company">
						<span>王某某</span>
					</el-form-item>
					<el-form-item label="部门" prop="department">
						<span>王某某</span>
					</el-form-item>
					<el-form-item label="备注" prop="Remarks">
						<el-input type="textarea" placeholder="请输入文案~（限150字以内）" v-model="ruleForm.Remarks" class="textarea3">
						</el-input>
					</el-form-item>
				</el-form>
				<button class="btn_j fs18" @click="submitForm">报名参加</button>
			</div>
		</el-dialog>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				dialogVisible: false,
				ruleForm: {
					name: '',
					phone: '',
					company: '',
					department: '',
					Remarks: ''
				},
				showActive: false
			}
		},
		methods: {
			ViewTheDetails(data) {
				this.$router.push({
					path: 'table',
					query: {
						plan: data
					}
				});
			},
			submitForm() {
				if(this.ruleForm.phone != '') {
					
					let res = /^1(3|5|7|8)\d{9}$/;
					if(!res.test(this.ruleForm.phone)) {
						this.$message({
							message: '请输入正确的手机号',
							type: 'warning'
						});
						return false;
					}
					
					if(this.ruleForm.Remarks.length >= 150) {
						this.$message({
							message: '备注不能超出150字',
							type: 'warning'
						});
						return false;
					}

					this.showActive = false;
					this.dialogVisible = false;
					for(let i in this.ruleForm) {
						this.ruleForm[i] = '';
					}
					
				} else {
					this.showActive = true;
				}

			}
		},
		mounted() {

		}
	}
</script>

<style scoped="scoped" lang="scss">
	.details_box {
		margin-bottom: 40px;
		.details_List {
			margin-top: 25px;
			padding-left: 7px;
			.details_span_left {
				margin-right: 20px;
				color: $color-99;
			}
			.details_span_right {
				width: 87%;
				display: inline-flex;
			}
			.details_btn {
				background-color: #ffffff;
				color: #59B6D7;
				border: 1px solid #59B6D7;
				display: inline-block;
				border-radius: 2px;
				cursor: pointer;
				padding: 2px 10px;
				margin-left: 15px;
			}
		}
	}
	
	.img_box {
		margin-bottom: 30px;
		.img {
			height: 450px;
			width: 100%;
			margin-top: 30px;
		}
	}
	
	.text_box {
		p {
			text-indent: 35px;
			margin-top: 10px;
			color: #666666;
			line-height: 30px;
			letter-spacing: 0;
		}
	}
	
	.btn-text {
		text-align: center;
		margin-top: 20px;
		.button1 {
			background-color: #59B6D7;
			color: #ffffff;
			border: none;
			width: 200px;
			height: 54px;
			line-height: 54px;
			text-align: center;
			cursor: pointer;
			&:hover {
				opacity: .8;
			}
			&:active {
				background-color: #0092C6;
			}
		}
		.button_cl {
			background-color: #CCCCCC;
			color: #ffffff;
			border: none;
			width: 200px;
			height: 54px;
			line-height: 54px;
			text-align: center;
		}
	}
	
	.dialog_box {
		padding: 0 15px;
		.people_na {
			font-size: 25px;
			color: #333333;
			margin-bottom: 30px;
		}
	}
	
	.btn_j {
		background-color: #59B6D7;
		color: #FFFFFF;
		border-radius: 2px;
		height: 54px;
		line-height: 54px;
		text-align: center;
		border: none;
		width: 200px;
		margin-left: 100px;
		cursor: pointer;
		&:hover {
			opacity: .8;
		}
		&.active {
			background-color: #0092C6;
		}
	}
</style>