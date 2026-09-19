import "./Footer.css";

function Footer(props){
    let {year} = props;
    return(

<div className="footer">
    <p>{props.year}</p>
</div>

    )
}
export default Footer;