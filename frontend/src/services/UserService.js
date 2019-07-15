'use strict'
import httpService from './HttpService';

export default {
    query,
    save,
    remove,
    getById,
    getUserItems
}

let users = [
    {
        "_id": "u102",
        "userName": "DimaLeshin",
        "fullName": "dima san",
        "password": "tinkerbell",
        "isAdmin": false,
        "reviews":[],
        "items": [{
            itemId: "i333", name: 'Galaxy 9', imgUrl: 'https://www.ivory.co.il/files/catalog/org/1546430132n32Ry.jpg',
            description: 'A brand new cell phone, great condition'
        }, {
            itemId: "i222", name: 'Dell Vostro 5000', imgUrl: 'https://www.ivory.co.il/files/catalog/reg/1550143356e56RM.jpg',
            description: 'my old leptop, bad condition'
        }],
        "adress": { city: "Jerusalem", country: "Israel" }
    },
    {
        "_id": "u101",
        "userName": "orly_amdadi",
        "fullName": "Orly Amdadi",
        "password": "tinkerbell",
        "isAdmin": true,
        "reviews":[],
        "items": [{
            itemId: "i444", name: 'Sony headphones', imgUrl: 'https://www.ivory.co.il/files/catalog/org/1448463991p91MC.jpg',
            description: 'nice headphones for gameing'
        }],
        "adress": { city: "Jerusalem", country: "Israel" }
    }]

async function query() {
    return await httpService.get(_getUrl()) 
}


async function remove(userId) {
    return await httpService.delete(_getUrl(userId))
}

async function getById(userId) {
    return await httpService.get(_getUrl(userId))
}
async function getUserItems(userId) {
    return await httpService.get(`user/items/${userId}`)
}

    function save(editedUser) {
    return httpService.post(`/signup`,editedUser )
        .then (_handleSuccessfulRegister(user))
}


function _handleSuccessfulRegister(user) {
    sessionStorage.setItem('loggedInUser', JSON.stringify(user));
    return user;
}


function _getUrl(id = '') {
    return `user/${id}`
}