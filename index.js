$(function() {
  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();
    const newEntry = $('#shopping-list-entry').val();
    let newItem = `<li>
    <span class="shopping-item">${newEntry}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`
  $(".shopping-list").append($(newItem))
  console.log(newEntry);
  $('#shopping-list-entry').val(' ')
  });
  $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    $(this).closest('li').remove();
  });
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });
});
