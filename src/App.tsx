import { useAppSelector} from './hook'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import { Routes, Route } from 'react-router-dom'

import { accessTokenApi } from './api/accessTokenApi'

import MusicPage from './Components/Pages/MusicPage/MusicPage'

import './App.sass'

function App() {
  const navigation = useNavigate()
  const {defaultAppPath, customAppPath} = useAppSelector(state => state.appPathSlice)

  const {data} = accessTokenApi.useGetAccessTokenQuery('/getAccessToken')

  const {token, tokenError} = useAppSelector(state => state.accessTokenSlice)

  useEffect((): void => {
    // customAppPath ? navigation(customAppPath) : navigation(defaultAppPath)

    // if (token && !tokenError){
    //   navigation(defaultAppPath)
    // }
    // if (tokenError){
    //   navigation('/errorPage')
    // }
    

  }, [token, tokenError])
  

  return (
    <Routes>
      <Route path='/music/*' element={<MusicPage />}/>
    </Routes>
  )
}

export default App
