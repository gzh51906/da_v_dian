export default {
    state: {
        cartlist: [{
                qty: 1,
                goods_id: "9999",
                img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567697623123&di=8e8158dca59291737e9bd392fb23dd24&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F9vo3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2Fbd315c6034a85edf8ccb531e4d540923dd547543.jpg",
                alt: "you see ge luan",
                price: 5722,
                ischeck: true
            },
            {
                qty: 1,
                goods_id: "9998",
                img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567697623123&di=8e8158dca59291737e9bd392fb23dd24&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F9vo3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2Fbd315c6034a85edf8ccb531e4d540923dd547543.jpg",
                alt: "you see ge luan",
                price: 102,
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
        addgoods(state, a) {
            if (typeof a == "string") {
                state.cartlist = state.cartlist.map(e => {
                    if (e.goods_id == a) {
                        e.qty += 1
                        return e
                    }
                })
            } else {
                const temp = {}
                temp.qty = 1
                temp.goods_id = a.goodsId
                temp.img = a.goodsImg
                temp.alt = a.goodsName
                temp.price = a.sales[a.goodsId].shopPrice
                temp.ischeck = true
                state.cartlist.push(temp)
            }
        },
        decgoods(state, a) {
            if (typeof a == "string") {
                state.cartlist = state.cartlist.map(e => {
                    if (e.goods_id == a) {
                        (e.qty != 0) && (e.qty -= 1)
                        return e
                    }
                })
            } else {
                state.cartlist = state.cartlist.filter(e => e != a.id)
            }
        },
        clearcart(state) {
            state.cartlist = []
        },
        changecheck(state, a) {
            state.cartlist = state.cartlist.map(e => {
                if (e.goods_id == a) {
                    e.ischeck = !e.ischeck
                }
                return e
            })
        },
        checkall(state) {
            state.cartlist = state.cartlist.map(e => {
                e.ischeck = true
                return e
            })
        },
        cancelcheckall(state) {
            state.cartlist = state.cartlist.map(e => {
                e.ischeck = false
                return e
            })
        }

    },
    actions: {

    }
}