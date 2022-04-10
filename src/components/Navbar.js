import React from 'react'

function Navbar(props) {
    //For changing color based on theme
    var color = 'secondary';
    var font = 'warning'
    if (props.mode === 'light'){
        color = 'dark';
        font = 'success';
        
    }

  return (
    <div>
        <nav className={`navbar navbar-expand-lg navbar-${color} bg-${color}`}>
            <a className={`navbar-brand text-${font}`} href="#">TextUtils</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                
                <li className="nav-item">
                    <a className="nav-link" href="#"></a>
                </li>
                </ul>
                
            </div>
            <div>
                <button type="button" onClick={props.toggleMode} className={`btn btn-${props.mode} text-${props.clr}`}>{props.clr.toUpperCase()}</button>

            </div>
</nav>
    
    </div>
  )
}

export default Navbar