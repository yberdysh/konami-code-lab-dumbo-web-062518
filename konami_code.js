const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  // your code here
  
  document.body.addEventListener("keydown", onKeyDownHandler)

  let index = 0;
   
  // This is the function that would be invoked by the event listener.
  function onKeyDownHandler(e) {
    debugger;
    const key = e.key;
   
    if (key === codes[index]) {
      index++;
   
      if (index === codes.length) {
        alert("Hurray!");
   
        index = 0;
      }
    } else {
      index = 0;
    }
  }

}
