
module.exports = {
    // 处理跨域请求
    devServer: {
        proxy: {
            '/article': {
                target: "http://127.0.0.1:7001/",
                ws: true, // 允许websockt服务
                changeOrigin: true // 开启虚拟服务器，请求代理服务器
            }
        }
    }
}