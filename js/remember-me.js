document.addEventListener('DOMContentLoaded', (event) => {
    const checkBox = document.querySelector('.login-links .inputs input[type="checkbox"]');
    const labelRemember = document.querySelector('.login-links .inputs .label-remember');
  
    checkBox.addEventListener('change', function() {
      if(this.checked) {
        labelRemember.style.backgroundColor = 'rgb(30, 215, 96)';
      } else {
        labelRemember.style.backgroundColor = ''; // Volta para a cor original
      }
    });
  });
  