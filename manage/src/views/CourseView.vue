<template>
  <!--课程管理-->
    <div class="Course">
        <!--搜索导航-->
        <div class="Course-nav">
            <!--搜索-->
            <div class="nav-seek">
                <input type="text" placeholder="请输入课程名称">
                <button>
                    <img src="../../public/course/seek-1.png" alt="">
                    搜索
                </button>
            </div>
            <!--选项-->
            <div class="nav-option">
                <el-tag
                        v-for="item in items"
                        :key="item.label"
                        :type="item.type"
                        effect="dark">
                    <img :src="item.src" alt="">
                    <!--<img src="../../public/course/option-1.png" alt="">-->
                    {{ item.label }}

                </el-tag>
            </div>
        </div>
        <!--表格-->
        <div class="Course-tabulation">
            <table>
                <tr>
                    <th>
                        <input type="checkbox">
                    </th>
                    <th>编号</th>
                    <th>课程编码</th>
                    <th>课程名称</th>
                    <th>课程描述</th>
                    <th>创建人</th>
                    <th>创建时间</th>
                    <th>状态</th>
                    <th>操作</th>

                </tr>
                <tr>
                    <td><input type="checkbox"></td>
                    <td>1</td>
                    <td>
                        <div class="ss">
                            建瓯凤凰于飞放假放假了就空间空间  就卡斯克
                        </div>
                    </td>
                    <td>test02</td>
                    <td>test</td>
                    <td>辅导员</td>
                    <td>2022-10-10 22:16:56</td>
                    <td>
                        <div class="tabulation-two">
                            <el-switch
                                    v-model="value"
                                    active-color="#13ce66"
                                    inactive-color="#ff4949">
                            </el-switch>
                            <span>发布</span>
                        </div>

                    </td>
                    <td>
                        <div class="operateBtn">
                            <el-tag effect="dark">编辑</el-tag>
                            <el-tag effect="dark" type="success">删除</el-tag>
                            <el-tag effect="dark" type="info">手动报名</el-tag>
                            <el-tag effect="dark" type="warning">作业详情</el-tag>
                            <el-tag effect="dark" type="danger">查看成绩</el-tag>
                            <el-tag effect="dark" type="danger">结束课程</el-tag>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
        <!--翻页-->
        <div class="Course-page">
            <p>共<span>1</span>条</p>
            <!--页数-->
            <div class="page-pages">
                <button>
                    <img src="../../public/course/page-1.png" alt="">
                </button>
                <button>1</button>
                <button>2</button>
                <button>
                    <img src="../../public/course/page-2.png" alt="">
                </button>
                <!--10个一页-->
                <div class="pages-page">
                    <select name="cars" id="" class="page-one">
                        <option value="10条/页">10条/页</option>
                        <option value="10条/页">20条/页</option>
                    </select>
                </div>

            </div>
            <div class="page-head">
                前往
                    <div class="head-number"> 1</div>
                页
            </div>
        </div>
    </div>
</template>

<script setup>
import {
    ref, reactive
} from "vue";

let name = ref("CourseView")
let items = reactive([
    {type: '', label: '添加', src: '../../public/course/option-1.png'},
    {type: 'danger', label: '模板', src: '../../public/course/option-2.png'},
    {type: 'success', label: '批量报名', src: '../../public/course/option-3.png'},
    {type: 'warning', label: '错误记录', src: '../../public/course/option-4.png'},
    {type: 'danger', label: '批量删除', src: '../../public/course/option-5.png'}
])


</script>

<style
    scoped lang="less">
.Course {
  padding: 15px;
  background: #ffffff;
  //border-radius: 15px;
}

//<!--搜索导航-->
.Course-nav {
  width: 100%;
  //height: 30px;
  //background: #888;
  display: flex;
  justify-content: space-between;

  .nav-seek {
    input {
      width: 200px;
      padding: 8px 0 8px 6px;
      border-radius: 5px;
      border: 1px solid #999;
    }

    button {
      padding: 8px 20px;
      background: #4e8cee;
      color: #fff;
      margin: 0 15px;
      border-radius: 10px;

      img {
        width: 15px;
        height: 15px;
      }
    }
  }

  .nav-option {
    width: 500px;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 18px;
      height: 18px;
    }
  }

}

//<!--表格-->
.Course-tabulation {
  margin: 20px 0;
  color: #68696d;

  table {
    width: 100%;
    text-align: left;
    border-spacing: 0;
    border-collapse: collapse;

    tr {
      height: 40px;

      th, td {
        height: 100%;
        border: 1px solid #ebeef5;
        padding-left: 10px;

        .operateBtn {
          width: 100%;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: space-around;

        }

        .ss {
          width: 100px;
          height: 100%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;

        }

        .tabulation-two {
          width: 100%;
          height: 100%;
          //background: saddlebrown;
        }
      }

      th:nth-child(1) {
        width: 4%;
      }

      th:nth-child(2) {
        width: 4%;
      }

      th:nth-child(3) {
        width: 10%;


      }

      th:nth-child(4) {
        width: 8%;
      }

      th:nth-child(5) {
        width: 8%;
      }

      th:nth-child(6) {
        width: 8%;
      }

      th:nth-child(7) {
        width: 14%;
      }

      th:nth-child(8) {
        width: 7%;
      }

      td:nth-child(9) {
        display: flex;
        justify-content: space-between;
        align-items: stretch;
      }
    }
  }
}

//<!--翻页-->
.Course-page {
  width: 100%;
  height: 30px;
  //background: saddlebrown;
  display: flex;
  justify-content: center;
  align-items: center;
//<!--页数-->
  .page-pages {
      display: flex;
      align-items: center;
    button {
      width: 25px;
      height: 25px;
      background: #f4f4f5;
      margin: 0 2px;

      img {
        width: 10px;
        height: 10px;
      }
    }
  //<!--10个一页-->
      .pages-page{
          margin: 0 30px;
          .page-one{
              border: none;
          }
      }
  }
    .page-head{
        width: 150px;
        height: 100%;
        //background: seagreen;
        display: flex;
        align-items: center;

        .head-number{
           padding: 5px 20px;
            border: 1px solid #ebeef5;
            border-radius: 3px;
            margin: 0 5px;
        }
    }
}
</style>
