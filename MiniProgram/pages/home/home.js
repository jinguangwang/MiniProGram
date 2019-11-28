
const app = getApp()

console.log(app.globalData)

Page({
  data:{
    name:'wjg',
    age:20,
    stutends:[
      { id:110,name:'aa',age:1},
       { id: 111, name: 'bb', age: 1 },
        { id: 112, name: 'cc', age: 1 }
    ],
    counter:0
  },
  handleBtnClikc(){
    // 1 错误做法
    // this.data.counter +=1
    // 2 this.setData()
    this.setData(
      {
        counter:this.data.counter+1
      }
    )
  },
  handleBtnJIan() {
    // 1 错误做法
    // this.data.counter +=1
    // 2 this.setData()
    this.setData(
      {
        counter: this.data.counter - 10
      }
    )
  },
  getUserInfo(event){
    console.log(event)
  }

})