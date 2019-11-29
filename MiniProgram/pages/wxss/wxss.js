// pages/wxss/wxss.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:'你好小程序',
    name:'wjg',
    age:18,
    nowTime: new Date().toLocaleString(),
    isActive:false,
    isShow:true,
    movies:['a','b','c','d']

  },
  // onLoad(){
  //   setInterval(()=>{
  //     this.setData({
  //       // nowTime: new Date().toLocaleString()
  //     })
  //   },1000)
  // },
  handleColor(){
    this.setData({
      isActive:!this.data.isActive
    })
  }

  
})