// async await Fatch

console.clear();

// const makeReqest = async() =>{
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');

//     if(!res.ok){
//         const message =`ERROR : ${res.status}`
//         throw new Error(message) // catch dia output
//     }

//     const data = await res.json()
//     //  console.log(data)
//      return data
// }

// const getData =() =>{
//     makeReqest() // ata async functon promice return kora ata handle korta hoba
//     .then((res)=> console.log(res))
//     .catch((err)=> console.log(err))
// }

// getData()

// POST

const makeReqest = async (url, method) => {
  const res = await fetch(url, method);

  if (!res.ok) {
    const message = `ERROR : ${res.status}`;
    throw new Error(message); // catch dia output
  }

  const data = await res.json();
  //  console.log(data)
  return data;
};

const postData = () => {
  makeReqest("https://jsonplaceholder.typicode.com/posts", {
    // call dawya hoisa url and kisu method dia onk use korar jonno
    method: "POST",
    body: JSON.stringify({
      title: "foo11111111111111",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    // ata async functon promice return kora ata handle korta hoba
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

postData();
