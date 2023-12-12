import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm bg-light">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Kezdőlap</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/urlap">Űrlap</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/adatok">Adatok</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <article>
                {/* Ide kerül majd az útvonalak/linkek által meghatározott tartalom */}
                <Outlet />
            </article>
        </>
    );
};

export default Layout;
