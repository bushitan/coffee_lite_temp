// pages/route/route.js
// var init = require("../../lib/init.js")
var app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.onInit()
    },

    async onInit(){
        // 获取appid
        var res = await wx.getAccountInfoSync()
        wx.setStorageSync(app.KEY.APPID, res.miniProgram.appId)
 
        // 获取配置文件
        app.globalData.config = await app.lib.init.start()
        
        // 设置tabbar
        wx.setTabBarItem({
            index: 0,
            text: 'text',
            iconPath: 'http://img.12xiong.top/coffee_image/upload/44iZ369W.jpg',
            selectedIconPath: 'http://img.12xiong.top/coffee_image/upload/TQSZw69W.jpg'
        })
    },
})