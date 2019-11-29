// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath:""
  },
  handleV(){
    //系统API 让用户在相册中选中片
    wx.chooseImage({
      success: (res) => {
        //取出路径
        const path = res.tempFilePaths[0]

        // 2 设置imagePath
        this.setData({
          imagePath:path
        })
      },
    })
  }

})