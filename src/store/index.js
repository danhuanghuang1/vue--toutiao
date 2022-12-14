import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)
// state数据持久化的方法
// -1.封装本地存储，
// -2.vuex - persistedstate

// 1.下载
// yarn add vuex-persistedstate@3.2.1
// 2.引入
// 在store-index.js中引入
// import createPersistedState from 'vuex-persistedstate'
// 3.调用并配置
// export default里面
// plugins:[createPersistedstate()]
// 配置项
// key:默认值是vuex
// storage:存储的方式，默认值是本地存储
// reducer:指定持久化哪些数据.函数，return一个对象，对象就作为存储的value
// -参数state
export default new Vuex.Store({
  plugins: [
    createPersistedState({
      key: 'HEIMA_TOUTIAO',
      // storage: window.sessionStorage,
      reducer({ tokenObj, channels, histories }) {
        return { tokenObj, channels, histories }
      }
    })
  ],
  state: {
    tokenObj: {},
    //   (window.localStorage.getItem('HEIMATOOUTIAO_TOKEN')) || {}
    channels: [],
    histories: []
  },
  getters: {
    isLogin(state) {
      return !!state.tokenObj.token
    }
  },
  mutations: {
    SET_TOKEN(state, token) {
      // 将token存进vuex
      state.tokenObj = token
    },
    /**
     *
     * @param {*} channels 删除或者添加后的最新的channeLs
     */
    SET_MY_CHANNELS(state, channels) {
      // 将token存进vuex
      state.channels = channels
    },
    /**
     *
     * @param {*} state 删除或者添加以后的新的搜索历史
     * @param {*} histories
     */
    SET_HISTORIES(state, histories) {
      // 将token存进vuex
      state.histories = histories
    }
  }
})
