import {
    GET_DATA_REQUEST,
    GET_DATA_SUCCESS,
    GET_DATA_FAILURE
} from '../../store/actions/get_data'
import {postRequest} from '../../network/api/api'


const state = {
    code: null,
    message: null,
    result: null,
    status: null
}

const actions = {
    [GET_DATA_REQUEST]: ({commit}, data) => {
        commit(GET_DATA_REQUEST)
        return postRequest(
            commit,
            GET_DATA_SUCCESS,
            GET_DATA_FAILURE,
            data
        )
    }
}

const mutations = {
    [GET_DATA_REQUEST]: state => {
        state.status = "loading"
    },
    [GET_DATA_SUCCESS]: (state, response) => {
        state.status = "success"
        state.message = response.data.message
        state.code = response.data.code
        state.result = response.data.result
    },
    [GET_DATA_FAILURE]: (state, response) => {
        state.status = "error"
        state.message = response.data.message
        state.code = response.data.code
    }
}

export default {
    state,
    actions,
    mutations
}