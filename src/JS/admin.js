const $form = document.querySelector('.admin');

$form.addEventListener('submit', async (event) => {
  event.preventDefault();

  let response = await fetch('', {
    method: 'POST',
    body: new FormData($form),
  });

  let result = await response.json();

  alert(result.message);
});
