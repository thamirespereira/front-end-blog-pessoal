import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import UsuarioLogin from '../../models/UsuarioLogin';
import { RotatingLines } from 'react-loader-spinner';

function Login() {

    const navigate = useNavigate();
    const { usuario, handleLogin, isLoading } = useContext(AuthContext);

    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
        {} as UsuarioLogin
    );

    useEffect(() => {
        if (usuario.token !== "") {
            navigate('/home')
        }
    }, [usuario])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value
        })
    }

    function login(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        handleLogin(usuarioLogin)
    }

        return (
        <>
            <div className="grid grid-cols-1 h-screen place-items-center font-bold bg-gradient-to-r from-cyan-500 to-violet-500">
                <form className="flex justify-center items-center flex-col w-1/2 gap-4 max-w-sm m-4 p-10 
                                bg-white bg-opacity-25 rounded shadow-xl" 
                    onSubmit={login}>
                    <h2 className="text-white-600 text-5xl font-sans">Entrar</h2>
                    <div className="flex flex-col w-full">
                        <label htmlFor="usuario font-sans">Usuário</label>
                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            placeholder="Digite seu email"
                            className="border-2 bg-white rounded p-2 "
                            value={usuarioLogin.usuario}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="senha font-sans">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="Digite sua senha"
                            className="border-2 bg-white rounded p-2"
                            value={usuarioLogin.senha} 
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
            
                    </div>
                    <button
                        type='submit'
                        className="rounded bg-violet-500 flex justify-center
                                   hover:bg-violet-800 text-white w-1/2 py-2">
                        {isLoading ? <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                            <span>Entrar</span>}
                    </button>

                    <hr className="border-slate-800 w-full" />

                    <p>
                        Ainda não tem uma conta?{' '}
                        <Link to="/cadastro" className="gray-500 hover:text-red-400">
                            Cadastre-se
                        </Link>
                    </p>
                </form>
                <div className="fundoLogin hidden lg:block"></div>
            </div>
        </>
    );
}

export default Login;