/* eslint-disable no-async-promise-executor */
import {getMarsDetails} from '@/api/dashboard'

export function fetchMarsImages({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
        try {
            commit('Mars/setMarsImageLoading', true, {root: true})
            const response = await getMarsDetails(payload)

            commit('Mars/setMarsImages', response, {root: true})
            resolve();
        } catch (error) {
            console.log(error)
            return reject();
        } finally {
            commit('Mars/setMarsImageLoading', false, {root: true})
        }
    })
}