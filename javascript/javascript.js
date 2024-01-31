
document.addEventListener('DOMContentLoaded', () => {

  var elems1 = document.querySelectorAll('.sidenav');
  var instances1 = M.Sidenav.init(elems1);

  const elementoscarousel = document.querySelectorAll('.carousel')
  M.Carousel.init(elementoscarousel, {
    duration: 150,
    dist: -150,
    shift: 5,
    padding: 5,
    NumVisible: 3,
    indicators: true,

  });
  var elems = document.querySelectorAll('.datepicker');
  var instances = M.Datepicker.init(elems);
  format: 'dd/mm/yyyy'


})


$(document).ready(function () {
  // Inicializar componentes de Materialize CSS
  M.AutoInit();

  // Función para validar la cédula
  function validarCedula(cedula) {
      var cedulaRegex = /^\d{6,9}$/;
      return cedulaRegex.test(cedula);
  }

  // Función para validar nombre y apellido
  function validarNombreApellido(nombre, apellido) {
      var nombreRegex = /^[A-Za-zÁ-ú\s]+$/;
      return nombreRegex.test(nombre) && nombreRegex.test(apellido);
  }

  // Función para validar la fecha de nacimiento (mayor de 18 años)
  function validarFechaNacimiento(fechaNacimiento) {
      var fechaActual = new Date();
      var fechaInput = new Date(fechaNacimiento);
      var edad = fechaActual.getFullYear() - fechaInput.getFullYear();
      if (fechaActual.getMonth() < fechaInput.getMonth() || (fechaActual.getMonth() === fechaInput.getMonth() && fechaActual.getDate() < fechaInput.getDate())) {
          edad--;
      }
      return edad >= 18;
  }

  // Función para validar el correo electrónico
  function validarCorreo(correo) {
      return /^[\w.-]+@[\w.-]+\.\w+$/.test(correo);
  }

  // Función para validar el nombre de usuario
  function validarUsuario(usuario) {
      return /^[A-Za-z0-9]+$/.test(usuario);
  }

  // Función para validar la contraseña
  function validarContrasena(contrasena) {
      var contrasenaRegex = /^(?=.*[A-ZÑÁÉÍÓÚa-zñáéíóú])(?=.*\d)(?=.*[@$?*])[A-Za-z\d@$?*]{5,8}$/;
      return contrasenaRegex.test(contrasena);
  }

  // Formulario de registro usando jQuery
  $('#formularioRegistro').submit(function (event) {
      event.preventDefault();
      var cedula = $('#cedula').val();
      var nombre = $('#nombre').val();
      var apellido = $('#apellido').val();
      var fechaNacimiento = $('#fechaNacimiento').val();
      var correo = $('#correo').val();
      var usuario = $('#usuario').val();
      var contrasena = $('#contrasena').val();

      // Validaciones
      if (!validarCedula(cedula)) {
          M.toast({ html: 'Cédula inválida', classes: 'red' });
          return;
      }

      if (!validarNombreApellido(nombre, apellido)) {
          M.toast({ html: 'Nombre o apellido inválido', classes: 'red' });
          return;
      }

      if (!validarFechaNacimiento(fechaNacimiento)) {
          M.toast({ html: 'Debe ser mayor de 18 años para registrarse', classes: 'red' });
          return;
      }

      if (!validarCorreo(correo)) {
          M.toast({ html: 'Correo electrónico inválido', classes: 'red' });
          return;
      }

      if (!validarUsuario(usuario)) {
          M.toast({ html: 'Nombre de usuario inválido', classes: 'red' });
          return;
      }

      if (!validarContrasena(contrasena)) {
          M.toast({ html: 'Contraseña inválida', classes: 'red' });
          return;
      }

      // Enviar los datos de registro al servidor (reemplazar con la lógica de registro real)

      M.toast({ html: 'Registro exitoso', classes: 'green' });
  });

  if (!localStorage.getItem('jugadoresRegistrados')) {
      localStorage.setItem('jugadoresRegistrados', '0');
  }  
  
  // Función para verificar el número de jugadores registrados y redirigir si es necesario
     function verificarJugadoresRegistrados() {
      // Comprobar si ya hay jugadores registrados en localStorage
      const jugadoresRegistrados = localStorage.getItem('jugadoresRegistrados') || 0;

      // Incrementar la cantidad de jugadores registrados
      const nuevoNumeroJugadores = parseInt(jugadoresRegistrados) + 1;

      // Actualizar el valor en localStorage
      localStorage.setItem('jugadoresRegistrados', nuevoNumeroJugadores);

      // Comprobar si se han registrado dos jugadores
      if (nuevoNumeroJugadores === 2) {
          // Redirigir a otra página (reemplaza 'paginaDos.html' con la URL de la página a la que deseas redirigir)
          window.location.href = 'crucigrama.html';
      }

  }
  localStorage.setItem('jugadoresRegistrados', '0');

  // Función para manejar el envío del formulario
  function enviarFormulario() {
      // Realiza aquí las validaciones necesarias antes de permitir el registro

      // Llama a la función para verificar el número de jugadores registrados
      verificarJugadoresRegistrados();
  }

  // Asigna la función enviarFormulario al evento submit del formulario
  document.getElementById('formularioRegistro').addEventListener('submit', function (event) {
      event.preventDefault();
      enviarFormulario();
  });
});




