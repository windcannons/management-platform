<template>
  <!--课程管理-->
    <div class="Course">
        <!--搜索导航-->
        <div class="Course-nav">
            <Seek></Seek>
        </div>
        <!--表格-->
        <div class="Course-tabulation">
            <Form></Form>
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
                <div class="head-number">
                    <select name="cars" id="" class="page-one">
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                </div>
                页
            </div>
        </div>
    </div>
</template>

<script setup>
import Form from "@/components/Course/Form.vue";

import(Form)
import(Seek)

import {
    ref
} from "vue";
import Seek from "@/components/Course/Seek.vue";

let name = ref("CourseView")
let msg = ref('');

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

}

//<!--表格-->
.Course-tabulation {
  margin: 20px 0;
  color: #68696d;
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
    .pages-page {
      margin: 0 30px;

      .page-one {
        border: none;
      }
    }
  }

  .page-head {
    width: 150px;
    height: 100%;
    //background: seagreen;
    display: flex;
    align-items: center;

    .head-number {
      padding: 5px 20px;
      border: 1px solid #ebeef5;
      border-radius: 3px;
      margin: 0 5px;
    }
  }
}
</style>
