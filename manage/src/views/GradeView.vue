<template>
  <!--成绩管理-->
    <div class="main">
        <div class="top">
            <!--      头部搜索盒子-->
            <div class="topLeft">
                <input type="text" placeholder="请输入课程名称">
                <button class="logn">
                    <img
                            src="../../public/Grade/logn%20.png"
                            alt=""> 搜索
                </button>
                <button class="out">
                    <img
                            src="../../public/Grade/load.png"
                            alt=""> 导出
                </button>
            </div>

        </div>
        <!--      主体盒子-->
        <div class="nav">
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="DateNum" label="数据编号" width="100"/>
                <el-table-column prop="CourseID" label="课程编号" width="100"/>
                <el-table-column prop="CourseNo" label="课程编码" width="180"/>
                <el-table-column prop="CourseName" label="课程名称" width="100"/>
                <el-table-column prop="StudentID" label="学生学号" width="100"/>
                <el-table-column prop="StudentName" label="学生姓名" width="100"/>
                <el-table-column prop="TotalMeant" label="作业总数" width="100"/>
                <el-table-column prop="TotalCpd" label="完成总数" width="100"/>
                <el-table-column prop="AreHomework" label="作业平均分" width="110"/>
                <el-table-column prop="CTS" label="课程总分" width="100"/>
                <el-table-column prop="CourseEnd" label="课程结束时间" width="130"/>

            </el-table>
        </div>
        <!--      分页        -->
        <div class="fot">
            <el-pagination
                    v-model:current-page="currentPage3"
                    v-model:page-size="pageSize3"
                    :small="small"
                    :disabled="disabled"
                    :background="background"
                    layout="prev, pager, next, jumper"
                    :total="1000"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
            />
        </div>
    </div>

</template>

<script lang="ts" setup>
import {ref} from 'vue'

const currentPage1 = ref(5)
const currentPage2 = ref(5)
const currentPage3 = ref(5)
const currentPage4 = ref(4)
const pageSize2 = ref(100)
const pageSize3 = ref(100)
const pageSize4 = ref(100)
const small = ref(false)
const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (val: number) => {
    console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
    console.log(`current page: ${val}`)
}
const tableData = [
    {
        DateNum: '1',
        CourseID: '33',
        CourseNo: 'a121ada120',
        CourseName: '计算机',
        StudentID: '1000125',
        StudentName: '老王',
        TotalMeant: '2',
        TotalCpd: '2',
        AreHomework: '70',
        CTS: '100',
        CourseEnd: '2022-3-1',
    },
    {
        DateNum: '2',
        CourseID: '33',
        CourseNo: 'a121ada120',
        CourseName: '计算机',
        StudentID: '1000125',
        StudentName: '老王',
        TotalMeant: '2',
        TotalCpd: '2',
        AreHomework: '70',
        CTS: '100',
        CourseEnd: '2022-3-1',
    },
    {
        DateNum: '3',
        CourseID: '33',
        CourseNo: 'a121ada120',
        CourseName: '计算机',
        StudentID: '1000125',
        StudentName: '老王',
        TotalMeant: '2',
        TotalCpd: '2',
        AreHomework: '70',
        CTS: '100',
        CourseEnd: '2022-3-1',
    },
    {
        DateNum: '4',
        CourseID: '33',
        CourseNo: 'a121ada120',
        CourseName: '计算机',
        StudentID: '1000125',
        StudentName: '老王',
        TotalMeant: '2',
        TotalCpd: '2',
        AreHomework: '70',
        CTS: '100',
        CourseEnd: '2022-3-1',
    },
    {
        DateNum: '5',
        CourseID: '33',
        CourseNo: 'a121ada120',
        CourseName: '计算机',
        StudentID: '1000125',
        StudentName: '老王',
        TotalMeant: '2',
        TotalCpd: '2',
        AreHomework: '70',
        CTS: '100',
        CourseEnd: '2022-3-1',
    },
    {
        DateNum: '6',
        CourseID: '33',
        CourseNo: 'a121ada120',
        CourseName: '计算机',
        StudentID: '1000125',
        StudentName: '老王',
        TotalMeant: '2',
        TotalCpd: '2',
        AreHomework: '70',
        CTS: '100',
        CourseEnd: '2022-3-1',
    }
]
</script>

<style
    scoped lang="less">
.main {
  padding: 20px;
  justify-content: center;
  align-items: center;
}

.top {
  width: 100%;
  height: 5vh;
  /*background-color: #4e8cee;*/
  display: flex;
  justify-content: space-between
}

.topLeft {
  width: 40%;
  height: 100%;
  /*background-color: #2c3e50;*/
  display: flex;
  justify-content: flex-start;

  input {
    width: 80%;
    height: 100%;
    border-radius: 4px;
    box-sizing: border-box;
    padding-left: 10px;
    margin-right: 15px;
    border: 1px solid #e0e2e9;
  }
}

.logn {
  width: 25%;
  height: 100%;
  border-radius: 10px;
  box-sizing: border-box;
  text-align: center;
  background-color: #4e8cee;
  color: white;
}

.out {
  width: 25%;
  height: 100%;
  border-radius: 10px;
  box-sizing: border-box;
  text-align: center;
  background-color: #4de826;
  color: #fff;
  margin-left: 10px;
}

img {
  width: 15px;
  color: #fff;
}

.nav {
  width: 100%;
  margin-bottom: 10px;
  margin-top: 10px;
}

.fot {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
