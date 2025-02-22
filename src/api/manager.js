import axios from '~/axios'
import { queryParams } from '~/composables/util'

export function login(username, password) {
    return axios.post("/admin/login", {
        username,
        password
    })
}

export function logout() {
    return axios.post("/admin/logout")
}

export function updatepassword(data) {
    return axios.post("/admin/updatepassword",data)
}

export function getinfo() {
    return axios.post("/admin/getinfo")
}

export function createManager(data) {
    return axios.post("/admin/manager", data)
}

export function updateManager(id, data) {
    return axios.post("/admin/manager/" + id, data)
}

export function getManagerList(page, query = {}) {
    let q = queryParams(query, true)
    return axios.get(`/admin/manager/${page}${q}`)
}

export function updateManagerStatus(id, status) {
    return axios.post(`/admin/manager/${id}/update_status`, { status })
}

export function deleteManager(ids) {
    return axios.post(`/admin/manager/${ids[0]}/delete`)
}