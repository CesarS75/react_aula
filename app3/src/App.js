import ComponenteUm from "./componentes/ComponenteUm"


function App() {
  const Lista = ['A', 'B', 'C', 'D']
  const Lista_A = Lista.map(
    (C) => <p>{C}</p>
  )

  return (
    <div>
      <ComponenteUm />
      <h1> FUNCIONOU </h1>
    </div>
  )
}

export default App