const router = require("koa-router")();
router.get("/sliders", (ctx) => {
    ctx.body = {
        status: 200,
        data: [
            {
                url:
                    "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwh.tedu.cn%2Fpc%2Fweb%2Fimg%2Ftab1.jpg&refer=http%3A%2F%2Fwh.tedu.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616917526&t=117d9826ed4fcd80a607cc8e5b7c82ff",
            },
            {
                url: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1021691998,3231022263&fm=26&gp=0.jpg",
            },
            {
                url: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2510655561,1912291638&fm=26&gp=0.jpg",
            },
        ],
    };
});
let flag = 0;
router.get("/lessons", async (ctx) => {
    console.log(ctx.query);
    flag++;
    console.log(flag);
    if (flag >= 4) {
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
                ctx.body = {
                    data: {
                        hasMore: false,
                        list: [],
                        limit: 0,
                        offset: 5,
                    },
                };
            }, 1000);
        });
    } else {
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
                ctx.body = {
                    data: {
                        hasMore: true,
                        limit: 0,
                        offset: 5,
                        list: [
                            {
                                title: "测试课程",
                                video: "*****************",
                                poster: "",
                                price: 500,
                                category: 1,
                            },
                            {
                                title: "测试课程",
                                video: "*****************",
                                poster: "",
                                price: 500,
                                category: 1,
                            },
                            {
                                title: "测试课程",
                                video: "*****************",
                                poster: "",
                                price: 500,
                                category: 1,
                            },
                            {
                                title: "测试课程",
                                video: "*****************",
                                poster: "",
                                price: 500,
                                category: 1,
                            },
                            {
                                title: "测试课程",
                                video: "*****************",
                                poster: "",
                                price: 500,
                                category: 1,
                            },
                        ],
                    },
                };
            }, 1000);
        });
    }
});
module.exports = router;
