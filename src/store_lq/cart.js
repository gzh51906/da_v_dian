export default {
    state: {


        cont:0,
        cartlist: [{
                qty: 1,
                goods_id: "9999",
                img: "https://www.aizhiyi.com/data/upload/shop/store/goods/166/2018/12/26/166_05991397390945243_360.jpg",
                goodsp:' 精进铁矿石摆件_创意小和尚摆件 绿色 原石生林 ',
                price: 499,
                ischeck: true
            },
            {
                qty: 2,
                goods_id: "9998",
                img: "https://www.aizhiyi.com/data/upload/shop/store/goods/162/2018/05/24/162_05805010672453908_360.jpg",
                price: 399,
                  goodsp:'  日出东方茶礼组合_香器茶具套装 可定制 万春和 单件 ',
                ischeck: true
            }
        ]
    },
    getters: {
        total(state) {
            return state.cartlist.reduce((t, n) => {
                if (n.ischeck) {
                    return t + n.qty * n.price
                } else {
                    return t
                }
            }, 0)
        }
    },


    mutations: {
        contjia(state){
state.cont+=1
        },
 contjian(state){
     state.cont-=1
 },




    removeItem(state,id){
            state.cartlist = state.cartlist.filter(item=>item.goods_id!=id);
        },








        
        // addgoods(state, a) {
        //     if (typeof a == "string") {
        //         state.cartlist = state.cartlist.map(e => {
        //             if (e.goods_id == a) {
        //                 e.qty += 1
        //             }
        //             return e
        //         })
        //     } else {
        //         const temp = {}
        //         temp.qty = 1
        //         temp.goods_id = a.goodsId
        //         temp.img = a.goodsImg
        //         temp.alt = a.goodsName
        //         temp.price = a.sales[a.goodsId].shopPrice
        //         temp.ischeck = true
        //         state.cartlist.push(temp)
        //     }
        // },
        // decgoods(state, a) {
        //     if (typeof a == "string") {
        //         state.cartlist = state.cartlist.map(e => {
        //             if (e.goods_id == a) {
        //                 (e.qty != 0) && (e.qty -= 1)
        //             }
        //             return e
        //         })
        //     } else {
        //         state.cartlist = state.cartlist.filter(e => e != a.id)
        //     }
        // },
        // clearcart(state) {
        //     state.cartlist = []
        // },
        // changecheck(state, a) {
        //     state.cartlist = state.cartlist.map(e => {
        //         if (e.goods_id == a) {
        //             e.ischeck = !e.ischeck
        //         }
        //         return e
        //     })
        // },
        // checkall(state) {
        //     state.cartlist = state.cartlist.map(e => {
        //         e.ischeck = true
        //         return e
        //     })
        // },
        // cancelcheckall(state) {
        //     state.cartlist = state.cartlist.map(e => {
        //         e.ischeck = false
        //         return e
        //     })
        // }

    },
    // actions: {

    // }
}