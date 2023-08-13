function SignUp() {

  const userData1 = {
    name: 'Mikhail',
    email: 'tosibose@yandex.ru',
    password: '123q',
    password_confirmation: '123q',
  }

  const userData2 = {
    email: 'tosibose@yandex.ru',
    password: '123q'
  }
  
  // const headers = {
  //   Authorization: 'Basic ' + btoa('Dev:qdprivate'),
  // }

  const authHeader = btoa("Dev:qdprivate") // for code to Base64 login and password
  const headers = {
    Authorization: `Basic ${authHeader}`
  }
  
  axios.post('https://internsapi.public.osora.ru/api/auth/signup', userData1, { headers })
    .then(response => {
      console.log(response.data)
    //   axios.post('https://internsapi.public.osora.ru/api/auth/signup', userData2, { headers })
    // .then(response => {
    //   console.log(response.data)
    // })
    // .catch(error => {
    //   console.error(error)
    // })
    })
    .catch(error => {
      console.error(error)
    })

  axios.post('https://internsapi.public.osora.ru/api/auth/login', userData2, { headers })
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {
      console.error(error)
    })

  return (
    <div className="signUp">
      <input type="text" placeholder="name"/>
      <input type="text" placeholder="email"/>
      <input type="text" placeholder="password"/>
      <input type="text" placeholder="password_confirmation"/>
      <button>Авторизоваться</button>
      <p>Вывод</p>
    </div>
  )
}

export default SignUp
