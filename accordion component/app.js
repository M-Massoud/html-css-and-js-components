document.querySelector('main').addEventListener('click', function (e) {
  const itemClicked = e.target.closest('.item');
  if (!itemClicked) return;

  /* add this to close all the other items when click one of them
  document.querySelectorAll('.item').forEach(function (item) {
    item.classList.remove('open');
  });
 */
  itemClicked.classList.toggle('open');
});
