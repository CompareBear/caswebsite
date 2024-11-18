document.getElementById('colorButton').addEventListener('click', function() {
  const colorBox = document.getElementById('colorBox');
  const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
  colorBox.style.backgroundColor = randomColor;
});

document.getElementById('textButton').addEventListener('click', function() {
  const dynamicText = document.getElementById('dynamicText');
  dynamicText.textContent = "Text has been changed!";
});

document.getElementById('alertButton').addEventListener('click', function() {
  const inputField = document.getElementById('inputField');
  alert(inputField.value);
});
