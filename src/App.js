import React from "react";
import './App.css';


const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src='https://i.pinimg.com/originals/fa/99/69/fa99695d46c1e28ef267519904f8dcb5.png'></img>
            </header>
            <nav className='nav'>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Massages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className='content'>
                <div>
                    <img src='https://ymcagbw.org/sites/default/files/2020-03/gray_wolf.png'></img>
                </div>
                <div>
                    Ava + description
                </div>
                <div>
                    My posts
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
