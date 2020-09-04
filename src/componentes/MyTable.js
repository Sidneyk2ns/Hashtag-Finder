import React from "react"

import logocasa from '../assets/icon-home.svg'
import logosair from '../assets/icon-power-off.svg'

class MyTable extends React.Component {
    render() {
      return (
        <div>
            <div class="buscarealizada">
            <h2 class="logo">Buscas realizadas</h2>
            </div>
            <div class="tabelabusca"> 
            <table class="espacotabela" id="paginacao" cellspacing= "0">
                <thead>
                  <tr>
                      <th class="hash" style={borderBottomLeftRadius:10'px'; borderTopLeftRadius:10'px';}>Hashtag</th>
                      <th>Data</th>
                      <th style={borderBottomLeftRadius: 10'px'; borderTopLeftRadius: 10'px';}>Hora</th>
                  </tr>
                </thead>
                
                    <tr>
                        <td style={{color: black;}}>#hashtagname</td>
                        <td>25/02</td>
                        <td>09:30</td>
                    
                    </tr>

                    
                    
            </table> 
            </div> 
        </div>
      );
    }
  }

export default MyTable