import './app-filter.css';

const AppFilter = ({onFilterPost})=>{

 const filterAmp = (e) =>{
    const filter = e.target.value
    return onFilterPost(filter);
    }

    let classNames = "btn btn-outline-light";
    // if(filterAmp){
    //     classNames = " btn btn-light"
    // }
    return (
        <div className="btn-group">
            <button
             type="button"
             value ="all"
             className={classNames}
             onClick = {filterAmp}>
                 все сотрудники 
            </button>
            <button
             type="button"
             value="filterIncrease"
             className={classNames}
             onClick = {filterAmp}>
                 На повышение
            </button>
            <button
             type="button"
             value="filterSalary"
             className={classNames}
             onClick = {filterAmp}>
                 З/П больше 1000$ 
            </button>
        </div>
    );
}
export default AppFilter;