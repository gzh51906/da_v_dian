import axios from "axios"
axios.interceptors.response.use(response => {
    return response.data;
}, error => {
    //     if (error.response) {
    //        switch (error.response.status) {
    //            // 返回401，清除token信息并跳转到登录页面
    //            case 401:
    //            localStorage.removeItem('token');
    //            router.replace({
    //                path: '/login'
    //                //登录成功后跳入浏览的当前页面
    //                // query: {redirect: router.currentRoute.fullPath}
    //            })
    //        }
    return Promise.reject(error.response.data);
    //    }
});
const getCatNavList = async() => {
    const data = await axios.get("https://bravetime.davdian.com/index.php?c=Index&a=getCatNavList")
    return data;
}
export { getCatNavList }