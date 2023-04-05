/* eslint-disable no-async-promise-executor */
import {getPhotoOfTheDay} from '@/api/dashboard'

export async function fetchPhotoOfTheDay({ commit }) {
    return new Promise(async (resolve, reject) => {
        try {
            commit('Dashboard/setPhotoOfTheDayLoading', true, {root: true})
            const response = await getPhotoOfTheDay()

            commit('Dashboard/setPhotoOfTheDay', response, {root: true})
            resolve();
        } catch (error) {
            console.log(error)
            return reject();
        } finally {
            commit('Dashboard/setPhotoOfTheDayLoading', false, {root: true})
        }
    })
}