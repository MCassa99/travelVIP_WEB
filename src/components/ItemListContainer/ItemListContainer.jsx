import React from 'react'

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <div className='d-flex align-items-center justify-content-center'>
                <h2 className='greeting'>{greeting}</h2>
            </div>
        </div>
    )
}

export default ItemListContainer
