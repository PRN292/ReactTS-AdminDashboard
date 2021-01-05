import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/MenuComponent";

function App(): any {
    return (
        <div className="App">
            <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Reistorante Con Fusion</NavbarBrand>
                </div>
            </Navbar>
            <Menu/>
        </div>
    );
}

export default App;
