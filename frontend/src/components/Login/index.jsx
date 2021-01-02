import { useRouter } from 'next/router'
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../graphql'
import { ContainerCSS } from './styles';

const Login = () => {
  const router = useRouter();
  const [login] = useMutation(LOGIN);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: e.target.email.value,
      password: e.target.password.value
    }
    login({ variables: data })
      .then((res) => {
        localStorage.setItem('token', res.data.login.access_token);
        document.cookie = `user=${JSON.stringify(res.data.login)}`;
        router.push('/dashboard');
      })
      .catch();
  }
  
  return(
    <ContainerCSS>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Correo:</label>
        <input type="text" name="email" id="email" />
        <label htmlFor="password">Contraseña:</label>
        <input type="password" name="password" id="password"/>
        <input type="submit" value="Entrar" />
      </form>
    </ContainerCSS>
  );
}

export default Login;