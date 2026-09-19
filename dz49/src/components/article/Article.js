import React from "react";
import './Article.css';

class Article extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {intro,ang,capt,cor,tr,night,sam,tel,mal,bism,sorry,kind,we} = this.props;
        return (
            <>
                <div className="wrap">
                    <div className="songs">
                     <p>1. {this.props.intro}</p>
                    <p>2. {this.props.ang}</p>
                    <p>3. {this.props.capt}</p>
                    <p>4. {this.props.cor}</p>
                    <p>5. {this.props.tr}</p>
                    <p>6. {this.props.night}</p>
                    <p>7. {this.props.sam}</p>
                    <p>8. {this.props.tel}</p>
                    <p>9. {this.props.mal}</p>   
                    <p>10. {this.props.bism}</p>   
                    <p>11. {this.props.sorry}</p>   
                    <p>12. {this.props.kind}</p>   
                    <p>13. {this.props.we}</p>   
                    </div>
                    
                </div>

            </>
        )
    }
}
export default Article;
