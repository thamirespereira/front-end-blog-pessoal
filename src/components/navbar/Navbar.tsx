import { ReactNode, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { AuthContext } from '../../contexts/AuthContext'

function Navbar() {

    const navigate = useNavigate()
    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        alert('Usuário deslogado com sucesso')
        navigate('/login')
    }

    let component: ReactNode

    if (usuario.token !== "") {

        component = (
            <div className="flex justify-between text-lg bg-gradient-to-r from-cyan-600 to-violet-600 bg-auto">
                <Link to='/home' className='text-2xl font-bold text-white px-5 '>Blog Pessoal</Link>

                <div className='flex gap-4 text-white px-5'>
                    <Link to='/postagens' className='p-2 pl-5 pr-5 transition-colors duration-700 transform 
                     hover:bg-blue-600 text-gray-100 text-lg'>Postagens</Link>
                    <Link to='/temas' className='p-2 pl-5 pr-5 transition-colors duration-700 transform 
                     hover:bg-blue-600 text-gray-100 text-lg '>Temas</Link>
                    <Link to='/cadastroTema' className='p-2 pl-5 pr-5 transition-colors duration-700 transform 
                     hover:bg-blue-600 text-gray-100 text-lg'>Cadastrar Tema</Link>
                    <Link to='/perfil' className='p-2 pl-5 pr-5 transition-colors duration-700 transform 
                     hover:bg-blue-600 text-gray-100 text-lg'>Perfil</Link>
                    <Link to='' onClick={logout} className='p-2 pl-5 pr-5 transition-colors duration-700 transform 
                     hover:bg-blue-600 text-gray-100 text-lg'>Sair</Link>
                </div>
            </div>
        )
    }
    return (
        <>
            { component }
        </>
    )

    }

export default Navbar

