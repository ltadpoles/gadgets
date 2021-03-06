// pages/soup/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    soupData: {},
    like: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSoup()
  },

  getSoup() {
    let that = this
    wx.request({
      url: 'https://api.muxiaoguo.cn/api/dujitang?api_key=1263c25ade5c8359',
      success(res) {
        that.setData({
          soupData: res.data.data
        })
      }
    })
  },

  // 复制
  fuzhi() {
    let that = this
    console.log(that.data.soupData)
    wx.setClipboardData({
      data: that.data.soupData.comment,
      success (res) {
        console.log(res)
        // wx.getClipboardData({
        //   success (res) {
        //     console.log(res.data) // data
        //   }
        // })
      }
    })
  },

  share() {
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })
  },

  like() {
    this.setData({
      like: !this.data.like
    })
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