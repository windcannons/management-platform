<template>
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
        <tr v-for="item in oneList">
            <td><input type="checkbox"></td>
            <td>{{ item.id }}</td>
            <td>
                <div class="ss">
                    建瓯凤凰于飞放假放假了就空间空间 就卡斯克
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
                        class="ml-2"
                        style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
                    />
                    <span>编辑</span>
                </div>

            </td>
            <td>
                <div class="operateBtn">
                    <el-tag effect="dark" >编辑</el-tag>
                    <el-tag effect="dark" type="success" on-click="Delete()">删除</el-tag>
                    <el-tag effect="dark" type="info">手动报名</el-tag>
                    <el-tag effect="dark" type="warning">作业详情</el-tag>
                    <el-tag effect="dark" type="danger">查看成绩</el-tag>
                    <el-tag effect="dark" type="danger">结束课程</el-tag>
                </div>
            </td>
        </tr>
    </table>
</template>

<script setup>
import {
    ref, reactive
} from "vue";
// 表单展示
const value = ref(true)
// 表格
let name = ref("CourseView")

//element组件
import {
    ElMessageBox
} from 'element-plus'

// 发布按钮弹窗
const open = () => {
    ElMessageBox.alert(
        '<strong>发布菜单</strong>',
        'HTML String',
        {
            dangerouslyUseHTMLString: true,
        }
    )
}
// 获取地址
let oneList = reactive([
    {id: '1'}, {id: '2'}, {id: '23'}, {id: '4'}, {id: '5'}, {id: '6'}, {id: '7'}, {id: '8'}, {id: '9'}, {id: '10'}
])

// 添加


// 删除
// function Delete() {
//
// }
</script>

<style scoped lang="less">
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
</style>