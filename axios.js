// Axios
// axios (config) 
// axios (url [, config])
// axios.get(url·[, config])
// axios.post(url [, config]) 
// axios.put(url·[, config]) 
// axios.patch(url [, config])
// axios.delete(url [, config])


console.clear();
// console.log(window)

// Get

// axios.get("https://jsonplaceholder.typicode.com/posts")
// .then((res) => console.log(res.data)) // console korla res ar modda kiki asa dhakha jay
// .catch((err)=> console.log(err))  //err amadar xml/fatch a bania nia hota but akana made kora asa
// .then((res) => console.log(res.data)) // console korla res ar modda kiki asa dhakha jay
// .catch((err)=> console.log(err))  //err amadar xml/fatch a bania nia hota but akana made kora asa

// POST

// axios.post("https://jsonplaceholder.typicode.com/posts" , {
//     // method: 'POST', //POSt Method ar dorkar ni
//     body: JSON.stringify({
//       title: 'foo',
//       body: 'bar',
//       userId: 1,
//     }),
// })
    

// .then((res) => console.log(res.data)) // console korla res ar modda kiki asa dhakha jay
// .catch((err)=> console.log(err))  //err amadar xml/fatch a bania nia hota but akana made kora asa


// PUT

// axios.put("https://jsonplaceholder.typicode.com/posts/10" , {

//     body: JSON.stringify({
//         id: 10,
//         title: 'Ibrahim',
//         body: 'bar',
//         userId: 1,
//       }),
// })
    
// .then((res) => console.log(res.data)) // console korla res ar modda kiki asa dhakha jay
// .catch((err)=> console.log(err))  //err amadar xml/fatch a bania nia hota but akana made kora asa


// PATCH

// axios.patch("https://jsonplaceholder.typicode.com/posts/10" , {

//     body: JSON.stringify({
//         id: 10,
//         title: 'Ibrahim Patch',
//         body: 'bar',
//         userId: 1,
//       }),
// })
    
// .then((res) => console.log(res.data)) // console korla res ar modda kiki asa dhakha jay
// .catch((err)=> console.log(err))  //err amadar xml/fatch a bania nia hota but akana made kora asa


// DELETE

// axios.delete("https://jsonplaceholder.typicode.com/posts/10" , {

//     body: JSON.stringify({
//         id: 10,
//         title: 'Ibrahim Patch',
//         body: 'bar',
//         userId: 1,
//       }),
// })
    
// .then((res) => console.log(res.data)) // console korla res ar modda kiki asa dhakha jay
// .catch((err)=> console.log(err))  //err amadar xml/fatch a bania nia hota but akana made kora asa


// Async Await use-------------------


// get data

 const  makeReqest2 = async (config) => {
    return await axios(config)
 }

 const getData =() =>{
    makeReqest2("https://jsonplaceholder.typicode.com/posts")
    .then((res) => console.log(res.data))
    .catch((err)=> console.log(err))
 }

 getData()



// post data


 const  makeReqest3 = async (config) => {
    return await axios(config)
 }

 const sendData =() =>{
    makeReqest3({
        url:"https://jsonplaceholder.typicode.com/posts",
        method: "post",
        data: JSON.stringify({ 
            id: 10,   //axios ar data
            title: 'fooooooooooooooooooooo',
            body: 'barrrrrrrrrrrrrrrrrrrrrrrrrr',
            userId: 10,
          }),
    })

    .then((res) => console.log(res.data))
    .catch((err)=> console.log(err))
 }



// put data update data

//  const  makeReqest4 = async (config) => {
//     return await axios(config)
//  }

//  const updateData =() =>{
//     makeReqest4({
//         url:"https://jsonplaceholder.typicode.com/posts/1",
//         method: "put",
//         data: JSON.stringify({ //axios ar data body ka manage kora nisa
//             id: 1,   // json fack api documentation ar onujayi  id daya
//             title: 'fooma',
//             body: 'barma',
//             userId: 10,
//           }),
//     })

//     .then((res) => console.log(res.data))
//     .catch((err)=> console.log(err))
//  }

//  updateData()


// patch data

//  const  makeReqest5 = async (config) => {
//     return await axios(config)
//  }

//  const updateDataOne =() =>{
//     makeReqest5({
//         url:"https://jsonplaceholder.typicode.com/posts/1",
//         method: "patch",
//         data: JSON.stringify({ //axios ar data
//             id: 1,   // json fack api documentation ar onujayi  id daya
//             title: 'foomaaaaaaaaaa',
//             body: 'barmaaaaaaaaa',
//             userId: 10,
//           }),
//     })

//     .then((res) => console.log(res.data))
//     .catch((err)=> console.log(err))
//  }

//  updateDataOne()


//  delete


//  const  makeReqest3 = async (config) => {
//     return await axios(config)
//  }

//  const deleteData =() =>{
//     makeReqest3({
//         url:"https://jsonplaceholder.typicode.com/posts/1",
//         method: "delete",
//     })

//     .then((res) => console.log(res.data))
//     .catch((err)=> console.log(err))
//  }

//  deleteData()