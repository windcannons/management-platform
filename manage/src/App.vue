<script
    setup>
import {
    RouterLink,
    RouterView
} from 'vue-router'
// 引入element 相关组件

import {
    ref,
    reactive
} from 'vue'

// 引入全屏组件
import screenfull from "screenfull"

// 左侧导航栏内容
let nav = [
    {
        name: "首页",
        img: "../public/APP/home1.png",
        isimg: "../public/APP/home.png",
        to: "/"
    },
    {
        name: "通知管理",
        img: "../public/APP/info1.png",
        isimg: "../public/APP/info.png",
        to: "/InformView"
    },
    {
        name: "用户管理",
        img: "../public/APP/user1.png",
        isimg: "../public/APP/user.png",
        to: "/UserView"
    },
    {
        name: "课程管理",
        img: "../public/APP/class1.png",
        isimg: "../public/APP/class.png",
        to: "/CourseView"
    },
    {
        name: "成绩管理",
        img: "../public/APP/grade1.png",
        isimg: "../public/APP/grade.png",
        to: "/GradeView"
    }]
let checkNavNun = ref(0)

// 导航栏的选择
function changeNav(index) {
    checkNavNun.value = index
}

// 设置导航栏的移动
let showNav = ref(true)

function setNav() {
    showNav.value = !showNav.value
}

// 设置全屏与否
let isMaxScreen = ref(false)
let screenimg = reactive(["../public/APP/maxScreen.png", "../public/APP/minScreen.png"])

function changeScreen() {
    isMaxScreen.value = !isMaxScreen.value
    screenfull.toggle()
}

</script>

<template>
    <div class="boss">
        <!--    左侧导航栏-->
        <div class="leBox"
             :class="showNav?'':'minNav'">
            <div class="lenav">
                <div class="top">
                    <img
                            src="../public/APP/logo.png"
                            alt="">
                    <span>教学管理系统</span>
                </div>
                <ul>
                    <template
                            v-for="(item,index) in nav"
                            :key="index">
                        <RouterLink
                                :to="item.to">
                            <li :class="checkNavNun === index?'checkNav':''"
                                @click="changeNav(index)">
                                <img
                                        :src="item.img"
                                        v-show="checkNavNun !== index"
                                        alt="">
                                <img
                                        :src="item.isimg"
                                        v-show="checkNavNun=== index"
                                        alt="">
                                <span>
                            {{
                                    item.name
                                    }}
                        </span>
                            </li>
                        </RouterLink>
                    </template>
                </ul>
            </div>
        </div>
        <!--        右侧内容-->
        <div class="riBox">
            <!--        头部-->
            <div class="riTop">
                <!-- 设置导航栏的缩放-->
                <div class="leSetNav"
                     @click="setNav">
                    <img
                            :class="showNav?'':'isSetNav'"
                            src="../public/APP/setNav.png"
                            alt="">
                </div>
                <div class="title">
                    教室端
                </div>
                <div class="riinfo">
                    <!-- 设置语言-->
                    <div class="lang">
                        <img
                                src="https://www.gov.cn/images/trs_m_gq.png"
                                alt="">
                        <div class="change">
                            <select>
                                <option>
                                    中文
                                </option>
                                <option>
                                    英文
                                </option>
                            </select>
                        </div>
                    </div>
                    <!-- 设置全屏-->
                    <div class="setshow"
                         @click="changeScreen">
                        <img
                                :src="isMaxScreen?screenimg[1]:screenimg[0]"
                                alt="">
                    </div>
                    <!-- 用户信息-->
                    <div class="userinfo"></div>
                    <!--  用户头像-->
                    <div class="userimg"></div>
                </div>
            </div>
            <!--        主体-->
            <div class="RiMain">
                <RouterView></RouterView>
            </div>
        </div>
    </div>
</template>

<style
    scoped
    lang="less">
.boss {
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 25px;
    overflow: hidden;
}

//导航栏盒子
.leBox {
  transition: .4s;
  width: 290px;
  height: 100vh;
  padding-right: 25px;

  .lenav {
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 0 20px 20px 0;
    line-height: 50px;
    font-size: 18px;

    .top {
      width: 100%;
      height: 80px;
      padding: 15px 0 15px 30px;
      font-size: 20px;
      font-weight: 800;
      display: flex;
      align-items: center;

      img {
        width: 40px;
        height: 40px;
        margin-right: 8px;
      }

      span {
        white-space: nowrap
      }
    }

    ul {
      width: 100%;

      a:hover {
        color: #000;
      }

      li {
        height: 70px;
        padding-left: 30px;
        border-radius: 0 15px 15px 0;
        cursor: pointer;
        display: flex;
        align-items: center;
        user-select: none;
        margin: 5px 0;

        &:not(.checkNav):hover {
          background-color: #dedcdc;
        }

        img {
          width: 20px;
          height: 20px;
          margin-right: 10px;
        }

        span {
          white-space: nowrap
        }
      }
    }

    //添加被选中类
    .checkNav {
      background-color: #4e8cee;
      color: #fff;
    }
  }
}

//缩放后的迷你导航栏
.minNav {
  width: 100px;

  .lenav {
    .top {
      padding-left: 20px;

      span {
        display: none;
      }
    }

    ul {
      li {
        span {
          display: none;
        }
      }
    }
  }
}

//右侧盒子
.riBox {
  flex: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 25px;

  //  右侧头部
  .riTop {
    width: 100%;
    height: 60px;
    background-color: #fff;
    border-radius: 15px;
    margin-bottom: 25px;
    display: flex;
    align-items: center;
    padding: 0 15px;

    .leSetNav {
      width: 30px;
      height: 30px;
      cursor: pointer;

      img {
        width: 30px;
        height: 30px;
      }
    }

    .isSetNav {
      transform: rotate(180deg);
    }

    //  头部标题文字
    .title {
      flex: 1;
      font-size: 22px;
      font-weight: 800;
      text-align: center;
    }

    //  右侧信息内容

    .riinfo {
      width: 400px;
      background-color: orange;
      display: flex;
      align-items: center;
      justify-content: space-around;

      //  语言
      .lang {
        width: 130px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        img {
          width: 40px;
        }

        .change {
          select {
            width: 70px;
            border: none;

            &:focus {
              outline: none;
            }
          }
        }
      }

      //全屏
      .setshow {
        width: 35px;
        height: 35px;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  //右侧主体
  .RiMain {
    width: 100%;
    flex: 1;
    background-color: #cfeefc;
  }
}
</style>
