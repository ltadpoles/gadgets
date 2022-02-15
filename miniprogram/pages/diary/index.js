// pages/diary/index.js
import {getCurrentMonthFirst, getDates} from '../../utils/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    diaryData: '',
    date: '2022-02-15'
  },

  getDate() {

  },

  getDiary() {
    let that = this
    wx.request({
      url: 'https://api.muxiaoguo.cn/api/tiangourj?api_key=11c2450e5845c692',
      success(res) {
        console.log(res)
        that.setData({
          diaryData: res.data.data.comment
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDiary()
    this.date = getCurrentMonthFirst()
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