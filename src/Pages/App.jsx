import ClickSpark from '../components/ClickSpark';
import Galaxy from '../components/Backgrounds/Galaxy/Galaxy';
import '../components/Backgrounds/Galaxy/Galaxy.css';
import CardNav from '../components/Components/CardNav/CardNav'; 
import '../css/App.css'
import mypfp from '../assets/Images/pfp.jpg'; 

// here is the color pallete im am going to use https://colorhunt.co/palette/0000009929eacc66dafaeb92
export default function App() {
  return (
  
    <Galaxy mouseInteraction={false}>
      <CardNav logo={mypfp}></CardNav>
      <div className='text-box'>  
       <div className='hero'>
        <h1>GO ON A<br/>PRIVATE <br/><span style={{ color: "red" }}>MISSION</span></h1>
         <a href="../public/Space-Portfolio-main/index.html" style={{ fontSize: "1.5rem" }}> GO NOW! </a> 
      </div>
     </div>
    </Galaxy>
  ); 
}