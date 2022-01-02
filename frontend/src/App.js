import { createContext, useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'

import Welcome from './components/Welcome'
import FruitList from './components/FruitList'

import DocForLecturer from './components/TeacherPage/DocForLecturer'
import DocForLecNut from './components/TeacherPage/DocForLecNut'
import DocForLecYao from './components/TeacherPage/DocForLecYao'
import DocForLecSao from './components/TeacherPage/DocForLecSao'
import DocForLecWir from './components/TeacherPage/DocForLecWir'
import DocForLecTana from './components/TeacherPage/DocForLecTana'
import DocForLecSong from './components/TeacherPage/DocForLecSong'
import DocForLecOnj from './components/TeacherPage/DocForLecOnj'
import DocForLecDen from './components/TeacherPage/DocForLecDen'
import DocForLecPak from './components/TeacherPage/DocForLecPak'
import DocForLecMon from './components/TeacherPage/DocForLecMon'
import DocForLecPok from './components/TeacherPage/DocForLecPok'
import DocForLecVor from './components/TeacherPage/DocForLecVor'
import DocForLecKrit from './components/TeacherPage/DocForLecKrit'
import DocForLecWpa from './components/TeacherPage/DocForLecWpa'
import DocForLecKasi from './components/TeacherPage/DocForLecKasi'
import DocForLecWila from './components/TeacherPage/DocForLecWila'
import DocForLecParpha from './components/TeacherPage/DocForLecParpha'
import DocForLecWani from './components/TeacherPage/DocForLecWani'
import DocForLecNucha from './components/TeacherPage/DocForLecNucha'
import DocForLecSiri from './components/TeacherPage/DocForLecSiri'
import DocForLecLumpa from './components/TeacherPage/DocForLecLumpa'
import DocForLecThapa from './components/TeacherPage/DocForLecThapa'
import DocForLecNuji from './components/TeacherPage/DocForLecNuji'
import DocForLecWasit from './components/TeacherPage/DocForLecWasit'

import DocGeneral from './components/DocGeneral'
import DocPersonal from './components/DocPersonal'
import DocHead from './components/DocHead'
import DocProject from './components/DocProject'
import DocOut from './components/DocOut'

import AddFruit from './components/AddFruit'
import EditFruit from './components/EditFruit'
import EditTeacher from './components/EditTeacher'

import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Profile from './components/auth/Profile'
import Switch from 'react-bootstrap/esm/Switch'

export const UserContext = createContext()

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  })

  useEffect(() => {
    const isLoggedIn = async () => {
      let token = localStorage.getItem("auth-token")
      if (token == null){
        localStorage.setItem("auth-token", "")
        token = ""
      }

      const tokenResponse = await axios.post(
        '/api/users/tokenIsValid', 
        null, 
        {headers: {"auth-token": token}}
      )

      console.log(tokenResponse.data)
      if(tokenResponse.data){
        const userResponse = await axios.get('/api/users/profile',
          {headers: {'auth-token': token}}
        )
        setUserData({
          token: token,
          user: userResponse.data
        })
      }
    }
    isLoggedIn()
  }, [])

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <Router>
        <Switch>        
            <Route path='/' exact component={Login} />
            <Route path='/fruitlist' component={FruitList} />

            <Route path='/doc-for-lec' component={DocForLecturer} />
            <Route path='/doc-for-lec-nut' component={DocForLecNut} />
            <Route path='/doc-for-lec-yao' component={DocForLecYao} />
            <Route path='/doc-for-lec-sao' component={DocForLecSao} />
            <Route path='/doc-for-lec-wir' component={DocForLecWir} />
            <Route path='/doc-for-lec-tana' component={DocForLecTana} />
            <Route path='/doc-for-lec-song' component={DocForLecSong} />
            <Route path='/doc-for-lec-onj' component={DocForLecOnj} />
            <Route path='/doc-for-lec-den' component={DocForLecDen} />
            <Route path='/doc-for-lec-pak' component={DocForLecPak} />
            <Route path='/doc-for-lec-mon' component={DocForLecMon} />
            <Route path='/doc-for-lec-pok' component={DocForLecPok} />
            <Route path='/doc-for-lec-vor' component={DocForLecVor} />
            <Route path='/doc-for-lec-krit' component={DocForLecKrit} />
            <Route path='/doc-for-lec-Wpa' component={DocForLecWpa} />
            <Route path='/doc-for-lec-kasi' component={DocForLecKasi} />
            <Route path='/doc-for-lec-wila' component={DocForLecWila} />
            <Route path='/doc-for-lec-parpha' component={DocForLecParpha} />
            <Route path='/doc-for-lec-wani' component={DocForLecWani} />
            <Route path='/doc-for-lec-nucha' component={DocForLecNucha} />
            <Route path='/doc-for-lec-siri' component={DocForLecSiri} />
            <Route path='/doc-for-lec-lumpa' component={DocForLecLumpa} />
            <Route path='/doc-for-lec-thapa' component={DocForLecThapa} />
            <Route path='/doc-for-lec-nuji' component={DocForLecNuji} />
            <Route path='/doc-for-lec-wasit' component={DocForLecWasit} />

            <Route path='/doc-general' component={DocGeneral} />
            <Route path='/doc-personal' component={DocPersonal} />
            <Route path='/doc-head' component={DocHead} />
            <Route path='/doc-project' component={DocProject} />
            <Route path='/doc-out' component={DocOut} />
            <Route path='/addfruit' component={AddFruit} />
            <Route path='/fruit/:id' component={EditFruit} />
            <Route path='/edit-teacher' component={EditTeacher} />
            <Route path='/register' component={Register} />
            <Route path='/welcome' component={Welcome} />
            <Route path='/profile' component={Profile} />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
