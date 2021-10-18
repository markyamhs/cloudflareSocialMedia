import React from "react";
import TopBar from "./topbar"

const Layout =({ children, username, handleLogin }) =>{
    return(
        <>
        <div>
            <TopBar username={username} handleLogin={handleLogin}/>
        </div>
        <main>{children}</main>
        </>
    )
}

export default Layout;