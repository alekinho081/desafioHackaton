import React from "react";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";


const Layout = () => {
    return(
        <div>
                <Header />
               
                <main>

                    <Outlet />

                </main>

              <footer>

                    <p>© 2025 </p>

              </footer>

        </div>

    )
}

export default Layout