function onLoad() {
  document.querySelector('#root').innerHTML = 'Enter Name: <input class=\'who\' /><br/>';
  document.querySelector('#root').innerHTML += `<input class='noinput' type='checkbox' />Disable input(evt.preventDefault)<br/>`;

  document.querySelector('#root').innerHTML +=
    `<div id='btnContainer' style='background-color:#ddd;width:auto;padding:10px;margin-top:10px;display:flex;justify-content:center;'>
      <input id='btn' type='button' value='click to say hi' />
    </div>`;

  document.querySelector('.noinput').addEventListener('click', notTakeInput);
  document.querySelector('#btn').addEventListener('click', onClick);
  document.querySelector('#btnContainer').addEventListener('click', onClick);
}

function notTakeInput(ev) {
  ev.preventDefault();
}

function onClick(ev) {
  alert('hi, ' + (document.querySelector('.who').value || 'stranger'));
  ev.stopPropagation();
}
onLoad();