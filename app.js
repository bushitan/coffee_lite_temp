// app.js

App({

    // 时间计算文档
    util: require("utils/util.js"),

    // 公共行为代码
    behaviors:{
        config: require("behaviors/config.js"),
    },

    // 文档目录
    lib:{
        init: require("lib/init.js") //初始化的配置文档获取
    },

    // 静态变量
    KEY: {
        APPID: "appId", // appid的关键字段
        SESSION_MANAGER: "session_manager",
    },
    // 全局变量
    globalData: {
        userInfo: null,
        StatusBar:0,
        Custom:0,
        CustomBar:0,
        config:{}, // 全局配置变了
    },
    
    // 入口函数
    async onLaunch() {


        // 自定义导航条高度
        var e = await wx.getSystemInfo()
        this.globalData.StatusBar = e.statusBarHeight;
        let capsule = wx.getMenuButtonBoundingClientRect();
        if (capsule) {
            this.globalData.Custom = capsule;
            this.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
        } else {
            this.globalData.CustomBar = e.statusBarHeight + 50;
        }


    },

})
