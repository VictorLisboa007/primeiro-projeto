import './App.css';
import FirstComponent from './components/FirstComponent.jsx';
import TemplateExpressions from './components/TemplateExpressions.jsx';
import MyComponent from './components/MyComponent.jsx';

import vegeta from './assets/vegeta.jpg'
import OutroComponent from './components/OutroComponent.jsx';
import ComponentORemake from './components/ComponentORemake.jsx';


function App() {
  const n = 15
  const classeDiferente = true
  
  return (
    <div className='App'>
        {/*Importação pela pasta public*/}
        <h1>Goku SSj3</h1>
        <img src="./goku.jpg" width={900} height={600}></img>
        <br></br>
        {/* <FirstComponent/>
        <TemplateExpressions/>
        <MyComponent/> */}

        {/*Importação pela pasta assets*/}
        <h1>Majin Vegeta</h1>
        <img src={vegeta} alt="Imagem do Vegeta" width={900} height={600}/>
        
        <OutroComponent/>
        {/*CSS inline*/}
        <p style={{color:"blue", padding:"25px", backgroundColor:"lightblue", fontSize:"40px"}}>Este parágrafo é do App.jsx</p>
        {/*CSS com if ternário*/}
        <h3 style={n > 10 ? ({color:"green", backgroundColor:"yellow"}) : ({color:"gray", backgroundColor:"black"}) }>AQUI TEM UM TEXTO COM O PRIMEIRO ESTILO</h3>
        <h3 style={n < 10 ? ({color:"green", backgroundColor:"yellow"}) : ({color:"gray", backgroundColor:"black"}) }>AQUI TEM UM TEXTO COM O PRIMEIRO ESTILO</h3>
        
        {/*Class diferente de acordo com a verificação*/}
        <h2 className={classeDiferente ? "red-title" : "normal-title"}>TEXTO COM CLASSE DIFERENTE 1</h2>
        <h2 className={classeDiferente ? "normal-title" : "red-title"}>TEXTO COM CLASSE DIFERENTE 2 - O RETORNO</h2>

        <ComponentORemake/>
    </div>
  );
}

export default App;
