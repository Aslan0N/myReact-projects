import React, { useContext } from 'react'
import { Context } from '../Context/BookContext'

const Basket = () => {

    const context = useContext(Context)
   
    
  return (
    <>
    {
       
        context.state.card.map(item=>{
            return (
                <div className='book-card' key={item.id}>
                        <img src={item.image} alt="" />
                        <div className="card-body">
                            <h5>{item.name}</h5>
                            <h6>Müəllif: {item.author}</h6>
                            <p>Ümumi qiymət: ₼ {item.count*item.price}</p>
                            <span>Say:{item.count}</span>
                        </div>
                        
                </div>
                
            )
        })

    }
    </>
  )
}

export default Basket