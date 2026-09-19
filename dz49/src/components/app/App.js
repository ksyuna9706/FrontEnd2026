import Header from '../header/Header';
import Article from '../article/Article';
import Footer from '../footer/Footer';
import './App.css';

function App(props) {
  let {intro,ang,capt,cor,tr,night,sam,tel,mal,bism,sorry,kind,we,year} = props;
  return (
    <div className="App">
          <Header />
          <Article intro = {intro} ang = {ang} capt ={capt}  cor = {cor} tr = {tr} night={night} sam = {sam} tel = {tel} mal = {mal} bism ={bism} sorry ={sorry} kind={kind} we = {we} />
          <Footer  year = {year}/>
    </div>
  );
}

export default App;
