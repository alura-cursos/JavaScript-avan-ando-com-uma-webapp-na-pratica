var $cardColors = document.querySelectorAll('.card-colors');

for (var index = 0; index < $cardColors.length; index++) {
  $cardColors[index].addEventListener('click', function(event) {
    var $card = this.parentNode.parentNode.parentNode;
    $card.dataset.color = this.dataset.color;
  });
};
