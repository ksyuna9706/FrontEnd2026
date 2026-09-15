import Header from '../header/Header';
import Article from '../article/Article';
import Footer from '../footer/Footer';
import './App.css';
function App(props) {
let{title,zag2,dost,copy} = props;
  return (
    <div className="App">
     <Header  zag2={zag2}  copy={copy}/>

     <Article title={title} dost={dost} />
      <Footer copy={copy}/>
    </div>
  );
}

export default App;
