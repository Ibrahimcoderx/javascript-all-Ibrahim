// calling api from javascript
// need-----
// const xhr = new XMLHttpRequest();
// console.log(xhr)
// event - onload(); onerror();
// property- response , responseText , responseType, responseURL ,responseXML, status ,statusText
// function --  open(), send() , setRequestHeader();

//

console.clear();

// GET

const makeRequest = (Method, url, data) => {
  const xhr = new XMLHttpRequest();
  xhr.open(Method, url); // data ta open korta hoba
  xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8"); // open ar pora POST a somoy must
  xhr.onload = () => {
    //onload event gotata hova data anar jonno
    let data = xhr.response; // onload event use korta hoba send ar aga
    console.log(JSON.parse(data)); // data golo json thaka js object  kora nilam GET
  };

  xhr.onerror = () => {
    console.log("error is hare");
  };
  // xhr.send();     //send korta hoba (GET)

  xhr.send(JSON.stringify(data)); // server a send korar jonno Json.stringfy json file kora nita hoba
}; 

// const getData = () =>{
//             makeRequest('GET','https://jsonplaceholder.typicode.com/posts')
//             makeRequest('GET','https://dummyjson.com/products/1')
//             makeRequest('GET','https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8')
//         }

// getData()

// POST

// const sendData = () => {
//   makeRequest("POST", "https://jsonplaceholder.typicode.com/posts", {
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   });
// };

// sendData();


// const UpdateData = () => {
//   makeRequest("PUT", "https://jsonplaceholder.typicode.com/posts/1", {
//     id: 1,
//     title: 'Ibrahim',
//     body: 'Dhaka Bangladesh',
//     userId: 1,
//   });
// };

// UpdateData();



// const UpdateDataOne = () => {
//   makeRequest("PATCH", "https://jsonplaceholder.typicode.com/posts/1", {
//     title: 'Ibrahim Change One',
//   });
// };

// UpdateDataOne();

const DeleteData= () => {
  makeRequest("DELETE", "https://jsonplaceholder.typicode.com/posts/1");
};

DeleteData();



