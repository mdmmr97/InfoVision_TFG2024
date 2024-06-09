import './App.css'
import { Route, Switch} from 'wouter'
import React, { Suspense } from 'react';

import Cabecera  from './Componentes/Cabecera/Cabecera'

const Home = React.lazy( () => import('./Paginas/Home'));
const Login = React.lazy( () => import('./Paginas/Login'));
const Registrar = React.lazy( () => import('./Paginas/Registrar'));
const User = React.lazy( () => import('./Paginas/User'));

const Years = React.lazy( () => import('./Paginas/Years'));
const Year_Details = React.lazy( () => import('./Paginas/Year_Details'));

const Countries = React.lazy( () => import('./Paginas/Countries'));
const Country_Details = React.lazy( () => import('./Paginas/Country_Details'));

const Songs = React.lazy( () => import('./Paginas/Songs'));
const Song_Details = React.lazy( () => import('./Paginas/Song_Details'));

//const PiePagina = React.lazy( () => import('../Componentes/PiePagina/PiePagina'));


function App() {
  return (
    <>
      <header>
        <Cabecera></Cabecera>
      </header>
      <Suspense>
      <Switch>
        
        <Route path="/" component={Home}/>
        <Route path="/login" component={Login}/> 
        <Route path="/registrar" component={Registrar}/>
        <Route path="/user" component={User}/>

        <Route path="/years" component={Years}/>
        <Route path="/years/:year" component={Year_Details}/>

        <Route path="/countries" component={Countries}/>
        <Route path="/countries/:country" component={Country_Details}/>
        
        <Route path="/songs" component={Songs}/>
        <Route path="/songs/:song" component={Song_Details}/>
        
      </Switch>
      <footer>
        {/* <PiePagina /> */}
      </footer>
      </Suspense>
    </>
  )
}
export default App;