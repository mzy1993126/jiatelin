<template>
	<div class="content_min">
		<el-row>
			<el-col :span="20">
				<div class="grid-content bg-purple-dark">
					<el-form ref="form" label-width="80px">
						<el-form-item label="上传海报">
							<div class="image_box">
								<div class="imgStyle">
									<img :src="imgRandom" class="img">
								</div>
								<div class="fileBox fs16">
									更改海报图片
									<input type="file" @change="fileImage" accept="image/jpeg,image/x-png,image/gif" class="file" />
								</div>
								<span class="minY fs14">图片小于10M</span>
							</div>
						</el-form-item>
						<el-form-item label="活动标题">
							<el-input v-model="Title" placeholder="请在此输入20字以内的标题"></el-input>
						</el-form-item>
						<el-form-item label="活动地址">
							<el-input v-model="address" placeholder="请输入地址"></el-input>
						</el-form-item>
						<el-form-item label="开始时间">
							<el-col :span="10">
								<el-date-picker type="date" placeholder="选择日期" v-model="startTime" style="width: 100%;" value-format="yyyy-MM-dd" :picker-options="pickerOptions1"></el-date-picker>
							</el-col>
							<el-col :span="10" class="timeRight">
								<el-date-picker type="date" placeholder="选择日期" v-model="endTime" style="width: 100%;" value-format="yyyy-MM-dd" :picker-options="pickerOptions2"></el-date-picker>
							</el-col>
							<el-col class="line timeRight timeText" :span="2">结束时间</el-col>
						</el-form-item>
						<el-form-item label="计划人数">
							<el-input v-model="people" placeholder="请输入人数"></el-input>
						</el-form-item>
						<el-form-item label="最多报名">
							<el-input v-model="Numbers" placeholder="请输入人数"></el-input>
						</el-form-item>
						<el-form-item label="报名截止">
							<el-col :span="10">
								<el-date-picker type="date" placeholder="选择日期" v-model="By" style="width: 100%;" value-format="yyyy-MM-dd" :picker-options="pickerOptions3"></el-date-picker>
							</el-col>
						</el-form-item>
						<el-form-item label="报名资格">
							<div class="Qual_box">
								<el-input type="textarea" v-model="Qual" class="textarea1" placeholder="如部门、资格、性别等~(限50字以内)"></el-input>
								<span class="Qual_span">{{Qual.length}}</span>
							</div>
						</el-form-item>
						<el-form-item label="活动详情">
							<div class="details_box">
								<el-input type="textarea" v-model="details" class="textarea2" placeholder="写下关于活动的完美介绍~(限500字以内)"></el-input>
								<span class="details_span">{{details.length}}</span>
							</div>
						</el-form-item>
						<el-form-item>
							<el-checkbox v-model="checked">同意<span class="color_check">《C3发起活动协议》</span></el-checkbox>
						</el-form-item>
					</el-form>
				</div>
			</el-col>
		</el-row>
		<div class="btn-text">
			<button @click="onSubmit" class="fs18">提交</button>
		</div>

		<el-dialog :visible.sync="dialogVisible" width="25%">
			<p class="dialog_textT fs22">协议内容</p>
			<p class="text_w">1.我们倡导绿色健康的活动内容.活动内容严禁包含政府,低俗色情,吸烟酗酒等内容</p>
		</el-dialog>

		<el-dialog :visible.sync="dialogVisible2" width="25%">
			<p class="dialog_textT fs24">您的申请已提交!</p>
		</el-dialog>

		<el-dialog :visible.sync="dialogVisible3" width="25%">
			<p class="dialog_textT2 fs22">您的申请提交失败，请重新提交!</p>
			<div class="btn-text">
				<button @click="onSubmit" class="fs18">重新提交</button>
			</div>
		</el-dialog>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				Title: '',
				address: '',
				startTime: '',
				endTime: '',
				people: '',
				Numbers: '',
				By: '',
				Qual: '',
				details: '',
				imgRandom: '',
				dialogVisible: false,
				checked: false,
				dialogVisible2: false,
				dialogVisible3: false,
				pickerOptions1: {
					disabledDate(time) {
						return time.getTime() < Date.now();
					}
				},
				pickerOptions2: {
					disabledDate: (time) => {
						if(this.startTime == '') {
							return time.getTime() < Date.now();
						} else {
							return time.getTime() < Date.parse(this.startTime);
						}
					}
				},
				pickerOptions3: {
					disabledDate: (time) => {
						if(this.endTime == '') {
							return time.getTime() < Date.now();
						} else {
							return time.getTime() < Date.parse(this.startTime) || time.getTime() > Date.parse(this.endTime);
						}

					}
				}
			}
		},
		components: {

		},
		methods: {
			onSubmit() {
				if((this.Title && this.address && this.startTime && this.endTime && this.people && this.Numbers && this.By && this.details) == '') {
					this.$message({
						message: '请完善您填写的信息',
						type: 'warning'
					});
					return false;
				} else {

					if(this.Title.length > 20) {
						this.$message({
							message: '活动标题不能超出20个字符',
							type: 'warning'
						});
						return false;
					}

					if(this.address.length > 20) {
						this.$message({
							message: '活动地址不能超出20个字符',
							type: 'warning'
						});
						return false;
					}

					if(Number.isNaN(Number.parseInt(this.people))) {
						this.$message({
							message: '请输入正确的计划人数',
							type: 'warning'
						});
						return false;
					}
					if(Number.isNaN(Number.parseInt(this.Numbers))) {
						this.$message({
							message: '请输入正确的报名人数',
							type: 'warning'
						});
						return false;
					}

					if(Number.parseInt(this.Numbers) < Number.parseInt(this.people)) {
						this.$message({
							message: '报名人数不能小于计划人数',
							type: 'warning'
						});
						return false;
					}
					
					if(this.Qual.length >= 50) {
						this.$message({
							message: '报名资格限50字以内',
							type: 'warning'
						});
						return false;
					}
					
					if(this.details.length >= 500) {
						this.$message({
							message: '活动详情限500字以内',
							type: 'warning'
						});
						return false;
					}

					if(this.checked) {
						this.dialogVisible2 = true;
						this.$router.push({
							path: 'list'
						});
						this.dialogVisible3 = true;
					} else {
						this.$message({
							message: '请勾选阅读,C3发起活动协议',
							type: 'warning'
						});
					}
				}
			},
			fileImage(e) {
				let file = e.target.files[0];
				let imgSize = file.size / 1024;
				if(imgSize > 20000) {
					this.$message({
						message: '请上传大小不要超过10M的图片',
						type: 'warning'
					});
				} else {
					let reader = new FileReader();
					reader.readAsDataURL(file);
					reader.onloadend = () => {
						let dataURL = reader.result;
						this.imgRandom = dataURL;
					};
				}
			},
			ImgMath(min, max) {
				return Math.floor(Math.random() * (max - min + 1)) + min
			},
			handleRandom() {
				let arr = [
					require('../assets/img/01.png'),
					require('../assets/img/02.png'),
					require('../assets/img/03.png'),
					require('../assets/img/04.png'),
					require('../assets/img/05.png')
				];
				let img = arr[this.ImgMath(1,5)];
				
				function getBase64Image(img) {
				    var canvas = document.createElement("canvas");
				    canvas.width = img.width;
				    canvas.height = img.height;
				    var ctx = canvas.getContext("2d");
				    ctx.drawImage(img, 0, 0, img.width, img.height);
				    var ext = img.src.substring(img.src.lastIndexOf(".")+1).toLowerCase();
				    var dataURL = canvas.toDataURL("image/"+ext);
				    return dataURL;
				}
					
				return new Promise((resolve,reject) => {
		          	var image = new Image();
		          	image.src = img;
		          	image.onload = function(){
		            var base64 = getBase64Image(image);
		            	resolve(base64);
		          	}
		        })
			}
		},
		created() {
			this.handleRandom().then((res)=>{
				this.imgRandom = res;
			})
		},
		mounted() {

		},
		watch: {
			checked(to) {
				if(to) {
					this.dialogVisible = true;
				}
			},
//			Qual(to) {
//				if(to.length >= 50) {
//					this.Qual = to.substring(0, 50)
//				}
//			},
//			details(to) {
//				if(to.length > 500) {
//					this.details = to.substring(0, 500);
//				}
//			},
			dialogVisible2(to) {
				if(to) {
					setTimeout(() => {
						this.dialogVisible2 = false;
					}, 1200)
				}
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.timeRight {
		float: right;
	}
	
	.timeText {
		color: $color-99;
		margin-right: 15px;
	}
	
	.textarea_box {
		position: relative;
	}
	
	.btn-text {
		text-align: center;
		button {
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
	}
	
	.color_check {
		color: #59b6d7;
	}
	
	.fileBox {
		width: 130px;
		height: 40px;
		display: inline-block;
		border: 1px solid #c0ccda;
		border-radius: 2px;
		overflow: hidden;
		cursor: pointer;
		text-align: center;
		position: relative;
		margin: 0 0 0 5px;
		color: #333333;
		background-color: #F0F0F0;
		position: absolute;
		top: 100px;
		margin-left: 20px;
	}
	
	.file {
		opacity: 0;
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
	}
	
	.image_box {
		position: relative;
		.imgStyle {
			width: 490px;
			height: 220px;
			display: inline-block;
			border-radius: 2px;
			cursor: pointer;
			.img {
				width: 490px;
				height: 220px;
				border-radius: 2px;
			}
		}
	}
	
	.minY {
		color: #999999;
		margin-left: 20px;
		opacity: .8;
		position: absolute;
		bottom: 2px;
	}
	
	.dialog_textT {
		text-align: center;
		margin-bottom: 15px;
	}
	
	.dialog_textT2 {
		text-align: center;
		margin-bottom: 30px;
	}
	
	.text_w {
		line-height: 30px;
	}
	
	.Qual_box {
		position: relative;
		.Qual_span {
			position: absolute;
			right: 6px;
			bottom: -9px;
			color: #CCCCCC;
		}
	}
	
	.details_box {
		position: relative;
		.details_span {
			position: absolute;
			right: 6px;
			bottom: -9px;
			color: #CCCCCC;
		}
	}
</style>