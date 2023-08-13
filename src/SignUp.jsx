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

  // // axios.post("https://internsapi.public.osora.ru/api/auth/signup", {
  // //   firstName: 'Fred',
  // //   lastName: 'Flintstone'
  // // })
  // // .then(function (response) {
  // //   console.log(response);
  // // })
  // // .catch(function (error) {
  // //   console.log(error);
  // // });

  // async function sendPostRequest(login, file) {
  //   const url = "https://apiinterns.osora.ru"
  
  //   const formData = new FormData()
  //   formData.append("login", login)
  //   formData.append("file", file)
  
  //   const authHeader = btoa("Dev:qdprivate") // for code to Base64 login and password
  
  //   const requestOptions = {
  //     method: "POST",
  //     headers: {
  //       Authorization: `Basic ${authHeader}`,
  //     },
  //     body: formData,
  //   }
  
  //   try {
  //     const response = await fetch(url, requestOptions)
  //     if (response.ok) {
         
  //       let result = await response.json()
                
  //       console.log(result)  
        
  //     } else {
  //       console.error("Get some error", response.status, response.statusText)
  //     }
  //   } catch (error) {
  //     console.error("Ne rabotaet: ", error)
  //   }
  // }

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