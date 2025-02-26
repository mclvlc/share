const websiteData = [
    {
        isAnnouncement: true,
        description: `以下是依一的网站分享，进不去的话请用流量访问。<br>
                    如果想要网站直接选择表白类标签，想要源码选择仓库标签。<br>
                    如果有想要投稿的网站可以私信我（抖音@mclvlc.）<br>
                    希望这个网站能成为一个美丽的社区。<br>
                    <span style="color: red;">此网站永久免费，如果你是付费（或者关注某人）获得的，就说明你被骗了</span><br>
                    <span style="font-size: 0.8em;">被骗了我也没法，如果是关注某人获得的球球你们取关一下。<span style="text-decoration: line-through;">（我眼红了）</span></span>` 
    },
    {
        title: "tang-love",
        description: "表白网站,原网站已失效，这里做一个补档。",
        url: "https://mclvlc.github.io/tang-love",
        preview: "https://s2.loli.net/2025/02/24/TebUA9RYhMCEjPf.png",
        tags: [
            { text: "官方认证", color: "#53D256" },{ text: "表白类", color: "#FF69B4" }
        ]
    },
    {
        title: "tang-love仓库",
        description: "表白网站的仓库",
        url: "https://github.com/mclvlc/tang-love",
        preview: "https://s2.loli.net/2025/02/24/TebUA9RYhMCEjPf.png",
        tags: [
            { text: "官方认证", color: "#53D256" },{ text: "仓库", color: "#4274CD" }
        ]
    },
    {
        title: "friendship-page",
        description: "表白网站朋友版,由依一二改自tang-love。",
        url: "https://mclvlc.github.io/friendship-page",
        preview: "https://s2.loli.net/2025/02/24/XUK8qHpQnYIuTf4.png",
        tags: [
            { text: "官方认证", color: "#53D256" },{ text: "表白类", color: "#FF69B4" }
        ]
    },
    {
        title: "friendship-page仓库",
        description: "表白网站朋友版的仓库",
        url: "https://github.com/mclvlc/friendship-page",
        preview: "https://s2.loli.net/2025/02/24/XUK8qHpQnYIuTf4.png",
        tags: [
            { text: "官方认证", color: "#53D256" },{ text: "仓库", color: "#4274CD" }
        ]
    },
    {
        title: "doge",
        description: "表白网站小狗版,由依一仿tang-love重构。<br>“不要”按钮是会乱跑的也请小心。",
        url: "https://mclvlc.github.io/doge",
        preview: "https://s2.loli.net/2025/02/26/7h8KcLIxrGnSRqp.png",
        tags: [
            { text: "官方认证", color: "#53D256" },{ text: "表白类", color: "#FF69B4" }
        ]
    },
    {
        title: "doge仓库",
        description: "表白网站小狗版的仓库",
        url: "https://github.com/mclvlc/doge",
        preview: "https://s2.loli.net/2025/02/24/5vCF6ItdrPMkNVq.png",
        tags: [
            { text: "官方认证", color: "#53D256" },{ text: "仓库", color: "#4274CD" }
        ]
    },
    {
        title: "可以成为我的恋人吗 Pro",
        description: "是来自小雨大佬的改版，可以自定义名字和音乐",
        url: "https://love.xyqaq.xyz/",
        preview: "https://s2.loli.net/2025/02/24/kazDXiPFCY2yoIj.png",
        tags: [
            { text: "官方认证", color: "#53D256" },{ text: "表白类", color: "#FF69B4" }
        ]
    },
    {
        title: "愿意让我成为你的皇帝吗？",
        description: "表白网站皇帝版,由依一开发",
        url: "https://mclvlc.github.io/long",
        preview: "https://s2.loli.net/2025/02/24/oASThrjqnPFYtkV.png",
        tags: [
            { text: "官方认证", color: "#53D256" },{ text: "表白类", color: "#FF69B4" }
        ]
    },
    {
        title: "愿意让我成为你的皇帝吗？仓库",
        description: "表白网站皇帝版的仓库",
        url: "https://github.com/mclvlc/long",
        preview: "https://s2.loli.net/2025/02/24/oASThrjqnPFYtkV.png",
        tags: [
            { text: "官方认证", color: "#53D256" },{ text: "仓库", color: "#4274CD" }
        ]
    },
    {
        title: "涩涩刮刮乐！",
        description: "涩涩刮刮乐！可以随机刮出亲亲卡，涩涩卡,由依一开发",
        url: "https://mclvlc.github.io/sese",
        preview: "https://s2.loli.net/2025/02/24/vQirDmoe1uNYGzj.png",
        tags: [
            { text: "官方认证", color: "#53D256" },{ text: "表白类", color: "#FF69B4" }
        ]
    },
    {
        title: "涩涩刮刮乐！仓库",
        description: "涩涩刮刮乐！的仓库",
        url: "https://github.com/mclvlc/sese",
        preview: "https://s2.loli.net/2025/02/24/vQirDmoe1uNYGzj.png",
        tags: [
            { text: "官方认证", color: "#53D256" },{ text: "仓库", color: "#4274CD" }
        ]
    },
    {
        title: "我们可以和好嘛？",
        description: "我们可以和好嘛？是一个求朋友或者恋人和好的网站,由依一开发",
        url: "https://mclvlc.github.io/peace",
        preview: "https://s2.loli.net/2025/02/24/rX5bkVocQzSBYPp.png",
        tags: [
            { text: "官方认证", color: "#53D256" },{ text: "表白类", color: "#FF69B4" }
        ]
    },
    {
        title: "我们可以和好嘛？仓库",
        description: "我们可以和好嘛？的仓库",
        url: "https://github.com/mclvlc/peace",
        preview: "https://s2.loli.net/2025/02/24/rX5bkVocQzSBYPp.png",
        tags: [
            { text: "官方认证", color: "#53D256" },{ text: "仓库", color: "#4274CD" }
        ]
    },
    {
        title: "随机无厘头称号生成器！",
        description: "随机无厘头称号生成器！这回是原创,由依一开发",
        url: "https://mclvlc.github.io/title",
        preview: "https://s2.loli.net/2025/02/24/gwk83spNInQ4LRJ.png",
        tags: [
            { text: "官方认证", color: "#53D256" },{ text: "表白类", color: "#FF69B4" }
        ]
    },
    {
        title: "随机无厘头称号生成器！仓库",
        description: "随机无厘头称号生成器！的仓库",
        url: "https://github.com/mclvlc/title",
        preview: "https://s2.loli.net/2025/02/24/gwk83spNInQ4LRJ.png",
        tags: [
            { text: "官方认证", color: "#53D256" },{ text: "仓库", color: "#4274CD" }
        ]
    },
    // 添加新网站时只需复制这个对象格式
];
