import { useState } from "react"

function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password_confirmation, setPassword_confirmation] = useState('')

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
  // const headers = {
  //   Authorization: `Basic ${authHeader}` 
  // }

  const access_token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNmE1NzNkMGI1YmIxODBkNGRjYzZiNDM2Yjg4NzRlZTE1ZTkxMDVmYzAxYjhhZmQzNTE5N2M1ZjliNzMwNDg0MjU3ZTdhZGQ3Y2U4NTViZGMiLCJpYXQiOjE2OTE5MjQxOTcsIm5iZiI6MTY5MTkyNDE5NywiZXhwIjoxNzIzNTQ2NTk3LCJzdWIiOiI0ODIiLCJzY29wZXMiOltdfQ.3NpnBaumA7SpOHrantdB_g7Emj0D9Ot-qlWanmpIVcuoPzqkEJJ_ud2ZfUMgrf9IFX3pCd2JhPMUQmkRClaYMn9BtFpJnM24PE1kQb1NrBIH8cacWLrIRGGtcUDdHwyUxOVmCwmY8eZTx4r6yCyXf_cc3rHRWGo6fChtMB-3wtWgWYkt7SoX2NQyKYHO9LZFQa47yLimZ23oZzMO029MgVdr5-IoXkA11UkbfjZ-6W4OHqi4QYCi5gfcXEcr5pvSr26FNYu6MPyr0ky7e8BvyFXdKTD_47l4vbYct3kIKhg41mNo-RxzIzE-J037I6PCixcJQUqvoiBOTkBE7qD-PNgC4PHIUDY7TegzC4B25pm2BQRTzDHGPuO18jpCFM6Msz2NPIk2aYxruAxfhDrV6wFz98WQ9B3HLJXeYuXiOPSzEdma8JTfoA2VsIijelz1UkUbhcOYPcgziposGjjGaB8C6EIp4Nc0zwrgEkxq0jwV70jwclFdMAZPWPnIHAvCwxrXYME8IbOcPyYzhDiJQ-Jai8_MzgaD5x4xm0yxxJ57gVVjpZVkWm_GBMLIAHyYyh5D9WnYJhxuJU1WAOYjC7EfRd-5gj_U5nIWCAenwrTc4pD4O412bLBe04Mpvq_x8x9EFrUU3iPLXGa0K9iP4-ssaZQKnG6Yq0RE5wftiWY"
  const authHeader1 = btoa('Bearer:eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNmE1NzNkMGI1YmIxODBkNGRjYzZiNDM2Yjg4NzRlZTE1ZTkxMDVmYzAxYjhhZmQzNTE5N2M1ZjliNzMwNDg0MjU3ZTdhZGQ3Y2U4NTViZGMiLCJpYXQiOjE2OTE5MjQxOTcsIm5iZiI6MTY5MTkyNDE5NywiZXhwIjoxNzIzNTQ2NTk3LCJzdWIiOiI0ODIiLCJzY29wZXMiOltdfQ.3NpnBaumA7SpOHrantdB_g7Emj0D9Ot-qlWanmpIVcuoPzqkEJJ_ud2ZfUMgrf9IFX3pCd2JhPMUQmkRClaYMn9BtFpJnM24PE1kQb1NrBIH8cacWLrIRGGtcUDdHwyUxOVmCwmY8eZTx4r6yCyXf_cc3rHRWGo6fChtMB-3wtWgWYkt7SoX2NQyKYHO9LZFQa47yLimZ23oZzMO029MgVdr5-IoXkA11UkbfjZ-6W4OHqi4QYCi5gfcXEcr5pvSr26FNYu6MPyr0ky7e8BvyFXdKTD_47l4vbYct3kIKhg41mNo-RxzIzE-J037I6PCixcJQUqvoiBOTkBE7qD-PNgC4PHIUDY7TegzC4B25pm2BQRTzDHGPuO18jpCFM6Msz2NPIk2aYxruAxfhDrV6wFz98WQ9B3HLJXeYuXiOPSzEdma8JTfoA2VsIijelz1UkUbhcOYPcgziposGjjGaB8C6EIp4Nc0zwrgEkxq0jwV70jwclFdMAZPWPnIHAvCwxrXYME8IbOcPyYzhDiJQ-Jai8_MzgaD5x4xm0yxxJ57gVVjpZVkWm_GBMLIAHyYyh5D9WnYJhxuJU1WAOYjC7EfRd-5gj_U5nIWCAenwrTc4pD4O412bLBe04Mpvq_x8x9EFrUU3iPLXGa0K9iP4-ssaZQKnG6Yq0RE5wftiWY')
  const headers1 = {
    Authorization: `Bearer ${access_token}`
    // Authorization: `Basic ${authHeader}`,
    // X-Access-Token: Bearer access_token //Без фигурных скобок
  }


  const data2 = {
    'type_hard': 'Integer',
    'type': 1
  }

  // axios.post('https://internsapi.public.osora.ru/api/game/play', params, { headers1 })
  //   .then(response => {
  //     console.log(response.data)
  //   })
  //   .catch(error => {
  //     console.error(error)
  //   })

    // const access_token = 'your_access_token'; // Замените на свой access_token
    const headers = {
      'X-Access-Token': `Bearer ${access_token}`
    };
    const data1 = {
      type_hard: 1,
      type: 1
    };

    axios.post('https://internsapi.public.osora.ru/api/game/play', data1, { headers })
    .then(response => {
      // Обработка успешного ответа
      console.log(response.data);
    })
    .catch(error => {
      // Обработка ошибки
      console.error(error);
    });
    
    // axios.post('https://internsapi.public.osora.ru/api/game/play', { headers, params: data2 })
    //   .then(response => {
    //     // Обработка успешного ответа
    //     console.log(response.data);
    //   })
    //   .catch(error => {
    //     // Обработка ошибки
    //     console.error(error);
    //   });

  // axios.post('https://internsapi.public.osora.ru/api/auth/signup', userData1, { headers })
  //   .then(response => {
  //     console.log(response.data)
  //   })
  //   .catch(error => {
  //     console.error(error)
  //   })

  // axios.post('https://internsapi.public.osora.ru/api/auth/login', userData2, { headers })
  //   .then(response => {
  //     console.log(response.data)
  //   })
  //   .catch(error => {
  //     console.error(error)
  //   })

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
