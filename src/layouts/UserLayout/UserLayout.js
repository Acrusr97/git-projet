import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link ,Outlet} from "react-router-dom";

const UserLayout =()=>{
  return (
    <>
    <header>
        
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <section className="collapse navbar-collapse-user" id="navbarNav"> 
                        <span className="me-3 ms-2 fw-bold">Espace Client </span>
                        <ul className="navbar-nav">
                            <li className="nav-item ">
                                <Link className="nav-link" to="/user/profil">Voir Profil</Link>
                                <Link className="nav-link" to="/user/commande">Commandes</Link>
                            </li>
                        </ul>
                    </section>
                </nav>
    </header>
    <main>
       
    <Outlet/>
</main>
<footer>
<section className="card">
                    <section className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional
                            content.</p>
                    </section>
                </section>
            </footer>
        </>

  );
}
export default UserLayout;
