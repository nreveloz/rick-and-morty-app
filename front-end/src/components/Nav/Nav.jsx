import {Link} from "react-router-dom";
import style from "./Nav.module.css"


const Nav = () => {
    return(
        <div className={style.navDiv}>
            <nav className={style.navNav}>
                <Link to='/home' className={style.navLink}>🏠HOME</Link>
                <Link to='/about' className={style.navLink}>📄ABOUT</Link>
                <Link to={'/favorites'} className={style.navLink}>♥ FAVORITES</Link>
                <Link to='/' className={style.navLink} >👤LOGOUT</Link>
            </nav>
        </div>
    )
};

export default Nav;