import MyComponent from "./MyComponent.jsx"

const FirstComponent = () => {
    return(
        <div>
            <h1>Criando meu Primeiro Componente</h1>
            <h2>Flamengo Campeão</h2>
            <h2>É Hoje</h2>
            <label><b>Digite o nome do Flamengo</b></label>
            <br></br>
            <input placeholder="Flamengo"></input>
            <br></br>
            <button type="submit">Entrar</button>
            <MyComponent/>
        </div>
    )
}

export default FirstComponent