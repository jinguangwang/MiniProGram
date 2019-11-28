// 注册一个小程序实例
/**
 * 在注册时可以绑定一些个生命周期函数
 */

App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    wx.getUserInfo({
      success:function(res){
        // console.log(res.userInfo)
      }
    })
    // 获得用户的信息
    
    
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   * 小程序显示时调用函数
   */
  onShow: function (options) {
    // 1 判断小程序的进入场景
    // console.log(options)

    // 
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log('页面关闭了')
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {

    console.log(msg)
    
  },
  globalData:{
    name:'aa',
    age:18
  }
  
})
