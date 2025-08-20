import Galaxy from '../components/Backgrounds/Galaxy/Galaxy';
import '../components/Backgrounds/Galaxy/Galaxy.css';
import CardNav from '../components/Components/CardNav/CardNav'; 
import '../css/App.css'
// import logo from '.../public/Space-Portfolio-main/Images/icon.png'; 
import logo from '../../public/Space-Portfolio-main/images/icon.png';
import { ImTextColor } from 'react-icons/im';



// here is the color pallete im am going to use https://colorhunt.co/palette/0000009929eacc66dafaeb92
export default function App() {

  const items = [
    {
      label: "Movie 1",
      bgColor: "#ff0000ff",
      textColor: '#fff', 
      links: [
        {label: "Company", ariaLabel: "About Company", href:"../public/Space-Portfolio-main/index.html"},
        {label: "Company", ariaLabel: "About Company", href:"../public/Space-Portfolio-main/index.html"},
      ]
    },
      {
      label: "Movie 1",
      bgColor: "#ff0000ff",
      textColor: '#fff', 
      links: [
        {label: "Company", ariaLabel: "About Company", href:"../public/Space-Portfolio-main/index.html"},
        {label: "Company", ariaLabel: "About Company", href:"../public/Space-Portfolio-main/index.html"},
      ]
    },
      {
      label: "Movie 1",
      bgColor: "#ff0000ff",
      textColor: '#fff', 
      links: [
        {label: "Company", ariaLabel: "About Company", href:"../public/Space-Portfolio-main/index.html"},
        {label: "Company", ariaLabel: "About Company", href:"../public/Space-Portfolio-main/index.html"},
      ]
    },
  ];

  return (
  
    <Galaxy mouseInteraction={false}>
      <CardNav logo={logo} items={items} ease='power3.out' buttonHref='https://github.com/gav-ogren'></CardNav>
      <div className='text-box'>  
       <div className='hero'>
        <h1>GO ON A<br/>PRIVATE <br/><span style={{ color: "red" }}>MISSION</span></h1>
         <a href="../public/Space-Portfolio-main/index.html" style={{ fontSize: "1.5rem" }}> GO NOW! </a> 
      </div>
     </div>
    </Galaxy>
  ); 
}