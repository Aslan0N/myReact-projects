import React, { useContext } from 'react'
import { Context } from '../Context/BookContext'
import { ToastContainer } from 'react-toastify'

const Products = () => {
    const {state, addToCart} = useContext(Context)
   
    const myCon = useContext(Context)
    console.log(myCon);
    <ToastContainer />
    
    
  return (
    
    <>
        {
            state.bookList.map((item)=>{
                return (<div className='book-card' key={item.id}>
                        <img src={item.image} alt="" />
                        <div className="card-body">
                            <h5>{item.name}</h5>
                            <h6>Müəllif: {item.author}</h6>
                            <p>Qiymət: ₼ {item.price}</p>
                            <button onClick={()=> addToCart(item)}>Add to Basket</button>
                        </div>
                </div>)
            })
        }
    </>
  )
}

export default Products