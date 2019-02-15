<template>
  <div class="" >
<i-panel title="请填写抽奖活动信息">
    <i-input :value="actionForm.name" type="textarea" title="活动名称" autofocus placeholder="活动名称" />
    <i-input :value="actionForm.gameDescription" type="textarea" title="活动描述" placeholder="请输入活动简介" />
    <i-input value="" type="textarea" title="详细地址" placeholder="请输入详细地址(最多50字)" maxlength="50" />
    <i-input value="" title="用户信息" disabled />
</i-panel>
  </div>
</template>

<script>

export default {
  data () {
    return {
      actionForm: {
        name: '',
        personQuota: '',
        beginTime: '',
        endTime: '',
        totalExtraction: '',
        gameDescription: ''
      }
    }
  },

  components: {
  },

  methods: {
  },

  created () {
  },
  onShow () {
    wx.hideTabBar()
  }
}
</script>

<style scoped>

</style>
