import { Fragment } from "react";
import MainHeader from "./main-header";

function Layout(props) {
    return (
        <Fragment>
            {/* header as a different component */}
            <MainHeader/>
            <main>
                {props.children}
            </main>
        </Fragment>
    )
}

export default Layout;