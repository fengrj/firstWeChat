//index.js
//获取应用实例
const app = getApp()

Page({


 


  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    user_name:'aa',
    user_word:'bb'
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  buttonNam2e:function(e){
    console.log("输入框给值: "+e.detail.value)
    this.setData.user_name=e.detail.value
        

  },
  password:function(e){
    this.setData.user_name=e.detail.value
  },

  buttonName: function(event){
    
  
    wx.request({   
      url: 'https://v.juhe.cn/postcode/query',  
      method:'GET',                                        
        
      success:function(res){   //接受后台的回调函数

        wx.showToast({
          title: '登录成功了啊',
          icon:'success',
          duration: 1000,

          success:function(){
            wx.navigateTo({  //保留当前页面，跳转到应用内的某个页面
              url: '../test5/test3',   //跳转的页面
            })
          }

        })
        console.log("杀死")
    }

   })

  }

})
