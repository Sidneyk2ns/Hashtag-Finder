import React from 'react'

import logocasa from '../assets/icon-home.svg'
import logosair from '../assets/icon-power-off.svg'


class MyHeader extends React.Component {
    render() {
      return (
        <div>
            <header>   
                <nav id="menu">
                    <div class="logo">
                        <h1 class="logonormal">hashtag<b>finder</b></h1>
                    </div>
                <ul>
                    <li><a href="#login" class="home"><img src={logocasa} alt="icon-home" /> HOME</a></li>
                    <li><a href="#sair" class="home sair"><img src={logosair} alt="icon-out" /> SAIR</a></li>
                </ul>
                </nav>
            </header>
        </div>
      );
    }
  }

export default MyHeader