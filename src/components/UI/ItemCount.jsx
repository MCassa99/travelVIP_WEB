import {useState} from 'react'

const itemCount = () => {
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