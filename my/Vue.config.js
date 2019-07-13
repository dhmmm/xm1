module.exports={
    devServer:{
        proxy:{
            "/my":{
                "target":"https://m.maoyan.com",
                "changeOrigin":true,
                "pathRewrite":{
                    "^/my":"/"
                }
            },
      
            "/mz":{
                "target":"https://m.maizuo.com",
                "changeOrigin":true,
                "pathRewrite":{
                    "^/mz":"/"
                }
            }
        }
        
    }
}