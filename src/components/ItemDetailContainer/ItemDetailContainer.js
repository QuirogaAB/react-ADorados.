import './ItemDetailContainer.css'
import { useState, useEffect } from '../asyncMock.js'
import { getProductById } from '../ItemDetail'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState (null)

    useEffect(() => {
        getProductById('1')
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error (error)
            })

    },[])

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...product} />

        </div>
    )

}

export default ItemDetailContainer
