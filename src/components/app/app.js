import { Component } from 'react';

import './app.css';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import AmployeesList from '../amloyees-list/amployees-list';
import AmployeesAddForm from '../amployees-add-form/amployees-add-form';

class App extends Component{
    constructor(props){
        super(props);
        this.state = { 
            data : [
            {name: "John S."  , salary: 1000, increase : false, rise: false, id : 1 },
            {name: "Alex D."  , salary:3000, increase : false, rise: false, id : 2 },
            {name: "Ann K."  , salary: 5000, increase : false, rise: false, id : 3 },
        ],
            term:'',
            filter: 'all'

    }

    }

    deleteItem = ((id) =>{
        this.setState(({data}) =>{
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    })

    addItem = ((name,salary) =>{
        const newEmployee = {name: name  , salary: salary, increase : false, rise: false, id : this.state.data.length + 1}
        this.setState(({data}) =>{
          const  newArr = [...data, newEmployee];
            return{
                data: newArr
            }
        })  
    })

    onToggleIncrease = (id) =>{

      this.setState (({data}) =>({
            data: data.map(item => {
                if(item.id === id){
                    return{...item, increase: !item.increase}
                }
                return item;
            })
      }))
    }
    onToggleRise= (id) =>{
        this.setState (({data}) =>({
            data: data.map(item => {
                if(item.id === id){
                    return{...item, rise: !item.rise}
                }
                return item;
            })
      }))
    }

    filterIncrease = () =>{
        this.setState(({data}) =>{
            return {
                data : data.filter( item => item.increase)
            }
        })
    }


    filterPost = (items,filter) =>{
        switch(filter){
            case  "filterIncrease":
                return items.filter( item => item.increase)
            break;
            case "filterSalary":
                return items.filter(item=> item.salary>=1000)
            
            default : return items;
        }
    }
    onFilterPost = (filter) =>{
        this.setState({filter:filter})
    }
    
    searchAmp = (items, term) =>{
        if (term.length ===0){
            return items;
        }
        return items.filter(item =>{
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) =>{
        this.setState({term: term})  
    }
    
   render(){
       const {term, filter} = this.state 
       const search = this.searchAmp(this.state.data,term)   
       const visibleData = this.filterPost(search, filter)
    return(
        <div className="app">
            <AppInfo
            data = {this.state.data} />
            <div className="search-panel">
                <SearchPanel
               onUpdateSearch = {this.onUpdateSearch}/>
                <AppFilter
               onFilterPost = {this.onFilterPost}/>
            </div>
            <AmployeesList 
            data = {visibleData}
            onDelete = {this.deleteItem}
            onToggleIncrease = {this.onToggleIncrease}
            onToggleRise = {this.onToggleRise}/>
             <AmployeesAddForm
            onAdd = {this.addItem}/>
        </div>
    );
}
   }
export default App;