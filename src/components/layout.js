import React from "react";
import TopBar from "./topbar"

const Layout =({ children, username, handleLogin }) =>{
    return(
        <>
        <div>
            <TopBar username={username} handleLogin={handleLogin}/>
        </div>
        <main style={{padding: "20px"}}>{children}</main>
        </>
    )
}

export default Layout;