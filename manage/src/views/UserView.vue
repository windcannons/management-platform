<template>
  <!--用户管理-->
  <!--  <h1>用户管理</h1>-->
  <div
      class="box">
    <!--头部搜索和功能大盒子-->
    <div
        class="top">
      <!--      头部左边搜索盒子-->
      <div
          class="topLeft">
        <input
            type="text"
            placeholder="请输入学生姓名，登录账号，地址">
        <button
            class="btn">
          <img
              src="../../public/UserView/fdj.png"
              alt="">
          搜索
        </button>
      </div>
      <!--      头部右边按钮盒子-->
      <div
          class="topRight">
        <!--        添加按钮弹出框-->
        <el-button
            text
            @click="addValue = true"
            class="btnRight">
          <img
              src="../../public/UserView/jia.png"
              alt="">&nbsp添加
        </el-button>
        <el-dialog
            v-model="addValue"
            title="添加"
            width="30%"
            draggable>
          <!--          弹出框样式-->
          <!--          <span>It's a draggable Dialog</span>-->
          <el-form>
            <el-form-item
                label="学生姓名："
                label-width="120px">
              <el-input
                  style="width: 240px;"/>
            </el-form-item>
            <el-form-item
                label="登录账号："
                label-width="120px">
              <el-input
                  style="width: 240px;"/>
            </el-form-item>
            <el-form-item
                label="角色："
                label-width="120px">
              <!--              单选按钮需要v-m才能点击-->
              <el-radio-group
                  style="width: 240px;">
                <el-radio
                    :label="1">
                  学生
                </el-radio>
                <el-radio
                    :label="2">
                  老师
                </el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item
                label="状态："
                label-width="120px">
              <el-radio-group
                  style="width: 240px;">
                <el-radio
                    :label="1">
                  启用
                </el-radio>
                <el-radio
                    :label="0">
                  禁用
                </el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item
                label="电话："
                label-width="120px">
              <el-input
                  style="width: 240px;"/>
            </el-form-item>
            <el-form-item
                label="头像地址："
                label-width="120px">
              <el-input
                  style="width: 240px;"/>
            </el-form-item>
            <el-form-item
                label="地址："
                label-width="120px">
              <el-input
                  style="width: 240px;"/>
            </el-form-item>
          </el-form>


          <template
              #footer>
      <span
          class="dialog-footer">
        <el-button
            @click="addValue = false">提交</el-button>
        <el-button
            type="primary"
            @click="addValue = false">
          取消
        </el-button>
      </span>
          </template>
        </el-dialog>
        <!--添加按钮弹出框结束-->
        <!--        模板按钮弹出框-->
        <el-button
            text
            @click="mubanValue = true"
            class="btnRight"
            style="background-color: #e6a23c"
            id="muBanBtn">
          <img
              src="../../public/UserView/mb.png"
              alt="">新增模板
        </el-button>

        <el-dialog
            title="模板文件"
            v-model="mubanValue"
            width="40%"
        >
          <el-form>
            <el-form-item
                label="模板路径："
                label-width="120px">
              <el-input/>
            </el-form-item>
            <el-form-item
                label="备注："
                label-width="120px">
              <el-input/>
            </el-form-item>
          </el-form>

          <template
              #footer>
            <el-button
                @click="mubanValue = false">
              取消
            </el-button>
            <el-button
                type="primary"
                @click="mubanValue = false">
              提交
            </el-button>
          </template>
        </el-dialog>
        <!--模板按钮弹出框结束-->
        <!--        导入弹出框-->

        <el-button
            text
            @click="daoruValue = true"
            class="btnRight">
          <img
              src="../../public/UserView/dr.png"
              alt="">&nbsp导入
        </el-button>
        <el-dialog
            title="导入文件"
            v-model="daoruValue"
            width="40%"
        >
          <el-form>
            <div
                class="flex-align">
              <el-button
                  label-width="150px"
                  type="primary">
                选择文件
              </el-button>
              <el-form-item
                  label="只能上传Excel文件"
                  label-width="150px"></el-form-item>
            </div>
          </el-form>

          <template
              #footer>
            <el-button
                @click="daoruValue = false">
              取消
            </el-button>
            <el-button
                type="primary"
                @click="daoruValue = false">
              提交
            </el-button>
          </template>
        </el-dialog>
        <!--        导入弹出框结束-->
        <!--        错误记录弹出框-->

        <el-button
            text
            @click="cuowuValue = true"
            class="btnBig"
            style="background-color:#909399"
        >
          <img
              src="../../public/UserView/cwjl.png"
              alt="">&nbsp错误记录
        </el-button>
        <el-dialog
            title="导入记录"
            v-model="cuowuValue"
            width="50%">
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="date" label="数据编号" width="180" />
            <el-table-column prop="name" label="错误信息" width="350" />
            <el-table-column prop="address" label="导入时间" />
          </el-table>
          <div class="demo-pagination-block">
            <el-pagination
                :page-sizes="[100, 200, 300, 400]"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400"
            />
          </div>
          <template
              #footer>
            <el-button
                type="primary"
                @click="cuowuValue = false">
              确定
            </el-button>
          </template>
        </el-dialog>

        <!--        错误记录弹出框结束-->
        <button
            class="btnBig"
            style="background-color: #fab6b6"
            @click="batchRemove">
          <img
              src="../../public/UserView/plsc.png"
              alt="">
          批量删除
        </button>
      </div>
    </div>
    <!--中间表格盒子-->
    <div
        class="center">
      <table
          class="table">
        <!--        表头-->
        <thead>
        <tr>
          <th class="col-checkbox">
            <input
                type="checkbox"
                v-model="allChecked"
                @change="checkAll"/>
          </th>
          <th class="col-no">
            编号
          </th>
          <th class="col-avatar"
              style="text-align: center">
            头像
          </th>
          <th class="col-name">
            学生姓名
          </th>
          <th class="col-account">
            登录账号
          </th>
          <th class="col-role">
            角色
          </th>
          <th class="col-phone">
            电话
          </th>
          <th class="col-address">
            地址
          </th>
          <th class="col-status">
            状态
          </th>
          <th class="col-password">
            密码
          </th>
          <th class="col-operation">
            操作
          </th>
        </tr>
        </thead>
        <!--        表身-->
        <tbody>
        <tr v-for="(item, index) in data"
            :class="{active: item.checked}"
            :key="index">
          <td class="col-checkbox">
            <input
                type="checkbox"
                v-model="item.checked"
                @change="checkItem"/>
          </td>
          <td class="col-no">
            {{
              item.id
            }}
          </td>
          <td class="col-avatar"
              style="text-align: center">
            <img
                :src="item.avatar"
                alt="头像">
          </td>
          <td class="col-name">
            {{
              item.name
            }}
          </td>
          <!--          账号-->
          <td class="col-account">
            {{
              item.account
            }}
          </td>
          <!--          角色-->
          <td class="col-role">
            {{
              item.role
            }}
          </td>
          <td class="col-phone">
            {{
              item.phone
            }}
          </td>
          <!--          地址-->
          <td class="col-address">
            {{
              item.address
            }}
          </td>
          <!--          状态-->
          <td class="col-status">
            <el-switch
                v-model="item.status"
                class="ml-2"
                style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
            />
          </td>
          <td class="col-password">
            {{
              item.password
            }}
          </td>
          <td class="col-operation">
            <button
                class="edit"
                @click="edit(index)"
                style="color: #909399">
              编辑
            </button>
            <button
                class="delete"
                @click="remove(index)"
                style="color: white ;background-color: #f56c6c">
              删除
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <!--尾部分页盒子-->
    <div
        class="bottom">

      <div>
        共：
        条
      </div>
      <!--      分页盒子-->
      <div>
        <el-pagination
            background
            layout="prev, pager, next"
            :total="100"/>
      </div>
      <!--      下拉盒子-->
      <div
          class="inputBox">
        <!--        下拉列表组件-->
        <div
            class="flex flex-wrap items-center">
          <el-dropdown>
            <el-button
                type="primary">
              10条/页
              <el-icon
                  class="el-icon--right"></el-icon>
            </el-button>
            <template
                #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>
                  5条/页
                </el-dropdown-item>
                <el-dropdown-item>
                  8条/页
                </el-dropdown-item>

              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>

      <div>
        当前：
        页
      </div>
    </div>
  </div>
</template>


<script>
import {
  reactive,
  toRefs,
  ref
} from 'vue'
// 下拉组件引入
import {ArrowDown} from '@element-plus/icons-vue'

export default {
  name: "UserView",
  setup() {
    let value = ref(false)
    // 添加框的布尔值
    const addValue = ref(false)
    // 模板框的布尔值
    const mubanValue = ref(false)
    // 导入框布尔值
    const daoruValue = ref(false)
    // 错误记录框布尔值
    const cuowuValue = ref(false)
    // 错误记录表格模拟表
    const tableData = [
      {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
    ]
    // 初始化表格数据
    let state = reactive({
      data: [
        {
          id: 1,
          avatar: 'https://via.placeholder.com/50x50',
          name: '张三',
          account: 'zhangsan',
          role: '学生',
          phone: '138****',
          address: '北京市海淀区*****',
          status: 'false',
          password: '******',
          checked: false,
        },
        {
          id: 2,
          avatar: 'https://via.placeholder.com/50x50',
          name: '李四',
          account: 'lisi',
          role: '教师',
          phone: '138****',
          address: '北京市朝阳区*****',
          status: 'false',
          password: '******',
          checked: false,
        },
        {
          id: 3,
          avatar: 'https://via.placeholder.com/50x50',
          name: '王五',
          account: 'wangwu',
          role: '管理员',
          phone: '138****',
          address: '北京市东城区*****',
          status: 'false',
          password: '******',
          checked: false,
        },
        {
          id: 4,
          avatar: 'https://via.placeholder.com/50x50',
          name: '张三',
          account: 'zhangsan',
          role: '学生',
          phone: '138****',
          address: '北京市海淀区*****',
          status: 'false',
          password: '******',
          checked: false,
        },
        {
          id: 5,
          avatar: 'https://via.placeholder.com/50x50',
          name: '张三',
          account: 'zhangsan',
          role: '学生',
          phone: '138****',
          address: '北京市海淀区*****',
          status: 'false',
          password: '******',
          checked: false,
        },
        {
          id: 6,
          avatar: 'https://via.placeholder.com/50x50',
          name: '张三',
          account: 'zhangsan',
          role: '学生',
          phone: '138****',
          address: '北京市海淀区*****',
          status: 'false',
          password: '******',
          checked: false,
        },
        {
          id: 7,
          avatar: 'https://via.placeholder.com/50x50',
          name: '张三',
          account: 'zhangsan',
          role: '学生',
          phone: '138****',
          address: '北京市海淀区*****',
          status: 'false',
          password: '******',
          checked: false,
        },
        {
          id: 8,
          avatar: 'https://via.placeholder.com/50x50',
          name: '张三',
          account: 'zhangsan',
          role: '学生',
          phone: '138****',
          address: '北京市海淀区*****',
          status: 'false',
          password: '******',
          checked: false,
        },
        {
          id: 9,
          avatar: 'https://via.placeholder.com/50x50',
          name: '张三',
          account: 'zhangsan',
          role: '学生',
          phone: '138****',
          address: '北京市海淀区*****',
          status: 'false',
          password: '******',
          checked: false,
        },
        {
          id: 10,
          avatar: 'https://via.placeholder.com/50x50',
          name: '张三',
          account: 'zhangsan',
          role: '学生',
          phone: '138****',
          address: '北京市海淀区*****',
          status: 'false',
          password: '******',
          checked: false,
        },

      ],
      // 全选状态
      allChecked: false,
    })

    // 全选/取消全选
    const checkAll = (event) => {
      state.data.forEach(item => {
        item.checked = event.target.checked
      })
    }

    // 单选/取消单选
    const checkItem = () => {
      let allChecked = true
      state.data.forEach(item => {
        if (!item.checked) {
          allChecked = false
        }
      })
      state.allChecked = allChecked
    }

    // 编辑行数据
    const edit = (index) => {
      console.log(index)
    }

    // 删除行数据
    const remove = (index) => {
      state.data.splice(index, 1)
    }
    // 批量删除
    const batchRemove = () => {
      state.data = state.data.filter(item => !item.checked)
      state.allChecked = false
    }
    return {
      ...toRefs(state),
      checkAll,
      checkItem,
      edit,
      remove,
      batchRemove,
      value,
      addValue,
      mubanValue,
      daoruValue,
      cuowuValue,
      tableData

    }
  }
}
</script>

<style
    scoped
    lang="less">
.box {
  width: 100%;
  height: 100vh;
  background-color: white;
  padding: 15px;
}

.top {
  width: 100%;
  height: 5vh;
  /*background-color: #4e8cee;*/
  display: flex;
  justify-content: space-between
}

.topLeft {
  width: 30%;
  height: 100%;
  /*background-color: #2c3e50;*/
  display: flex;
  justify-content: flex-start
}

input {
  width: 65%;
  height: 100%;
  border-radius: 4px;
  box-sizing: border-box;
  padding-left: 10px;
  margin-right: 15px;
  border: 1px solid #e0e2e9;
}

.btn {
  width: 25%;
  height: 100%;
  border-radius: 10px;
  box-sizing: border-box;
  text-align: center;
  background-color: #4e8cee;
  color: white;
}

img {
  width: 15px;
}

.topRight {
  width: 45%;
  height: 100%;
  /*background-color: #2c3e50;*/
  display: flex;
  justify-content: space-between;
}

//右边三个小按钮样式
.btnRight {
  width: 15%;
  height: 100%;
  border-radius: 10px;
  box-sizing: border-box;
  text-align: center;
  background-color: #4e8cee;
  color: white;
  margin-left: 15px;
  font-size: 13px;
}

.el-button.is-text:not(.is-disabled):focus, .el-button.is-text:not(.is-disabled):hover {
  background-color: #4e8cee
  //background-color: transparent;
}

//导入框弹出样式按钮和文字外的盒子
.flex-align {
  display: flex;
  flex-direction: column-reverse;
  align-items: center
}

.el-button--primary {
  background-color: #409EFF;
  color: #fff;
}

//右边两个大按钮样式
.btnBig {
  width: 22%;
  height: 100%;
  border-radius: 10px;
  box-sizing: border-box;
  text-align: center;
  background-color: #4e8cee;
  color: white;
  margin-left: 15px;
  font-size: 13px;
}

//错误记录弹出框样式
.header-cell {
  border: 1px solid #ebeef5;
}
.el-pagination{
  justify-content: space-between;
}
/*中间*/
.center {
  width: 100%;
  height: auto;
  /*background-color: #4e8cee;*/
  margin-top: 15px;
}

.table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #eceff6;
}

.table th,
.table td {
  border: 1px solid #eceff6;
  padding: 8px;
  text-align: left;
}

.active {
  background-color: #eee;
}

.col-checkbox {
  width: 8%;
}

.col-no {
  width: 5%;
}

.col-avatar {
  width: 10%;
}

.col-avatar > img {
  width: 20px;
  height: 20px;
  border-radius: 50%;
}

.col-name {
  width: 10%;
}

.col-account {
  width: 10%;
}

.col-role {
  width: 8%
}

.col-status {
  width: 8%
}

.col-address {
  width: 10%;
}

.col-phone {
  width: 10%;
}

.col-operation > button {
  width: 50px;
  height: 25px;
  text-align: center;
  margin-left: 10px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid #e5e7ed;
  font-size: 10px;
}

/*尾部*/
.bottom {
  width: 100%;
  height: 5vh;
  /*background-color: #4e8cee;*/
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  font-size: 12px;

  input {
    width: 100px;
    margin-left: 15px;
  }

  div {
    width: 20%;
    height: 100%;
    text-align: center;
    font-size: 15px;
    line-height: 6vh;
    margin-top: 3px;
  }

  .inputBox {
    margin-left: 100px;

    span {
      font-size: 12px;
    }
  }
}

//下拉组件样式
.example-showcase .el-dropdown + .el-dropdown {
  margin-left: 15px;
}

.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
