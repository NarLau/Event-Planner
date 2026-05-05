import { NavLink, Outlet } from "react-router-dom"

export default function Layout () {
    return(
        <>
       <nav>
        <div id="logo">Event planner</div>
        <div className="links">
       <NavLink className="link" to="/">Home</NavLink>
       <NavLink className="link" to="/create">Create</NavLink>
       </div>
       </nav> 
       <div id="hero">
       </div>
       <main>
       <Outlet/>
       </main>
        </>
    );
}