import mi from "./orig.webp";
import "./Header.css";

function Header() {

    return (
        <div className="header">
            <div className="nazv">
                <h2>Buster Keaton (альбом)</h2>
                <h3>Miyagi</h3>
                <h4>2019</h4></div>
<div className="image">
    <img src={mi} alt="" />
</div>
        </div>

    )
}
export default Header;
