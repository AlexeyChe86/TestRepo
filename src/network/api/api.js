import {BASE_URL} from '../../store/actions/base'
import axios from 'axios'

// GET запрос
export const getRequest = (endpoinst, commit, success, error, data) => {
    axios.get(`${BASE_URL}/${endpoinst}?${data}`, {
        headers: {
            'Content-Type': 'application/json',
        }
    }).then((response) => {
        if (response.data.code === "success") { // Тут возможно другой response придет в response.data
            commit(success, response)
        }
    }).catch((err) => {
        commit(error, err)
    })
}

// POST запрос
export const postRequest = (endpoinst, commit, success, error, data) => {
    axios.post(`${BASE_URL}/${endpoinst}`, data, {
        headers: {
            'Content-Type': 'application/json',
        }
    }).then((response) => {
        if (response.data.code === "success") { // Тут возможно другой response придет в response.data
            commit(success, response)
        }
    }).catch((err) => {
        commit(error, err)
    })
}