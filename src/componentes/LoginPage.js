import React from "react";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import "@fortawesome/fontawesome-free/css/all.min.css";
import GoogleLogin from "react-google-login";
import LoginFace from "../componentes/LoginFace";
import { useState, useEffect } from "react";
import { gapi } from "gapi-script";
import Swal from "sweetalert2";

function LoginPage() {
  const keyLogin =
    "889082775733-uft314q6mcdcam2in0dd7rd0nsq8uprc.apps.googleusercontent.com";
  const [user, setUser] = useState({});

  useEffect(() => {
    const start = () => {
      gapi.Auth2.init({
        clientId: keyLogin,
      });
    };
    gapi.load("client:auth2", start);
  }, []);

  const logeado_exito = (respuestaExitosa) => {
    console.log("LOGUEADO CON ÉXITO:", respuestaExitosa.profileObj);
    setUser(respuestaExitosa.profileObj);
    Swal.fire({
      icon: "success",
      title: "UTD Durango",
      text: "Logueado con éxito",
    });
  };
  const fallo_login = (res) => {
    console.log("FALLO EN EL ACCESO:", res.profileObj);
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Intenta de nuevo",
    });
  };

  return (
    <div className="contenedor">
      <form>
        <h2>¡Bienvenido!</h2>
        <fieldset>
          <legend>Inicio de Sesión</legend>
          <ul>
            <li>
              <label for="username">Correo:</label>
              <input type="text" id="username" required />
            </li>
            <li>
              <label for="password">Contraseña:</label>
              <input type="password" id="password" required />
            </li>
            <li>
              <i />
              <a onClick={() => this.changeView("PWReset")} href="#">
                ¿Olvidaste tu contraseña?
              </a>
            </li>
          </ul>
        </fieldset>
        <button className="btn" type="button">
          Ingresar
        </button>
        <br />
        <div className="btns-container">
          <GoogleLogin
            clientId={keyLogin}
            onSuccess={logeado_exito}
            onFailure={fallo_login}
            buttonText="Login with Google"
            cookiePolicy={"single_host_origin"}
          />
          <LoginFace />
          <button className="btn" type="button">
            Crear una Cuenta
          </button>
        </div>
      </form>

      <h2 className="titulo">CREDENCIALES DEL USUARIO</h2>
      <div class={user ? "profile" : "hidden"}>
        <img src={user.imageUrl} alt="" />
        <h3 className="parrafo">{user.name}</h3>
        <h3 className="parrafo">{user.email}</h3>
        <h3 className="parrafo">{user.googleId}</h3>
      </div>
    </div>
  );
}

export default LoginPage;