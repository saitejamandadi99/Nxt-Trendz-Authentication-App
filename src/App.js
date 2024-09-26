import {Switch, Route} from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import NotFound from './components/NotFound'

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
