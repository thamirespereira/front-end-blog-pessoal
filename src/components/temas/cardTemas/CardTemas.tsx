import { Link } from 'react-router-dom'
import Tema from '../../../models/Tema'

interface CardTemasProps {
    tema: Tema
}

function CardTemas({ tema }: CardTemasProps) {
    return (
        <div className='border border-slate-300 flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-gradient-to-r from-cyan-300 to-violet-300 text-white font-bold text-2xl'>
                Tema
            </header>

            <p className='p-8 text-3xl bg-slate-100 h-full'>
                {tema.descricao}
            </p>

            <div className="flex">
                <Link to={`/editarTema/${tema.id}`}
                    className='w-full text-slate-100 bg-cyan-300 hover:bg-cyan-800 
                        flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>

                <Link to={`/deletarTema/${tema.id}`}
                    className='text-slate-100 bg-rose-500 hover:bg-rose-800 w-full 
                        flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>

        </div>
    )
}

export default CardTemas