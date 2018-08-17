// components/like/like.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        isLike: {
            type: Boolean,
            value: true
        },
        count: {
            type: Number,
            value: 20
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        yesUrl: "../images/like.png",
        noUrl:'../images/like@dis.png'
    },

    /**
     * 组件的方法列表
     */
    methods: {
      onlike:function(){
        this.setData({
          isLike:!this.properties.isLike,
          count:!this.properties.isLike?this.properties.count+1:this.properties.count-1
        })
      }
    }
})