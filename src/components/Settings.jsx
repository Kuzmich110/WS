import React from "react";

export class Settings extends React.Component{

    componentDidMount() {

    }

    render(){
        return <div className="col-10">
            <p>Имя: Иван</p>
            <p>Фамилия: Иванов</p>
            <p>Email: ivan@yandex.ru</p>
            <p>ID: 5</p>
        </div>
    }
}