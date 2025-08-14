import ClickSpark from '../components/ClickSpark';
import Galaxy from '../components/Backgrounds/Galaxy/Galaxy';
import '../components/Backgrounds/Galaxy/Galaxy.css';


export default function App() {
  return (

    <Galaxy mouseInteraction={false}>
      <div style={{color: 'white'}}>
        This is the text hopefully you can see me

      </div>
      <br />
       <div className='text-overlay'>
        This is the text hopefully you can see me
         <a href="../public/Space-Portfolio-main/index.html" style={{ fontSize: "1.5rem" }}>
          Go to Space Journey </a> 

      </div>
    </Galaxy>

  );
}
