// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: 'asd'
  },
  getUserInfo(code){
    wx.getSetting({
      success: (res) => {
        console.log(res)
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: (res) => {
              wx.setStorageSync('userInfo', res)
              console.info('code:' + code, 'encryptedData:' + wx.getStorageSync('userInfo').encryptedData, 'iv:' +wx.getStorageSync('userInfo').iv)
       
              wx.request({
                url: 'https://luckdraw.xyz/userInfo/login',
                data: {
                  code: code,
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
          })
        } else {
          wx.redirectTo({
            url: '../login/login'
          })
        }
      }
    })
  },

  login(){
    wx.login({
      success: (res) => {
        if (res.code) {
          console.log(res.code)
          this.getUserInfo(res.code)
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.login()
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