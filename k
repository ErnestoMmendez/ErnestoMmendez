import React, { useState } from 'react';

function RegistroFormulario() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Aquí puedes realizar la lógica para procesar los datos del formulario, como enviar una solicitud al servidor o realizar validaciones adicionales.
    console.log('Datos enviados:', {
      nombre,
      email,
      password,
      confirmPassword,
    });

    // Limpia los campos del formulario después de enviarlos
    setNombre('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div>
      <h1>Registro</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
          required
        /><br />

        <label htmlFor="email">Correo Electrónico:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        /><br />

        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        /><br />

        <label htmlFor="confirm_password">Confirmar Contraseña:</label>
        <input
          type="password"
          id="confirm_password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          required
        /><br />

        <input type="submit" value="Registrarse" />
      </form>
    </div>
  );
}

export default RegistroFormulario;
