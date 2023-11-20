import {useState} from 'react'

function Curtir() {
    const [valor, setValor] = useState(0);
    function somarMaisUm(){
        setValor(valor + 1)}
  return (
    <div className="rounded bg-violet-400 flex justify-evenly
    hover:bg-violet-800 text-white w-full py-2">
        <p>Curtidas: {valor}</p>
        <button onClick={somarMaisUm}>Curtir</button>
    </div>
  )
}

export default Curtir