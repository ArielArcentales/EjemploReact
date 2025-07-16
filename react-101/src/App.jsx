import './App.css'
import Saludo from './Saludo'

function App() {
  const nombres = ['Ariel','Julieth','Samantha']

  return (
    <>
    {
      nombres.map((nombre)=>{
        <Saludo nombre={nombre}/>
      })
    }
    </>
  )
}
export default App;
