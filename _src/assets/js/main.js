/* eslint-disable no-console */
'use strict';

const keys = document.querySelectorAll('.page__keys--key');

function handleKey(ev){
  const selectedKey = ev.currentTarget;
  selectedKey.classList.toggle('golgen-border');
}


keys.forEach(key => {
  key.addEventListener('click', handleKey);
});

