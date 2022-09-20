import React, { useEffect, useState } from 'react'
import { SignedInPage } from './pages/SignedInPage'
import { SignedOutPage } from './pages/SignedOutPage'
import './App.css'

export default function App () {
  const [currentUser, setCurrentUser] = useState(null)

  function signIn (data) {
    setCurrentUser(data.user)
    localStorage.token = data.token
  }

  function signOut () {
    setCurrentUser(null)
    localStorage.removeItem('token')
  }

  useEffect(() => {
    if (localStorage.token) {
      fetch('http://localhost:5678/validate', {
        headers: {
          Authorization: localStorage.token
        }
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.error) {
            alert(data.error)
          } else {
            signIn(data)
          }
        })
    }
  }, [])

  return (
    <div className='App'>
      {currentUser ? (
        <SignedInPage currentUser={currentUser} signOut={signOut} />
      ) : (
        <SignedOutPage signIn={signIn} />
      )}
    </div>
  )
}
