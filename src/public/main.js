/* eslint-disable no-undef */
const socket = io();

const noteForm = document.querySelector('#noteForm');
const title = document.querySelector('#title');
const description = document.querySelector('#description');

noteForm.addEventListener('submit', (e) => {
  e.preventDefault();

  socket.emit('client:newnote', {
    title: title.value,
    description: description.value,
  });
});