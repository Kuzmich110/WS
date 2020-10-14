import React from 'react';
import logo from './logo.svg';
import './App.css';
import  {BrowserRouter, NavLink, Route} from "react-router-dom";

const Menu = ()=>{
    return <ul>
        <li><NavLink className="nav-link" to="/profile">Профиль</NavLink></li>
        <li><NavLink className="nav-link" to="/settings">Настройки</NavLink></li>
        <li><NavLink className="nav-link" to="/user">Пользователи</NavLink></li>
    </ul>
}

const Profile = ()=>{
    return <div className="row">
        <div className="col-2">
            <img width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRW6X2lldt_gy2tcbXCKBbKWNVBpH-f1Mcjsw&usqp=CAU" alt=""/>
        </div>
        <div className="col-10">
            <h1>Иванов Иван</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est in, molestiae. Architecto asperiores eaque, error impedit, ipsum libero magnam molestias nemo nobis quidem totam, vero. Aperiam officia omnis perspiciatis rem.</p>
            </div>
        </div>
}

 const Settings =()=>{
    return <div className="col-10">
                <p>Имя: Иван</p>
                <p>Фамилия: Иванов</p>
                <p>Email: ivan@yandex.ru</p>
                <p>ID: 5</p>
            </div>
 }

 const User =()=>{
    return <div>
                <table className="table">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Имя</th>
                        <th scope="col">Фамилия</th>
                        <th scope="col">Email</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                    </tbody>
                </table>
            </div>
 }

function App() {
  return (
      <div className="container-fluid">
        <BrowserRouter>
        <div className="row">
            <div className="col-2">
             <Menu/>
            </div>
            <div className="col-9">
              <Route path="/profile" render={()=>{return <Profile/>}}/>
              <Route path="/settings" render={()=>{return <Settings/>}}/>
              <Route path="/user" render={()=>{return <User/>}}/>
          </div>
        </div>
        </BrowserRouter>
      </div>
  );
}
export default App;
