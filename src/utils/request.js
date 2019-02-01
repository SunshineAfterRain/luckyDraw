
const request = {
  get (url, data) {
    wx.showLoading({
      title: '加载中'
    })
    return new Promise((resolve, reject) => {
      wx.request({
        url: url,
        data: data,
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        header: {
          'Content-Type': 'application/json'
        }, // 设置请求的 header
        success: function (res) {
          // success
          wx.hideLoading()
          if (res.statusCode !== 200) {
            wx.showToast({
              title: '网络出错，稍后再试',
              icon: 'none'
            })
            return false
          }
          resolve(res.data)
        },
        fail: function (error) {
          // fail
          wx.hideLoading()
          reject(error) // 请求失败
        },
        complete: function () {
          wx.hideLoading()
          // complete
        }
      })
    })
  },
  post (url, data) {
    wx.showLoading({
      title: '加载中'
    })
    return new Promise((resolve, reject) => {
      wx.request({
        url: url,
        data: data,
        method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        header: {
          'Content-Type': 'application/json'
        }, // 设置请求的 header
        success: function (res) {
          // success
          wx.hideLoading()
          resolve(res.data)
        },
        fail: function (error) {
          // fail
          wx.hideLoading()
          reject(error)
        },
        complete: function () {
          // complete
          wx.hideLoading()
        }
      })
    })
  }
}

export default request
