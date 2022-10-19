import ImgHome from './components/ContainerImgHome/ImgHome';
import Nav from './components/Nav/Nav';
import './css/style.css';
import Cases from './layouts/Cases/Cases';
import Footer from './layouts/Footer/Footer';
import MainPosts from './layouts/MainPosts/MainPosts';
import SectionPosts from './layouts/SectionsPosts/SectionsPosts';


function App(){

  return (
    <>
      <Nav/>
      <ImgHome/>
      <SectionPosts/>
      <MainPosts/>
      <Cases/>
      <Footer/>
    </>
  );
}

export default App;
