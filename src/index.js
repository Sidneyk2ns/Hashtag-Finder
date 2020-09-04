import React from "react"
import ReactDOM from "react-dom"
import Tabelabuscacss from './tabelabusca.css'
import MyHeader from './componentes/Myheader'
import MyTable from './componentes/MyTable'

function Index() {
    return <div>
        <MyHeader />
        <MyTable />
    </div>
}

ReactDOM.render(<Index />, document.getElementById('root'));