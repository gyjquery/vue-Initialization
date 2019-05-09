import {
  reqSendCode,
  newDatas
} from '@/api'
export default {
    state: {
        queryDate:{},//助贷机构管理列表
      queryDateCode:200,
      newData:{},
      newDataCode:200
    },
    mutations: {
        ["UNIONINSTITUTION"](state, data) {
            state.queryDate= data.data
            state.queryDateCode= data.code
        },
      ["UNION"](state, data) {
        state.newData= data.data
        state.newDataCode= data.code
      }
    },
    actions: {
        async unionInstitution({ commit }, payload) {
            let { data = {} ,code} = await reqSendCode(payload)
            commit("UNIONINSTITUTION",{ data, code})

        },
      async union({ commit }, payload) {
        let { data = {} ,code} = await newDatas(payload)
        commit("UNION",{ data, code})

      },

    }
};
