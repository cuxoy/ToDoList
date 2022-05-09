import AmployeesListItem from "../amployees-list-item/amployees-list-item";
import './amployees-list.css'

const AmployeesList = ({data, onDelete, onToggleIncrease, onToggleRise})=>{

    const elements = data.map(item =>{
        const {id, ...itemProps} = item; 
        return(
            <AmployeesListItem
             key ={id}
             {...itemProps}
             onDelete = {()=> onDelete(id)} 
             onToggleIncrease = {()=> onToggleIncrease(id)}
             onToggleRise = {()=> onToggleRise(id)}/>
        )
    })
    
    return (
        <ul className="app-list list-group">
          {elements}
        </ul>
    );
}
export default AmployeesList;