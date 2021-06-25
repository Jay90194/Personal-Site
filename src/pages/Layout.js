import * as React from "react"
import Header from "../Components/header"

export default function Layout(props) {
    return (
        <>
       <Header/>
            {props.children}
            
        </>
    )
}