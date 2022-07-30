import React from 'react';
import {default as axios} from "axios";
class Home extends React.Component {
    state = {
        person:null
    }
    //加载自动运行
    componentDidMount = () => {
        this.getExample()
    }
    getExample(){
        axios.get("http://localhost:5000/test").then((res) => {
            console.log(res)
            this.setState({person:res.data})
        })
    }
    render() {
        return <div>
        Home page
            <p>{this.state.person==null? "zheshi null":JSON.stringify(this.state.person)}</p>
        </div>
    }
}
export default Home;