import { NavLink } from "react-router-dom"
import { MdCategory, MdContacts, MdHomeFilled, MdShop2 } from "react-icons/md"

const Navbar = ({ containerStyles, onItemClick }) => {
    return (
        <nav className={`${containerStyles}`}>
            <NavLink onClick={onItemClick} to={'/'} className={({isActive}) => isActive ? "active_link" : ""}>
                <div className="flexCenter gap-x-1"><MdHomeFilled />Home</div>
            </NavLink>
            <NavLink onClick={onItemClick} to={'/aboutus'} className={({isActive}) => isActive ? "active_link": ""}>
                <div className="flexCenter gap-x-1"><MdCategory />About Us</div>
            </NavLink>
            <NavLink onClick={onItemClick} to={'/products'} className={({isActive}) => isActive ? "active_link": ""}>
                <div className="flexCenter gap-x-1"><MdShop2 />Products</div>
            </NavLink>
            <NavLink onClick={onItemClick} to={'/enquiry'} className={({isActive}) => isActive ? "active_link": ""}>
                <div className="flexCenter gap-x-1"><MdContacts/>Enquiry</div>
            </NavLink>
        </nav>
    )
}

export default Navbar
