const app = getApp()

Page({
  data: {
    toolList: [{
        id: 0,
        name: '手机号码归属地查询',
        url: '/pages/phone/index'
      },
      {
        id: 1,
        name: '火车查询'
      },
      {
        id: 2,
        name: '全国天气预报'
      },
      {
        id: 3,
        name: 'IP查询'
      },
      {
        id: 4,
        name: '省份证号码查询'
      },
      {
        id: 5,
        name: '星座运势'
      },
      {
        id: 6,
        name: '历史上的今天'
      },
      {
        id: 7,
        name: '成语大全'
      },
      {
        id: 8,
        name: '脑筋急转弯'
      },
      {
        id: 9,
        name: '绕口令'
      },
      {
        id: 10,
        name: '笑话大全'
      }
    ]
  },

  toolClick(e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.item.url,
    })
  }
});