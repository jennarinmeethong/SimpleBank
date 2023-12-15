import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
export function LayoutComponent() {
    const [isCollapsed, setIsCollapsed] = useState(true);
    return <>
        <nav className="navbar sticky-top navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to={''}>SimpleBank</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle={isCollapsed ? 'collapse' : 'expand'} data-bs-target="#simplebank-navbar" aria-controls="simplebank-navbar" aria-expanded={isCollapsed} aria-label="Toggle navigation" onClick={() => setIsCollapsed(!isCollapsed)}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={isCollapsed ? 'collapse navbar-collapse' : 'expand navbar-collapse'} id="simplebank-navbar">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to={''}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'signin'}>SignIn</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'signup'}>SignUp</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="container">
        <Outlet />
        </div>
    </>
}