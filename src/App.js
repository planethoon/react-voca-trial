import DayList from './component/DayList';
import Day from './component/Day';
import CreateWord from './component/CreateWord';
import CreateDay from './component/CreateDay';
import Header from './component/Header';
import EmptyPage from './component/EmptyPage'
import {BrowserRouter, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Switch>
            <Route exact path='/'>
              <DayList />
            </Route>
            <Route path='/day/:day'>
              <Day />
            </Route>
            <Route path='/create_word'>
              <CreateWord />
            </Route>
            <Route path='/create_day'>
              <CreateDay />
            </Route>
            <Route>
              <EmptyPage />
            </Route>
          </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
      
