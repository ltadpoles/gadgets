/**
 * 
 * @param {name} 云函数名称
 * @param {data} 传递的参数 type(函数名) 必传
 */
export function request({
  name,
  data
}) {
  wx.showLoading({
    title: '',
  });
  return new Promise((reslove, reject) => {
    wx.cloud.callFunction({
      name,
      data
    }).then(res => {
      reslove(res)
      wx.hideLoading();
    }).catch(e => {
      wx.hideLoading();
      console.log(e)
    })
  })
}