$(document).ready(function() {
    // Función para cambiar a Modo Claro
    $('#modo-claro').click(function() {
      $('body').css('background-color', '#f8f9fa'); // Cambiar color de fondo del body
      $('.jumbotron').css('background-color', '#f8f9fa'); // Cambiar color de fondo de la jumbotron
      $('.jumbotron').css('color', '#212529'); // Cambiar color de texto de la jumbotron
      $('.table').css('background-color', '#ffffff'); // Cambiar color de fondo de la tabla
      $('.table').css('color', '#212529'); // Cambiar color de texto de la tabla
      $('.navbar-light .navbar-nav .nav-link').css('color', '#007bff'); // Cambiar color de texto de los enlaces del menú
    });
  
    // Función para cambiar a Modo Oscuro
    $('#modo-oscuro').click(function() {
      $('body').css('background-color', '#343a40'); // Cambiar color de fondo del body a oscuro
      $('.jumbotron').css('background-color', '#343a40'); // Cambiar color de fondo de la jumbotron a oscuro
      $('.jumbotron').css('color', '#f8f9fa'); // Cambiar color de texto de la jumbotron a claro
      $('.table').css('background-color', '#454d55'); // Cambiar color de fondo de la tabla a oscuro
      $('.table').css('color', '#f8f9fa'); // Cambiar color de texto de la tabla a claro
      $('.navbar-dark .navbar-nav .nav-link').css('color', '#f8f9fa'); // Cambiar color de texto de los enlaces del menú a claro
    });
  });
  