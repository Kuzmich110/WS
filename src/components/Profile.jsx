import React from "react";

export class Profile extends React.Component{

    constructor(){
        super();
        this.state = {
            userName: "empty"
        }
    }


    componentDidMount() {
        fetch("http://0994.vozhzhaev.ru/getUserJSON")
            .then(response=>response.text())
            .then(info=>{
               this.setState({
                   userName: info
               })
            });
    }
        render() {
        console.log("ШАГ1 Компонента отрисовывается");
        return <div className="row">
            <div className="col-2">
                <img width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRW6X2lldt_gy2tcbXCKBbKWNVBpH-f1Mcjsw&usqp=CAU" alt=""/>
            </div>
            <div className="col-10">
                <h1>{this.state.userName}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est in, molestiae. Architecto asperiores eaque, error impedit, ipsum libero magnam molestias nemo nobis quidem totam, vero. Aperiam officia omnis perspiciatis rem.</p>
            </div>
        </div>
    }
}