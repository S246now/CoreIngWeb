import Link from "next/link";
import classes from "./main-header.module.css";

function MainHeader() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link href='/'>Home</Link>
            </div>
            <nav className={classes.navigation}>
                <ul>
                    <li>
                       {/*  <Link href='/tasks' >Tasks</Link>
                        <br/>
                        <Link href='/' >Profile</Link>
                        <br/> */}
                        <Link href='/' >Register</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader;