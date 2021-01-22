import { useEffect, useState } from 'react';
import { url } from './constants';

const useModal = () => {
  const [modal, setModal] = useState({
    isOpen: false,
    content: {}
  })
  
  const [postId, setPostId] = useState()

  useEffect(() => {
    if (postId) fetch(`${url}/${postId.id}`)
                  .then(res => res.status < 300 ? res.json() : Promise.reject(`Ошибка подключения, статус: ${res.status}`))
                  .then(json => setModal({isOpen: true, content: json}))
                  .catch(err => {
                    console.log(err)
                    setModal({isOpen: true, content: { 
                          title: 'Ошибка при загрузке', 
                          body: 'Закройте окно и попробуйте снова'
                        }
                      })
                  })
  }, [postId])

  const toggle = (id) => {
    modal.isOpen ? setModal({isOpen: false, content: { title: '', body: ''}}) : setPostId({id})
  }

  return {
    modal,
    toggle
  }
};

export default useModal