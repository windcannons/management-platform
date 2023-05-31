<template>
  <!--成绩管理-->
    <div class="main">
        <div class="top">
            <!--      头部搜索盒子-->
            <div class="topLeft">
                <input id="msg" type="text" placeholder="请输入课程名称">
                <button class="logn" @click="logn">
                    <img
                            src="../../public/Grade/logn%20.png"
                            alt=""> <span>搜索</span>
                </button>
                <button class="out" :plain="true" @click="open2">
                    <img
                            src="../../public/Grade/load.png"
                            alt=""> 导出
                </button>
            </div>

        </div>
        <!--      主体盒子-->
        <div class="nav">
            <!--<el-table :data="tableData" border>-->
            <!--    <el-table-column prop="DateNum" label="数据编号"/>-->
            <!--    <el-table-column prop="CourseID" label="课程编号"/>-->
            <!--    <el-table-column prop="CourseNo" label="课程编码"/>-->
            <!--    <el-table-column prop="CourseName" label="课程名称"/>-->
            <!--    <el-table-column prop="StudentID" label="学生学号"/>-->
            <!--    <el-table-column prop="StudentName" label="学生姓名"/>-->
            <!--    <el-table-column prop="TotalMeant" label="作业总数"/>-->
            <!--    <el-table-column prop="TotalCpd" label="完成总数"/>-->
            <!--    <el-table-column prop="AreHomework" label="作业平均分"/>-->
            <!--    <el-table-column prop="CTS" label="课程总分"/>-->
            <!--    <el-table-column prop="CourseEnd" label="课程结束时间"/>-->
            <!--</el-table>-->
            <table>
                <tr>
                    <th>
                        数据编号
                    </th>
                    <th>
                        课程编号
                    </th>
                    <th>
                        课程编码
                    </th>
                    <th>
                        课程名称
                    </th>
                    <th>
                        学生学号
                    </th>
                    <th>
                        学生姓名
                    </th>
                    <th>
                        作业总数
                    </th>
                    <th>
                        完成总数
                    </th>
                    <th>
                        作业平均分
                    </th>
                    <th>
                        课程总分
                    </th>
                    <th>
                        课程结束时间
                    </th>
                </tr>
                <tr v-for="(item,index) in tableData" :key="index">
                    <td>
                        {{ item.DateNum }}
                    </td>
                    <td>
                        {{ item.CourseID }}
                    </td>
                    <td>
                        {{ item.CourseNo }}
                    </td>
                    <td>
                        {{ item.CourseName }}
                    </td>
                    <td>
                        {{ item.StudentID }}
                    </td>
                    <td>
                        {{ item.StudentName }}
                    </td>
                    <td>
                        {{ item.TotalMeant }}
                    </td>
                    <td>
                        {{ item.TotalCpd }}
                    </td>
                    <td>
                        {{ item.AreHomework }}
                    </td>
                    <td>
                        {{ item.CTS }}
                    </td>
                    <td>
                        {{ item.CourseEnd }}
                    </td>

                </tr>
            </table>
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
import { ElMessage } from 'element-plus'
//导出点击
const open2 = () => {
    ElMessage({
        message: '文件已经导出》 --D:/教师文件/',
        type: 'success',
    })
}
//搜索框点击事件
function logn(){
    const str=document.getElementById("msg");
    console.log(str.value)
}
let currentPage1 = ref(5)
let currentPage2 = ref(5)
let currentPage3 = ref(5)
let currentPage4 = ref(4)
let pageSize2 = ref(100)
let pageSize3 = ref(100)
let pageSize4 = ref(100)
let small = ref(false)
let background = ref(false)
let disabled = ref(false)

function handleSizeChange(val) {
    console.log(`${val} items per page`)
}

const handleCurrentChange = (val) => {
    console.log(`current page: ${val}`)
}
//axios请求数据

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
  background-color: #409eff;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    display: block;
    //padding-left: 5px;
    margin-right: 5px;
    width: 14px;
    height: 14px;
  }
}

.out {
  width: 25%;
  height: 100%;
  border-radius: 10px;
  box-sizing: border-box;
  text-align: center;
  background-color: #67c23a;
  color: #fff;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    display: block;
    //padding-left: 5px;
    margin-right: 5px;
    width: 14px;
    height: 14px;
  }
}

img {
  width: 15px;
  color: #fff;
}

.nav {
  width: 100%;
  margin-bottom: 10px;
  margin-top: 10px;

  table {
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;

    tr {
      height: 50px;

      &:hover {
        background-color: #f5f7fa;
      }

      td, th {
        border: 1px solid #ccc;

        &:nth-child(1) {
          width: 6.4%;
        }

        &:nth-child(2) {
          width: 6.1%;
        }

        &:nth-child(3) {
          width: 23.5%;
        }

        &:nth-child(4) {
          width: 8%;
        }

        &:nth-child(5) {
          width: 8%;
        }

        &:nth-child(6) {
          width: 8%;
        }

        &:nth-child(7) {
          width: 6.5%;
        }

        &:nth-child(8) {
          width: 8%;
        }

        &:nth-child(9) {
          width: 8%;
        }

        &:nth-child(10) {
          width: 7%;
        }

        &:nth-child(11) {
          width: 10.5%;
        }
      }

      th {
        color: #a89d99;
        font-size: 15px;
      }

      td {
        font-size: 14px;
        color: #787a7d;
        padding-left: 15px;

        div {
          height: 100%;
          display: flex;
          align-items: center;

          .ml-2 {
            margin-right: 5px;
          }
        }
      }
    }
  }
}

.fot {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
