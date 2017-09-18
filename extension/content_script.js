/* Make every div on page content editable. */
var allElements = document.getElementsByTagName("*");
var currentEl;
for (var i = 0; i < allElements.length; i++) {
  currentEl = allElements[i];
  if (currentEl.tagName === 'DIV') {
    currentEl.setAttribute('contenteditable', true);
  }
}
