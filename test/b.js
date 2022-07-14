async function loadAJS() {
  const a = await import('./a.js');
  console.log('---a', a)
}
loadAJS();

let ele2 = document.createElement("script");
ele2.type = "module";
ele2.innerHTML = "import fn1 from './a.js';fn1();";
document.getElementsByTagName('head').item(0).appendChild(ele2);

// import a from './a.js';
// console.log('---aaaaa', a);

function getJSON(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    callback(this.responseText)
  };
  xhr.open('GET', url, true);
  xhr.send();
}
function customeLoad() {
  getJSON('./a.js', (text) => {
    let ele = document.createElement("script");
    ele.type = "module";
    // ele.innerHTML = text;
    ele.src = './a.js';
    document.getElementsByTagName('head').item(0).appendChild(ele);
  });
}
// customeLoad();