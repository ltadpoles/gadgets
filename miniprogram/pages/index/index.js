import {
  request
} from '../../utils/index'
const app = getApp()

Page({
  data: {
    openId: "",
    toolList: []
  },

  onLoad() {
    this.getOpenId()
    this.getToolList()
  },

  getOpenId() {
    request({
      name: 'toolFunctions',
      data: {
        type: 'getOpenId'
      }
    }).then(res => {
      wx.setStorageSync('openid', res.result.openid)
    })
  },

  getToolList() {
    request({
      name: 'toolFunctions',
      data: {
        type: 'selectRecord'
      }
    }).then(res => {
      this.setData({
        toolList: res.result.data
      })
    })
  },

  toolClick(e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.item.url,
    })
  }
});