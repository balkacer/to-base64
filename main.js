var input = document.querySelector('input[type=file]');
input.onchange = function () {
  var file = input.files[0],
    reader = new FileReader();

  reader.onloadend = function () {
    // to send to db
    var b64 = reader.result.replace(/^data:.+;base64,/, '');

    // to recive from db
    var image = document.querySelector('#img');
    image.src = `data:image/jpg;base64,${b64}`;
  };

  reader.readAsDataURL(file);
};