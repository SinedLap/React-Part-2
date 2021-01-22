import React from 'react';
import './App.css';
import List from './components/list'
import Modal from './components/modal';
import useModal from './components/useModal';

const App = () => {
  const { modal, toggle } = useModal()
  
  return(
    <>       
      <Modal
        isOpen={modal.isOpen}
        title={modal.content.title}
        body={modal.content.body}
        hide={toggle}
      />
      <List modalToggle={toggle}/> 
    </>
  )
}
export default App;
