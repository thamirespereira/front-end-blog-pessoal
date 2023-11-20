import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem'
import Curtir from '../../curtir/Curtir'

interface CardPostagensProps {
    post: Postagem
}

function CardPostagens({ post }: CardPostagensProps) {
    return (
        <div className='border-slate-300 border 
            flex flex-col rounded overflow-hidden justify-between'>

            <div>
                <div className="flex w-full bg-gradient-to-r from-cyan-300 to-violet-300 py-2 px-4 items-center gap-4">
                    <img src={post.usuario?.foto} className='h-12 rounded-full' 
                        alt="Imagem do Usuário" />
                    <h3 className='text-lg font-bold text-center uppercase'>{post.usuario?.nome}</h3>
                </div>
                <div className='p-4'>
                    <h4 className='text-lg font-semibold uppercase'>{post.titulo}</h4>
                    <p>{post.texto}</p>
                    <p>Tema: {post.tema?.descricao}</p>
                    <p>Data: {new Intl.DateTimeFormat(undefined, {
                        dateStyle: 'full',
                        timeStyle: 'medium',
                    }).format(new Date(post.data))}</p>
                </div>
            </div>
            <div className="flex">
                <Curtir />
                <Link to={`/editarPostagem/${post.id}`} className='w-full text-white bg-cyan-300 
                    hover:bg-cyan-800 flex items-center justify-center py-2 rounded'>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletarPostagem/${post.id}`} className='text-white bg-rose-500 
                    hover:bg-rose-800 w-full flex items-center justify-center rounded'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardPostagens