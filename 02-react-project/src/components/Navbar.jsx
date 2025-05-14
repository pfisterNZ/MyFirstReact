import { useState } from "react";
import {
    Home,
    Search,
    Bell,
    Mail,
    User,
    MoreHorizontal,
} from "lucide-react";
import xlogo from "../assets/x-icon.svg";
import "./Navbar.css";

export function Navbar() {
    const [active, setActive] = useState("Home");

    const navItems = [
        { name: "Home", icon: <Home size={24} /> },
        { name: "Explore", icon: <Search size={24} /> },
        { name: "Notifications", icon: <Bell size={24} /> },
        { name: "Messages", icon: <Mail size={24} /> },
        { name: "Profile", icon: <User size={24} /> },
        { name: "More", icon: <MoreHorizontal size={24} /> },
    ];

    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li>
                    <div className="logo">
                        <img src={xlogo} alt="Logo X" />
                    </div>
                </li>
                {navItems.map((item) => (

                    <li key={item.name}>
                        <button
                            onClick={() => setActive(item.name)}
                            className={active === item.name ? "active" : ""}
                        >
                            {item.icon}
                            <span>{item.name}</span>
                        </button>
                    </li>
                ))}
            </ul>

            <div className="mt-auto pt-10">
                <button className="post-btn">Post</button>
            </div>
        </nav>
    );
}
