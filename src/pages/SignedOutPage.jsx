import React from 'react'

export function SignedOutPage ({ signIn }) {
  return (
    <div>
      <h1>Welcome</h1>
      <h2>Sign in or create a new account!</h2>

      <form
        onSubmit={e => {
          e.preventDefault()
          fetch('http://localhost:5678/sign-up', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: e.target.email.value,
              password: e.target.password.value
            })
          })
            .then(resp => resp.json())
            .then(data => {
              if (data.error) {
                alert(data.error)
              } else {
                // data = { user, token }
                signIn(data)
              }
            })
        }}
      >
        <h2>Sign up</h2>
        <label>
          Email:
          <input type='email' name='email' required />
        </label>
        <label>
          Password:
          <input type='password' name='password' required />
        </label>
        <button>SIGN UP</button>
      </form>

      <form
        onSubmit={e => {
          e.preventDefault()
          fetch('http://localhost:5678/sign-in', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: e.target.email.value,
              password: e.target.password.value
            })
          })
            .then(resp => resp.json())
            .then(data => {
              if (data.error) {
                alert(data.error)
              } else {
                signIn(data)
              }
            })
        }}
      >
        <h2>Sign in</h2>
        <label>
          Email:
          <input type='email' name='email' required />
        </label>
        <label>
          Password:
          <input type='password' name='password' required />
        </label>
        <button>SIGN IN</button>
      </form>
    </div>
  )
}
