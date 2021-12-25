import './app-info.css'
const AppInfo = ({increased, employyes}) => {
    return(
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {employyes}</h2>
            <h2>Премию получат: {increased}</h2>
        </div>
    )
}

export default AppInfo;