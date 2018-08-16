import { config } from '../config.js'
class HTTP {
    request(params) {
        //params 包含 URL ，data,method
        wx.request({
            url: config.baseUrl + params.url,
            methond: params.methond,
            data: params.data,
            header: {
                'content-Type': "application/json",
                'appkey': config.appkey
            },
            success: (res) => {
                let code = res.statusCode.toString()
                if(code.startsWith('2')){

                }else{

                }
            },
            fail:(err)=>{

            }

        })
    }
}
export{HTTP}