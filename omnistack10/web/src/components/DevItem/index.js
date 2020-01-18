import React from 'react';

import './styles.css'

function DevItem({ dev }) {
    return (
        <li className="dev-item">
            <header>
              <img src={dev.avatar_url} alt={dev.name}/>
              <div className="user-info">
                <strong>{dev.name}</strong>
                <span>{dev.techs.join(', ')}</span>
              </div>
              <p>CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile.</p>
              <a href={`https://github.com/${dev.github_username}`}>Acessa perfil no github</a>
            </header>
          </li>
    )
}

export default DevItem