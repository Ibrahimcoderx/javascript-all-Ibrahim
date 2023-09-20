let x = myFunction(40, 30);
document.getElementById("demo").innerHTML = x;
function myFunction(a, b) {
  return a * b;
}

document.getElementById("demo").innerHTML = x;
console.clear();
console.log(location.href);
console.log(location.protocol);
console.log(location.hostname);
console.log(location.pathname);
console.log(location.port);

let locationDiv = document.getElementById("location-div");

console.log(locationDiv);
let p1 = locationDiv.children[0];
let p2 = locationDiv.children[1];
let p3 = locationDiv.children[2];
let p4 = locationDiv.children[3];
let p5 = locationDiv.children[4];
console.log(p1);

p1.textContent = location.hostname;
p2.textContent = location.href;
p3.textContent = location.pathname;
p4.textContent = location.port;
p5.textContent = location.protocol;

let Mylocation = document.getElementById("mylocation");
let Mymessage = document.getElementById("paragraph");

Mylocation.addEventListener("click", function () {
  let count = 0;
  Mymessage.innerHTML = count;

  setInterval(() => {
    count++;
    Mymessage.innerHTML = count;
  }, 1000);
});

console.log(window);
