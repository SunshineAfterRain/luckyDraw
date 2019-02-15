<template>
  <div class="">
     <i-button type="success" size="large"  shape="circle" @click="goDraw">发起抽奖</i-button>
    <tab-bar curPage="homepage"></tab-bar>
  </div>
</template>

<script>
import tabBar from '@/components/layout/tabBar/tabBar.vue'
export default {
  data () {
    return {
    }
  },

  components: {
    tabBar
  },

  methods: {
    goDraw () {
      wx.navigateTo({
        url: '../actionForm/main'
      })
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
  },
  onShow () {
    wx.hideTabBar()
  }

}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
