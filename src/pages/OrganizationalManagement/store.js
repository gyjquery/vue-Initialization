// import { post } from "@/lib/request.js";
import {reqSendCode} from '@/api'
export default {
    state: {
        queryDate:{},//助贷机构管理列表
      queryDateCode:20,
    },
    mutations: {
        ["UNIONINSTITUTION"](state, data) {
            state.queryDate= data.data
            state.queryDateCode= data.code
        }
    },
    actions: {
        async unionInstitution({ commit }, payload) {
            let { data = {} ,code} = await reqSendCode()
            commit("UNIONINSTITUTION",{ data, code})

        },

    }
};
