import {useEffect}from 'react'
import "./App.css"
import CustomHooksUsingArrays from './common/hooks/customArrHooks'


function App1() {
    const [username, setUsername, clearUsername, greetUser, showUsername] = CustomHooksUsingArrays('')
    const[email, setEmail, clearEmail, , showEmail] = CustomHooksUsingArrays('')
    const [password, setPassword, clearPassword, , ] = CustomHooksUsingArrays('')

    const handleOnSubmit = (e) =>{
      e.preventDefault()
      greetUser()
      showUsername()
      showEmail()
      clearUsername()
      clearEmail()
      clearPassword()
    }

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor='username'>Username</label>
        <input type='text' id="username" value={username} onChange={setUsername}/>
        <label htmlFor='username'>Email</label>
        <input type='text' id="email" value={email} onChange={setEmail}/>
        <label htmlFor='password'>Password</label>
        <input type='password' id="password" value={password} onChange={setPassword}/>
        <button type='submit' id='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App1