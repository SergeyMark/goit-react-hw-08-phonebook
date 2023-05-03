import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { AppBar } from "./AppBar/AppBar"

export const Layout = () => {
    return(
        <div style={{padding: '0 16px', margin: '0 auto'}}>
            <AppBar/>
            <Suspense fallback={<div>Loader</div>}>
                <Outlet/>
            </Suspense>
        </div>
    )
} 