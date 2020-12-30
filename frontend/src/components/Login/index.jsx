import { ContainerCSS } from './styles';

const Login = () => {
  return(
    <ContainerCSS>
      <form action="">
        <label htmlFor="email">Correo:</label>
        <input type="text" name="email" id="email" />
        <label htmlFor="password">Contraseña:</label>
        <input type="text" name="password" id="password"/>
        <input type="submit" value="Entrar" />
      </form>
    </ContainerCSS>
  );
}

export default Login;