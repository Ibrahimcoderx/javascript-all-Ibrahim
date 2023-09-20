console.clear();

// Get Method

// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then((res) => res.json())  // must be JSON a convert korta hoba for fatch
// .then((res) => console.log(res))
// .catch((err) => console.log(err))

// Get Method------------

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((res) => {
//     if(!res.ok){
//         const message = `Error : ${res.status}`;
//         throw new Error(message)
//     }
//     return res.json() // must be JSON a convert korta hoba for fatch
// })
// .then((res) => console.log(res))
// .catch((err) => console.log(err))

// POST----------------------

// fetch("https://jsonplaceholder.typicode.com/posts", {

//   method: "POST",  // Follow the api Rule 
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
//   body: JSON.stringify({
//     title: "Ibrahim",
//     body: "bar",
//     userId: 1,
//   }), // Closing parenthesis was missing here
// })
//   .then((res) => {
//     if (!res.ok) {
//       const message = `Error : ${res.status}`;
//       throw new Error(message);
//     }
//     return res.json(); // Must be JSON to convert
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));


  // PUT  / PATCH  Update--------------------------

//   fetch("https://jsonplaceholder.typicode.com/posts/5", {

//   method: "PUT",  // Follow the api Rule 
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
//   body: JSON.stringify({
//     title: "Ibrahim Update",
//     body: "bar",
//     userId: 1,
//   }), // Closing parenthesis was missing here
// })
//   .then((res) => {
//     if (!res.ok) {
//       const message = `Error : ${res.status}`;
//       throw new Error(message);
//     }
//     return res.json(); // Must be JSON to convert
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

    // Delete  --------------------------

    // fetch("https://jsonplaceholder.typicode.com/posts/5", {

    //     method: "DELETE",  // Follow the api Rule 
   
    //   })
    //     .then((res) => {
    //       if (!res.ok) {
    //         const message = `Error : ${res.status}`;
    //         throw new Error(message);
    //       }
    //       return res.json(); // Must be JSON to convert
    //     })
    //     .then((data) => console.log(data))
    //     .catch((err) => console.log(err));


