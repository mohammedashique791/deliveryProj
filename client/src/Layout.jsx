import { Outlet } from "react-router-dom";
import Header from "./Layouts/Header";
import { createContext } from "react";
export const LayoutContext = createContext({});
export default function Layout(){
    return(
        <LayoutContext.Provider>
            <div className="flex flex-col min-h-screen">
                <Header/>
                <Outlet />
            </div>
        </LayoutContext.Provider>
    )
}