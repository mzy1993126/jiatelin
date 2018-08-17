<template>
	<div class="content_max">
		<div class="nav_box">
			<ul class="nav_ul fs16">
				<template v-for="(tab,index) of tabs">
					<li :class="{ActiveColor: dataActive == index}" @click="navFn(index)">{{tab}}</li>
				</template>
			</ul>
			<div class="Release_box" v-show="ReleaseShow === 1">
				<el-button type="primary" round @click="Release" class="btn_bo">
					<img src="../assets/img/dc.png" alt="" class="d_img"/>
					<span class="d_span">导出</span>
				</el-button>
			</div>
		</div>
		<div class="tableList">
			<el-table :data="tableData" style="width: 100%">
				<el-table-column type="index" width="50"></el-table-column>
				<el-table-column prop="date" label="姓名" width="170" show-overflow-tooltip :header-align="center" :align="center">
				</el-table-column>
				<el-table-column prop="name" label="手机" width="170" show-overflow-tooltip :header-align="center" :align="center">
				</el-table-column>
				<el-table-column prop="name" label="公司" width="170" show-overflow-tooltip :header-align="center" :align="center">
				</el-table-column>
				<el-table-column prop="name" label="部门" width="170" show-overflow-tooltip :header-align="center" :align="center">
				</el-table-column>
				<el-table-column prop="name" label="备注" width="170" show-overflow-tooltip :header-align="center" :align="center">
					 <template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				          <p>姓名: jasd</p>
				          <p>住址: asda</p>
				          <div slot="reference">
				            <span class="fontColor">啊啊大神大神大家开始的卡号啊实打实大苏打</span>
				          </div>
				        </el-popover>
				      </template>
				</el-table-column>
				
				<el-table-column label="操作" width="170" :header-align="center" :align="center">
					<template slot-scope="scope">
						<template v-if="tableBtn == 0">
							<button class="btn btnRight" @click="handleAdopt0(scope.$index, scope.row)">通过</button>
						</template>
						
						<template v-if="tableBtn == 1">
							<span class="btn spanRight" @click="handleAdopt1(scope.$index, scope.row)">已通过</span>
						</template>
						
						<template v-if="tableBtn == 2">
							<!--<button class="btn btnRight" @click="handleAdopt0(scope.$index, scope.row)">通过</button>-->
							<span class="btn spanRight" @click="handleAdopt1(scope.$index, scope.row)">已通过</span>
						</template>
						
					</template>
				</el-table-column>
				
			</el-table>
			<div class="page_box">
				<el-pagination background layout="prev, pager, next" :total="total" @current-change="pageFn"></el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tabs: ['未审核', '已审核', '全部成员'],
				page: 1,
				size: 20,
				dataActive: 0,
				total: 100,
				center: 'center',
				ReleaseShow: false,
				tableBtn: 0,
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}]
			}
		},
		methods: {
			navFn(index) {
				this.dataActive = index; // 切换类名
				this.ReleaseShow = index;  //切换 导出
				this.tableBtn = index; // 切换表格按钮
			},
			pageFn(page) {
				console.log(page)
			},
			Release() {

			},
			handleEdit() {

			},
			handleAdopt0() {
				alert(0)
			},
			handleAdopt1(e,i) {
				if (e) {
					this.$message({
			          message: '活动已开始',
			          type: 'warning'
			        });
				}
			}
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
		padding-bottom: 15px;
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
			img{
				width: 18px;
				height: 18px;
			}
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
			}
			.btn_bo{
				position: relative;
				.d_span{
					float: left;
					margin-left: 34px;
				}
				.d_img{
					position: absolute;
					bottom: 8px;
					left: 30px;
				}
			}
		}
	}
	
	.tableList {
		.tableColor {
			color: $color-99;
		}
		.btn {
			padding: 5px 10px;
			background: #ffffff;
			border-radius: 3px;
			cursor: pointer;
			&:hover {
				opacity: .6;
			}
		}
		.btnLeft {
			border: 1px solid #59b6d7;
			color: #0092C6;
		}
		.btnRight {
			border: 1px solid #4BB893;
			color: #4BB893;
		}
		.spanRight{
			color: #333333;
		}
	}
	
	.page_box {
		text-align: center;
		margin-top: 30px;
	}
	
	.ActiveColor {
		color: #333333!important;
	}
	.fontColor{
		color: $color-99;
	}
</style>