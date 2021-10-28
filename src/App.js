import 'bootstrap/dist/css/bootstrap.min.css'
import ChoosePj from './Component/ChoosePj/ChoosePj';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddContextProvider from './context/addContext';
import Myteam from './Component/MyTeamContainer/MyteamContainer';
import MyTeamContainer from './Component/MyTeamContainer/MyteamContainer';




function App() {


  return (
    <>
      <AddContextProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <ChoosePj/>
            </Route>            

            <Route exact path="/my-team">
              <MyTeamContainer/>
            </Route>            
          </Switch>  
        </BrowserRouter>
      </AddContextProvider>
    </>
  )
}

export default App;
