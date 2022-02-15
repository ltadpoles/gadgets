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

//获取当前时间
export function getCurrentMonthFirst() {
  var date = new Date();
  var todate = date.getFullYear() + "-" + ((date.getMonth() + 1) < 10 ? ("0" + (date.getMonth() + 1)) : date.getMonth() + 1) + "-" + (date.getDate() < 10 ? ("0" + date.getDate()) : date.getDate());
  console.log(todate)
  return todate;
}

//获取d当前时间多少天后的日期和对应星期
export function getDates(days,todate=getCurrentMonthFirst()) {//todate默认参数是当前日期，可以传入对应时间
  var dateArry = [];
  for (var i = 0; i < days; i++) {
    var dateObj = dateLater(todate, i);
    dateArry.push(dateObj)
  }
  console.log(dateArry)
  return dateArry;
}