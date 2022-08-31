import Vue from 'vue'
import Vuex from 'vuex'
// import request from '@/utils/request'
import {hotArticleList} from './getters.js'

Vue.use(Vuex)

/** 状态定义 */
export const state = {
  loading: false,
  //themeObj: 0,//主题
  themeObj:{
    user_start:"心之所向，素履以往；生如逆旅,一苇以航。",
    top_image:"",//首页banner背景
    head_portrait:"",//头像
    autograph:'lallala', //简介
    right_smailimg:"",
    right_user_start:"",
    right_autograph:""
  },
  //右侧个人信息数据
  rightInfoData:{
      //个人信息
      git: "https://gitee.com",
      qq: "/static/img/qq.png",
      sina: "https://weibo.com",
      // wechat: "/static/img/qq.jpg",
      wechat: "",
      csdn: "http://www.csdn.cn",
      job: "https://www.baidu.com",
  },

  keywords:'',//关键词
  errorImg: 'this.onerror=null;this.src="' + require('../../static/img/tou.jpg') + '"',
  baseURL:'http://124.221.62.37:7777/'
  // baseURL:'http://localhost:7777/'
}

function initStore(){
  state.themeObj.user_start="你好，明天！"
  hotArticleList().then((res)=>{
    console.log(res)
   
    if(res.data.code==200){
      var config=res.data.data
      state.themeObj.user_start=config.motto
      state.themeObj.top_image=config.topImage
      state.themeObj.head_portrait=config.headPortrait
      state.themeObj.autograph=config.autograph
      state.themeObj.right_smailimg=config.rightSmailimg
      state.themeObj.right_user_start=config.rightUserStart

      state.rightInfoData.csdn=config.csdn
      state.rightInfoData.qq=config.qq
      state.rightInfoData.git=config.git
      state.rightInfoData.sina=config.sina
      state.right_autograph=config.rightAutograph
    }
   
  })
//   request({
//     url: '/article/hotArticleList',
//     headers: {
//       isToken: false
//     },
//     method: 'get'
// })
}
initStore();

export default new Vuex.Store({
    state,
})
