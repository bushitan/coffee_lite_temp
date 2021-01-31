var config = {
    //路由页面配置
    route: {
        defaultPage: "/pages/menu/menu?shopID=97", //默认进的页面
        // defaultShopID: "", //展示的门店号
        image: "cloud://cup-wm-release.6375-cup-wm-release-1302028748/image/loading.jpg",//route欢迎海报
        btnClass: "line-white",
        btnText: "Seeking 欢迎您",
    },
    cover: "", 
    // cover:  "http://img.12xiong.top/coffee_image/upload/eyJZD6fZ.jpg",
    //品牌配置
    brand: {
        logo: "/images/logo.png",//品牌名字
        name: "",//品牌名字
        list: [
            {
                name: "", //门店名字
                shopID: "", //门店的id
                address: "",
                tel: "",
                longitude: 0,
                latitude: 0,
            },
        ],
    },
    tabbar:{

        "selectedColor": "theme-text",
        "color": "text-gray",
        list: [
            {
                "page": "index",
                "iconPath": "/images/icon/visitor1.png",
                "selectedIconPath": "/images/icon/visitor1.png",
                "text": "数据",

            },
            {
                "page": "ui",
                "iconPath": "/images/icon/my1.png",
                "selectedIconPath": "/images/icon/my1.png",
                "text": "我的"
            }
        ],
    } ,

    //图标配置
    icon: {
        cart: "/images/logo.png", //购物车按钮
        add: "/images/icon/add.png", //增加按钮
        cut: "/images/icon/cut.png", //增加按钮
    },
    // 主题色彩配置 -- 默认黄色
    theme:  "theme-yellow",
    themeAdmin: "theme-yellow", // 商户端的颜色
    // 窗口配置
    window: {
        "navigationBarBackgroundColor": "#efaf30",
        "navigationBarTextStyle": "#ffffff", // #000000  #ffffff 二选一
        "navigationBarTitleText": "小杯子配置",
        "backgroundColor": "#ffffff",
        "backgroundTextStyle": "light"
    },
    // 基础分享页面配置
    share: {
        title: "",
        path: "",
        imageUrl: "",
    },
    //订单--分类配置
    order: {
        tab: [
            { id: 0, name: "未支付" },
            { id: 1, name: "待使用" }, //待发货  || 待接单
            // { id: 2, name: "已完成" }, //已发货  || 制作中 || 配送中
            { id: 3, name: "已完成" },
            { id: 4, name: "退款" },
        ],
    },
    footer: {
        text: "Copyright © 2020 索骏科技提供技术支持"
    },

    // TODO 想到什么，就加到配置表上
    // coupon
}

class Init{
    constructor(){}

    start(){
        return new Promise((resolve, reject)=>{
            // var config = 
            resolve(config)
        })
    }

    test(){
        return config
    }
}
var init = new Init()
module.exports = init