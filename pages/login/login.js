// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  bindGetUserInfo(e) {
    wx.setStorageSync('userInfo', e.detail)
    this.login()
  },

  login() {
    wx.login({
      success: (res) => {
        if (res.code) {
          wx.request({
            url: 'https://luckdraw.xyz/userInfo/login',
            data: {
              code: res.code,
              encryptedData: wx.getStorageSync('userInfo').encryptedData,
              iv: wx.getStorageSync('userInfo').iv,
            },
            success: (res) => {
              console.log(res)
              if (res.statusCode == 200 && res.code == 200) {

              }
            }
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})