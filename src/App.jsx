import React from 'react'
import ToDo from './components/ToDo'
import ToDoItems from './components/ToDoItems'

const App = () => {
  return (
    <div className='bg-stone-900 grid py-4 min-h-screen overflow-hidden'>
      <ToDo/>
    </div>
  )
}

export default App
