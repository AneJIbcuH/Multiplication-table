import { useState } from "react"

function SignUp(props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password_confirmation, setPassword_confirmation] = useState('')
  const [signUpped, setSignUpped] = useState(false)

  const userData1 = {
    name: name,
    email: email,
    password: password,
    password_confirmation: password_confirmation,
  }

  const userData2 = {
    email: email,
    password: password
  }
  
  const authHeader = btoa("Dev:qdprivate")
  const headers = {
    Authorization: `Basic ${authHeader}` 
  }

  function signUp() {
    axios.post('https://internsapi.public.osora.ru/api/auth/signup', userData1, { headers })
    .then(response => {
      console.log(response.data)
      setName('')
      setEmail('')
      setPassword('')
      setPassword_confirmation('')
      setSignUpped(true)
    })
    .catch(error => {
      console.error(error)
    })
  }

  function logIn() {
    axios.post('https://internsapi.public.osora.ru/api/auth/login', userData2, { headers })
    .then(response => {
      localStorage.setItem('token', response.data.data.access_token)
      setEmail('')
      setPassword('')
      console.log(response.data.data.access_token)
    })
    .catch(error => {
      console.error(error)
    })
  }
  
  return (
    <div className="auth">

      {!signUpped &&

        <div className="signUp">
        <input type="text" placeholder="name" value={name} onChange={(event) => setName(event.target.value)}/>
        <input type="text" placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
        <input type="text" placeholder="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
        <input type="text" placeholder="password_confirmation" value={password_confirmation} onChange={(event) => setPassword_confirmation(event.target.value)}/>
        <button className="game_btn" onClick={signUp}>Зарегистрироваться</button>
      </div>
      }

      {signUpped &&

        <div className="login">
        <input type="text" placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
        <input type="text" placeholder="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
        <button className="game_btn" onClick={logIn}>Авторизоваться</button>
      </div>
      }
    </div>
    
  )
}

export default SignUp
