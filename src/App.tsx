import React from 'react'
import EALoginPage from './components/EALoginPage'

function App() {
  console.log('App component rendered')
  
  return (
    <div className="min-h-screen  bg-gradient-to-b from-slate-800 to-slate-800">
      <EALoginPage />
    </div>
  )
}

export default App