import axios from "axios";

const base_url = "http://localhost:5000/api"

export function getPromise(endPont) {
    return new Promise((resolve, reject) => {
        axios.get(base_url + `/${endPont}`)
            .then(response => {
                resolve(response.data)
            }).catch(error => {
                reject(error)
            })
    })
}


export function postPromise(endPont, data) {
    return new Promise((resolve, reject) => {
        axios.post(base_url + `/${endPont}`, data)
            .then(response => {
                resolve(response.data)
            }).catch(error => {
                reject(error)
            })
    })
}