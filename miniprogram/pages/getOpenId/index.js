Page({
  /**
   * 页面的初始数据
   */
  data: {
    showUploadTip: true,
    haveGetOpenId: false,
    envId: '',
    openId: ''
  },

  onLoad(options) {
    console.log(options)
    this.setData({
      envId: options.envId
    });
  },

  getOpenId() {
    wx.showLoading({
      title: '',
    });
   wx.cloud.callFunction({
      name: 'toolFunctions',
      config: {
        env: this.data.envId
      },
      data: {
        type: 'getOpenId'
      }
    }).then((resp) => {
      this.setData({
        haveGetOpenId: true,
        openId: resp.result.openid
      });
     wx.hideLoading();
   }).catch((e) => {
      this.setData({
        showUploadTip: true
      });
     wx.hideLoading();
    });
  },

  clearOpenId() {
    this.setData({
      haveGetOpenId: false,
      openId: ''
    });
  }

});
