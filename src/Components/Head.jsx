import React, { useContext } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Context } from '../Context/BookContext'

const Head = () => {
  const context = useContext(Context)
  return (
    <>
        <section id='head'>
                <LinkContainer to={'/product'}>
                    <h3>Book List</h3>
                </LinkContainer>
                <LinkContainer to={'/basket'}>
                    <h3>My Basket ({context.myCard})</h3>
                </LinkContainer>
        </section>
    </>
  )
}

export default Head