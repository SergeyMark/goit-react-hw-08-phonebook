import { Suspense } from "react"
import { Outlet } from "react-router-dom"


export const Layout = () => {
    return(
        <div style={{padding: '0 16px', margin: '0 auto'}}>
            <AppBar/>
            <Suspense fallback={null}>
                <Outlet/>
            </Suspense>
        </div>
    )
} 