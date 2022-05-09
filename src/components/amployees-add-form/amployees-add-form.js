import { Component } from 'react';
import './amployees-add-form.css';

class AmployeesAddForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            salary: ""
        }
    }
    onValueChange = (e) =>{
        this.setState ({
          [e.target.name] : e.target.value
        })
    }


    onSubmitChange = (e) =>{
        e.preventDefault();
        if(this.state.name.length>2 && this.state.salary){
            this.props.onAdd(this.state.name, this.state.salary)
        }
        
    }
render (){
    return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form className="add-form d-flex"
            onSubmit={this.onSubmitChange}>
                <input name = "name"
                       type="text"
                       className="form-control new-post-label"
                       placeholder="Как его зовут" 
                       onChange={this.onValueChange}
                       value = {this.state.name}/>
                <input name = "salary"
                       type="text"
                       className="form-control new-post-label"
                       placeholder="З/П в $" 
                       onChange={this.onValueChange}
                       value = {this.state.salary}/>
                <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
    )
}
}
export default AmployeesAddForm;