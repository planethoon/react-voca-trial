import DayList from './component/DayList';
import Day from './component/Day';
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
            <Route path='/day/:key'>
              <Day />
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
      
