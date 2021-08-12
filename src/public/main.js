/* eslint-disable no-undef */
const noteForm = document.querySelector('#noteForm');
const title = document.querySelector('#title');
const description = document.querySelector('#description');

noteForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // si savedId existe, estamos actualizando. si no, estamos creando.
  if (savedId) {
    updateNote(savedId, title.value, description.value);
  } else {
    saveNote(title.value, description.value);
  }

  title.value = '';
  description.value = '';

  title.focus();
});
