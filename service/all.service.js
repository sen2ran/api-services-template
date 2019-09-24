/* eslint-disable no-console */

import instance from "@/service/instance.js"
import URL from "@/service/RequestUrls.js"

//Without Token  GET 
const getAllUser = () => {
    return instance.instance.get(URL.getAllUser).then(response => {
        return response
    }).catch(err => {
        return err
    });
};

//with Token
const getAllUserWithToken = () => {
    return instance.instanceToken.get(URL.getAllUser).then(response => {
        return response
    }).catch(err => {
        return err
    });
};

//POST
const createUser = (payload) => {
    return instance.instance.post(URL.createUser, payload).then(response => {
        return response
    }).catch(err => {
        return err
    });
};



//PUT
const editUser = (payload) => {
    return instance.instance.put(URL.editUser, payload).then(response => {
        return response
    }).catch(err => {
        return err
    });
};

//DELETE
const deleteUser = (payload) => {
    return instance.instance.delete(URL.deleteUser + "/" + payload.id).then(response => {
        return response
    }).catch(err => {
        return err
    });
};

export default {
    GetAllUser: getAllUser,
    GetAllUserWithToken : getAllUserWithToken,
    CreateUser: createUser,
    EditUser: editUser,
    DeleteUser: deleteUser,
}