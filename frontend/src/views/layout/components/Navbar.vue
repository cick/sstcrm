<template>
  <div class="navbar">
    <img
      :src="logo"
      class="logo" >
    <div class="nav-items-container">
      <flexbox style="width: auto;">
        <router-link
          v-for="(item, index) in items"
          :style="{ 'color' : item.type == navIndexChild ? '#3E84E9' : '#333333' }"
          :to="item.path"
          :key="index"
          class="nav-item"
          @click.native="navItemsClick(item.type)">
          <i
            :class="'wukong-' + item.icon"
            :style="{ 'color': item.type == navIndexChild ? '#3E84E9' : '#333333'}"
            class="wukong"
            style="margin-right: 10px;"/>
          <div class="nav-item-title">{{ item.title }}</div>
        </router-link>
      </flexbox>
    </div>








    <el-popover
      :visible-arrow="false"
      placement="bottom"
      popper-class="no-padding-popover"
      width="210"
      trigger="hover">
      <div class="auth-content">
        <div class="title">仅限局域网使用</div>
        <div class="detail">平台暂定内部2019-12-24<br>到2019-12-31测试使用
        <br> 请尽快测试其它功能
        </div>
        <span class="phone">2020年1月1日正式启用</span>
      </div>
      <button
        slot="reference"
        type="text"
        class="auth-button">使用须知</button>
    </el-popover>









    <el-popover
      :visible-arrow="false"
      placement="bottom"
      popper-class="no-padding-popover"
      width="200"

      trigger="hover"
     >
      <div class="handel-items">
        <div
          class="handel-item"
          @click="handleClick('person')"  ><i class="wukong wukong-personcenter"  style="margin-top: 8px;"/>个人中心</div>



        <!--<div-->
          <!--class="handel-item"-->
          <!--@click="handleClick('goout')"><i class="wukong wukong-goout"/>退出登录</div>-->

        <div
          v-if="admin"
          class="handel-box hr-top" >
          <el-button
            type="primary"
            class="handel-button"
            @click="enterSystemSet()"
            style="margin-top: 10px;margin-bottom: 4px;font-size: 14px;">
            进入企业管理后台</el-button>

        </div>


<div class="hr-top"  ></div>
        <el-tooltip content="Version 版本 V9.3.2.191220.002" placement="left"     >
          <el-button style="border:white  " >


        <div
                :style="{'margin-bottom': admin ? '1px' : '0'}"
                class="handel-item   "
                style="pointer-events: none; margin-left: -23px;">


          <i class="wukong wukong-versions"  style="  margin-left:12px"/>版本 V9.3.2.191220



        </div>
          </el-button>
        </el-tooltip>

        <div   class="handel-item  handel-item hr-top"    @click="handleClick('goout')"  >
          <el-button type="primary"   style="margin-left:-7px;margin-top: 8px;"  size="mini" round ><i class="wukong wukong-goout"  style="margin-left:-5px;" > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;退&nbsp;&nbsp;&nbsp;&nbsp;出&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i></el-button>
        </div>




      </div>
      <div
        slot="reference"
        class="user-container">
        <div
          v-photo="userInfo"
          v-lazy:background-image="$options.filters.filterUserLazyImg(userInfo.thumb_img)"
          :key="userInfo.thumb_img"
          class="user-img div-photo"/>
        <i class="el-icon-caret-bottom mark"/>
      </div>
    </el-popover>



    <!--<div   class="handel-item"    @click="handleClick('goout')">-->
      <!--<el-button type="primary"   size="mini" round><i class="wukong wukong-goout"  style="font-size: 14px;">  退出</i></el-button>-->
    <!--</div>-->




  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Loading } from 'element-ui'

export default {
  filters: {
    langName: function(value) {
      if (value) {
        return { cn: '中文', en: 'English' }[value]
      } else {
        return '中文'
      }
    }
  },
  components: {},
  props: {
    navIndex: {
      type: [Number, String],
      default: 0
    }
  },
  data() {
    return {
      navIndexChild: 0
    }
  },
  computed: {
    ...mapGetters([
      'userInfo',
      'lang',
      'logo',
      'crm',
      'bi',
      'admin',
      'oa',
      'work'
    ]),
    items() {
      var tempsItems = []


        if (this.oa) {
            tempsItems.push({
                title: '日程',
                type: 0,
                path: '/workbench/',
                icon: 'schedule'
            })
        }
        //z这里把新增的日程和办公互换  日程为登录首页了frontend/src/router/modules/workbench.js 还要改下对应这里

      if (this.oa) {
        tempsItems.push({
          title: '办公',
          type: 3,
          path: '/workbench/schedule',
          icon: 'workbench'
        })
      }



      if (this.crm) {
        tempsItems.push({
          title: '客户管理',
          type: 1,
          path: '/crm',
          icon: 'customer'
        })
      }
      if (this.bi) {
        tempsItems.push({
          title: '数据分析',
          type: 5,
          path: '/bi',
          icon: 'statistics'
        })
      }
      if (this.work) {
        tempsItems.push({
          title: '项目管理',
          type: 2,
          path: '/project',
          icon: 'project'
        })
      }
      return tempsItems
    }
  },
  mounted() {
    this.navIndexChild = this.navIndex
  },
  methods: {
    navItemsClick(type) {
      this.navIndexChild = type
      this.$store.commit('SET_NAVACTIVEINDEX', type)
      this.$emit('nav-items-click', type)
    },
    enterSystemSet() {
      this.$router.push({
        name: 'manager'
      })
    },
    handleClick(type) {
      if (type === 'goout') {
        this.$confirm('退出登录？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            var loading = Loading.service({
              target: document.getElementById('#app')
            })
            this.$store
              .dispatch('LogOut')
              .then(() => {
                location.reload()
                loading.close()
              })
              .catch(() => {
                location.reload()
                loading.close()
              })
          })
          .catch(() => {})
      } else if (type === 'person') {
        this.$router.push({
          name: 'person'
        })
      }
    },
    switchLang(item) {
      this.$store.commit('SET_LANG', item.lang)
      this.langName = item.name
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  height: 60px;
  min-height: 60px;
  background-color: white;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 30px;
  .logo {
    width: 150px;
    height: 40px;
    display: block;
    flex-shrink: 0;
    margin-right: 15px;
  }
  .nav-items-container {
    flex: 1;
    display: flex;
    min-width: 500px;
    height: 100%;
    overflow-x: auto;
    line-height: 60px;
    font-size: 15px;
  }

  .user-container {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    cursor: pointer;
    .user-img {
      display: block;
      width: 32px;
      min-width: 32px;
      min-height: 32px;
      height: 32px;
      margin-right: 8px;
      border-radius: 50%;
    }
    .mark {
      font-size: 15px;
      color: #aaaaaa;
    }
  }

  .user-container:hover {
    .mark {
      color: #2486e4;
    }
  }
}

.nav-item {
  padding: 0 30px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.nav-item-img {
  width: 24px;
  height: 24px;
  display: block;
  margin-right: 5px;
}

.handel-items {
  padding: 10px 0 18px 0;
  .handel-item {
    padding: 5px 20px;
    font-size: 14px;
    color: #aaa;
    cursor: pointer;
    i {
      margin-right: 8px;
      font-size: 15px;
    }
  }
  .handel-item:hover {
    background-color: #f7f8fa;
    color: #3e84e9;
  }
  .handel-box {
    padding: 0 15px;
    .handel-button {
      width: 100%;
      border-radius: 4px;
      border-color: #009df0;
      background-color: #009df0;
    }
  }
}
.hr-top {
  margin-top: 8px;
  border-top: 1px solid #f4f4f4;
  padding-top: 3px;
}

.nav-lang {
  cursor: pointer;
  color: #888;
  padding: 20px;
  &:hover {
    color: #3e84e9;
  }
  &.active {
    font-weight: bold;
    color: #3e84e9;
  }
}

.auth-button {
  background: linear-gradient(to right, #d9ac7c, #c28e5c);
  color: white;
  padding: 5px 15px;
  font-size: 12px;
  height: 24px;
  outline: none;
  margin: 0;
  border: none;
  border-radius: 12px;
  transform: scale(0.9);
  margin-right: 15px;
  cursor: pointer;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.auth-content {
  text-align: center;
  color: #333;
  padding: 30px 20px;
  .title {
    font-size: 16px;
    font-weight:600px;
  }
  .detail {
    transform: scale(0.9);
    margin-top: 8px;
    font-size: 12px;
    margin-bottom: 15px;
  }
  .phone {
    background: linear-gradient(to right, #f2dfb2, #e5c78a);
    border-radius: 4px;
    padding: 5px 17px;
    font-size: 12px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.12);
    line-height: 17px;
  }
}
</style>

