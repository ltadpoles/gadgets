// pages/about/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickName: wx.getStorageSync('nickName'),
    avatar: wx.getStorageSync('avatar')
  },

  getUserInfo() {
    let that = this
    wx.getUserProfile({
      // 调用成功后触发（回调函数）
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: function (res) {
        console.log("成功：", res.userInfo);
        // 修改页面和后台数据
        that.setData({
          nickName: res.userInfo.nickName,
          avatar: res.userInfo.avatarUrl
        });
        wx.setStorageSync('nickName', res.userInfo.nickName)
        wx.setStorageSync('avatar', res.userInfo.avatarUrl)
      },
      // 调用失败后触发
      fall: function (res) {
        console.log("失败:", res);
        wx.showToast({
          title: '您已拒绝授权，请授权后使用',
        })
      }
    });
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