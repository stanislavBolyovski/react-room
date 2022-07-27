import { useState } from "react";
import "./Navigation.css"

function Navigation() {

    const [closed, setMenu] = useState(true)
    function menuHandler() {
        if (closed == true) {
            setMenu(false)
        } else {
            setMenu(true)
        }

    }
    return (
        <div>
            <div className="mobileNav">
                <div className="navigation">
                    <div className="menuBar" onClick={menuHandler}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                    <h2>room</h2>
                </div>

                <ul style={{
                    display: closed ? "none" : 'flex'
                }} className='ul'>
                    <li><a href="default.asp">Home</a></li>
                    <li><a href="news.asp">News</a></li>
                    <li><a href="contact.asp">Contact</a></li>
                    <li><a href="about.asp">About</a></li>
                </ul>
            </div>
            <div className="desktopNav">
                <div className="navigation">
                    <h2>room</h2>

                </div>
                <ul className='ul'>
                    <li><a href="default.asp">Home</a></li>
                    <li><a href="news.asp">News</a></li>
                    <li><a href="contact.asp">Contact</a></li>
                    <li><a href="about.asp">About</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation