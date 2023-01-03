import userServices from "../services/user.services";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "./font.css";
const CreateUser = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Obtener los datos del formulario
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData);
    // Crear el nuevo usuario
    if (userServices.addUser(userData)) {
      NotificationManager.success("Usuario creado con éxito", "Éxito");
    } else {
      NotificationManager.error("Error al crear usuario", "Error");
    }
  };
  return (
    <>
      <div className='form-container sign-in-container'>
        <form onSubmit={handleSubmit}>
          <h1>Crear Usuario</h1>
          <label>Usuario: </label>
          <input type='text' name='userName' />
          <br />
          <label>Email: </label>
          <input type='email' name='email' />
          <br />
          <label>Contraseña: </label>
          <input type='password' name='password' />
          <br />

          <button type='submit'>Registrar</button>
        </form>
      </div>
      <NotificationContainer />
    </>
  );
};
export default CreateUser;
