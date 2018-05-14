
// var pljeskavica = "meso";
// console.log(pljeskavica);


// function info () {
//     console.log(window.navigator.appCodeName); 
//     console.log(window.navigator.appVersion);
//     console.log(window.navigator.vendor);
// }

// function isOnline () {
//     if (window.navigator.onLine === false) {
//         console.log("MI SMO OfFLINE JEEEEE");
//         return;
//     }

//     console.log("ok smo");
// }

// console.log(info());
// console.log(isOnline());


// function screening () {
//     console.log(window.screen.availHeight);
//     console.log(window.screen.availWidth);
//     console.log(window.screen.height);
// }

// console.log(screening());

// function getLocation () {
//     console.log(location.href);
//     console.log(location.hostname);
//     console.log(location.protocol);
//     console.log(location.search);
// }

// console.log(getLocation());

// (function reloadPage () {
//     return location.reload();
// })();

// (function redirection() {
//     return location.assign("https://developer.mozilla.org/en-US/docs/Web/API/Screen/availHeight")
// })();


function storeData (key, value) {
    localStorage.setItem(key, value);
};

function readData (key) {
    return localStorage.getItem(key);
};

storeData("nesto", 342);
console.log(readData("nesto"));




function removeData () {
    localStorage.clear();
};

// (function storeData () {
//     sessionStorage.setItem("nesto", "132");
//     sessionStorage.setItem("nista", "0");
// })();

// (function readData () {
//     console.log(sessionStorage.getItem("nesto"));
//     console.log(sessionStorage.getItem("nista"));
//     if (sessionStorage.getItem.length === 0) {
//         console.log("There is no data");
//     }
// })();

// (function removeData () {
//     sessionStorage.clear();
// })();

// (function checkHistory () {
//     history.go(-2);
// })();