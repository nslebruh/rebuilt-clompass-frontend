import { NavLink } from "react-bootstrap"

export const SidebarCollapseItem = (props) => {
    const {to, icon, text} = props
    return (
        <NavLink to={to} className="nav-link">
            <i className={"nav-icon "+icon}></i>
            <span className="nav-name">{text}</span>
        </NavLink>
    )
}