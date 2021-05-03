import React,{Component} from 'react';
import Validation from './Validation/Validation'
import Char from "./char";
class App extends Component{
    
    state={
        Username:''
    }
    eventhandler=(event)=>{
        this.setState({Username: event.target.value});
    }

    deletechar=(index)=>{
        const text=this.state.Username.split('');
        text.splice(index,1);
        let upText=text.join('');
        this.setState({Username:upText});
    }
    render() {
        let  charList= this.state.Username.split('').map((ch,index)=>{
            return<Char 
            character={ch} 
            key={index}
            clicked={()=>this.deletechar(index)}/>;
        });
        return(
            <div>
            <input type='text' onChange={this.eventhandler}  />
            <p>{this.state.Username}</p>
            <Validation len={this.state.Username.length}></Validation>
            {charList}
            </div>
        );
    }
}

export default App;