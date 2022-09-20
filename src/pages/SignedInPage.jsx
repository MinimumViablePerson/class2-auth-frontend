import React from 'react'

export function SignedInPage ({ currentUser, signOut }) {
  return (
    <div>
      <h1>Welcome back, {currentUser.email}!</h1>
      <button onClick={signOut}>SIGN OUT</button>
    </div>
  )
}
