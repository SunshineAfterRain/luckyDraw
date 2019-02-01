<template>
  <div class="tabBar">
       <i-tab-bar :current="curPage" @change="handleChange" color="#f759ab">
        <i-tab-bar-item key="homepage" icon="homepage" current-icon="homepage_fill" title="首页"></i-tab-bar-item>
        <i-tab-bar-item key="draw" icon="draw" current-icon="draw" title="抽奖"></i-tab-bar-item>
        <i-tab-bar-item key="mine" icon="mine" current-icon="mine_fill"  title="我的"></i-tab-bar-item>
        </i-tab-bar>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: ['curPage'],
  methods: {
    handleChange (e) {
      if (e.target.key === this.curPage) {
        return false
      }
      switch (e.target.key) {
        case 'homepage':
          wx.switchTab({
            url: '../index/main'
          })
          break
        case 'draw':
          wx.switchTab({
            url: '../draw/main'
          })
          break
        case 'mine':
          wx.switchTab({
            url: '../mine/main'
          })
          break
        default:
          break
      }
    }
  },
  created () {
  }
}
</script>

<style>
.tabBar {
  position: fixed;
  width: 100%;
  bottom: 0;
}
</style>