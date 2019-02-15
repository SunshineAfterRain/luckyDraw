

<script>

export default {
  methods: {
    login () {
      wx.getSetting({
        success (res) {
          if (res.authSetting['scope.userInfo']) {

          } else {
            wx.redirectTo({
              url: '../login/main'
            })
          }
        }
      })
    }
  },
  created () {
    this.login()
  }
}
</script>

<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
