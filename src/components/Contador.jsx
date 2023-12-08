import {useState} from 'react'

const Contador = () => {
    const[contador, setContador] = useState(0)

    const handleClick = (o) =>{
        if (o){
            contador.current++
        } else {
            contador.current--
        }
    }

    return (
        <div>
            
        </div>
    )
}

export default Contador