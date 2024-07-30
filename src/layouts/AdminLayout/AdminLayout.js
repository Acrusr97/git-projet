import React from "react";
import {Link, Outlet} from "react-router-dom";
import {Toaster} from "react-hot-toast";

 const AdminLayout = () => {

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <span className="me-3 ms-2 fw-bold">Espace Admin </span>
                        <ul className="navbar-nav">
                            <li className="nav-item ">
                                <Link className="nav-link" to="/admin/produit">Gestion des produits</Link>
                                <Link className="nav-link" to="/admin/adminuser">Gestion des users</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <main>
                <Outlet/>
                <div><Toaster/></div>
            </main>
        </>

    )
 }
 export default AdminLayout