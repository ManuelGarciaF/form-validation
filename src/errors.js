function update(errorArray) {
  const errorUl = document.querySelector('.c-form__errors');

  // Hide ul if errorList's length is less than 1.
  errorUl.classList.toggle('is-hidden', errorArray.length < 1);

  // Remove all previous contents
  errorUl.innerHTML = '';

  errorArray.forEach((element, index) => {
    const li = document.createElement('li');
    li.classList.add('c-form__error');
    li.setAttribute('data-index', index);
    li.innerText = element.errorText;
    errorUl.appendChild(li);
  });
}

let errorArray = [];

export default {
  refresh() {
    update(errorArray);
  },
  // Adds an error to the list
  add(errorText, order, inputId, updateAfter = true) {
    errorArray.push({
      errorText,
      order,
      inputId,
    });

    errorArray.sort((a, b) => a.order - b.order);

    if (updateAfter) update(errorArray);
  },
  // Removes all errors coming from inputId
  remove(inputId, updateAfter = true) {
    errorArray = errorArray.filter((element) => !(element.inputId === inputId));

    if (updateAfter) update(errorArray);
  },
  getLength() {
    return errorArray.length;
  },
};
