import React, { useEffect } from 'react'
import useFetch from '../../../hooks/useFetch'
import CardProducts from '../cardProducts/CardProducts'
import { useNavigate } from 'react-router-dom'

const SimilarProducts = ({ product }) => {

    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${product?.categoryId}`

    const [filterProducts, getProductByCategory] = useFetch(url)

    useEffect(() => {
        if (product) {
            getProductByCategory()
        }
    }, [product])





    return (
        <section>
            <h2 style={{color:"var(--redMain)", marginLeft:80 }}>Discover Similar Products</h2>
            <div className='products__container'>
                {
                    filterProducts?.map(prod => {
                        if(product.id !== prod.id){
                            return (
                                <CardProducts
                                    key={prod.id}
                                    product={prod}
                                />
                            )
                        }
                    })
                }
            </div>

        </section>


    )
}

export default SimilarProducts