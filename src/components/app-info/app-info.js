import './app-info.css';

const AppInfo = ({data})=>{
    const length = data.length;
    const promotion = data.filter(item=>{
        if(item.increase){
            return item
        }
    }).length 
return (
    <div className="app-info">
        <h1>Учет сотрудников в моей компании</h1>
        <h2>Общее число сотрудников: {length}</h2>
        <h2>Премию получат: {promotion}</h2>
    </div>
)
}
export default AppInfo;
