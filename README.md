# api-services-template
Template for api calls (axios)


## Usage
```
import ApiService from "./service/all.service.js"; //api
```



## Get All User
```
ApiService.GetAllUser().then( response => {
    //your logic
}).catch(error => {
    //your logic
})
```


##Create User 
```
let payload = {  //api params
    name : "Github",
    email : "github@git.com",
    password : "123123123"
}

ApiService.createUser(payload).then( response => {
    //your logic
}).catch(error => {
    //your logic
})
```

##Edit User 
```
let payload = {  //api params
    id : "123",
    name : "Github",
    email : "github@git.com",
    password : "123123123"
}

ApiService.EditUser(payload).then( response => {
    //your logic
}).catch(error => {
    //your logic
})
```

##Delete User 
let payload = {  //api params
    id : "123"
}

ApiService.DeleteUser(payload).then( response => {
    //your logic
}).catch(error => {
    //your logic
})


```