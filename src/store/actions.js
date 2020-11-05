import * as types from './mutation-types'

export default {
    // 采用es5的参数解构 来简化代码
    addTotalTime({ commit }, time) {  
      commit(types.ADD_TOTAL_TIME, time)
    },
    decTotalTime({ commit }, time) {
      commit(types.DEC_TOTAL_TIME, time)
    },
    savePlan({ commit }, plan) {
      commit(types.SAVE_PLAN, plan);
    },
    deletePlan({ commit }, plan) {
      commit(types.DELETE_PLAN, plan)
    }
  };