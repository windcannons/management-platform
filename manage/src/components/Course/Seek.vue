<template>
    <div class="seek">
        <!--搜索-->
        <div class="nav-seek">
            <input type="text" placeholder="请输入课程名称">
            <button>
                <img src="../../../public/course/seek-1.png" alt="">
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
                {{ item.label }}

            </el-tag>
        </div>

    </div>
</template>

<script setup>
import {reactive} from "vue";

let items = reactive([
    {type: '', label: '添加', src: '../../public/course/option-1.png'},
    {type: 'danger', label: '模板', src: '../../public/course/option-2.png'},
    {type: 'success', label: '批量报名', src: '../../public/course/option-3.png'},
    {type: 'warning', label: '错误记录', src: '../../public/course/option-4.png'},
    {type: 'danger', label: '批量删除', src: '../../public/course/option-5.png'}
])

</script>

<style scoped lang="less">

.seek {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

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

</style>