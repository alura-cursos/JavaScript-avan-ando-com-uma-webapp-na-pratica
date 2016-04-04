var $newCard = document.querySelector('.newCard');
var $newCardContent = document.querySelector('.newCard-content');
var $newCardAction = document.querySelector('.newCard-action');

$newCard.addEventListener('submit', function(event) {
  if ($newCardContent.value == '') {
    event.preventDefault();

    if (document.querySelector('.error') == null) {
      var $error = document.createElement('span');
      $error.classList.add('error');
      $error.textContent = 'Por favor, preencha o campo acima.';

      $newCard.insertBefore($error, $newCardAction);
    };
  };
});
