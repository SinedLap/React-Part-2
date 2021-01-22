import React, { useState, useEffect } from 'react'
import Card from './card'
import { url } from './constants'

const List = ({ modalToggle }) => {
  const [posts, setPosts] = useState([])
  const [fetchError, setFetchError] = useState(false)

  useEffect(() => {
    fetch(url)
      .then(res => res.status < 300 ? res.json() : Promise.reject(`Ошибка подключения, статус: ${res.status}`))
      .then(posts => setPosts(posts))
      .catch(err => {
        console.log(err)
        setFetchError(true)
      })
  }, [])

  return !fetchError ? (
    <div className='posts'>
      {!posts.length ? <h1>loading...</h1> : (
        <>
          {posts.map(item => (
            <Card key={item.id}
                  id={item.id}  
                  title={item.title} 
                  body={item.body}
                  modalToggle={modalToggle}
            />
          ))}
        </>
      )}
    </div>
   ) : <><h1>При загрузке возникла ошибка :(</h1></>
}

export default List