(() => {
  window.addEventListener('load', () => {
    const div = document.getElementById('myDiv');
    div.innerHTML += '<br />Hello from script 1'
  });
  
})()