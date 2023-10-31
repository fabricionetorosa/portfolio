import { Player } from "@lottiefiles/react-lottie-player";
import './App.css'



function App() {
  

  return (
    <>
    <h1> Meu portfólio!</h1>
      <Player src="https://assets-v2.lottiefiles.com/a/632817ec-116f-11ee-aef7-1b7251f21382/fEshQbotuY.json"
      loop
      autoplay
      speed={5}
      
      style={{ height: "200px", width: "300px" }}/>

      <h2>Aluno Senai - Análise e desenvolvimento de sistemas</h2>
      <h3>Habilidades: javascript, react native, visual studio code, programação de embarcados</h3>
      
      <Player src="https://assets-v2.lottiefiles.com/a/b265e6dc-1173-11ee-aebe-47fcc1ac7258/VD7mmyoypr.json"
        

      loop
      autoplay
      speed={5}
      
      style={{ height: "120px", width: "120px", float: 'left',  justifyContent: 'center' }}/>

<Player 
      src="https://assets-v2.lottiefiles.com/a/8caf35f6-117d-11ee-bf57-3f93a1c1deb6/4tIgB9sCA5.json"
      loop
      autoplay
      speed={5}
      
      style={{ height: "120px", width: "120px",float: 'center',  justifyContent: 'center' }}/>

<Player 
      src="https://assets-v2.lottiefiles.com/a/9fe12c24-1178-11ee-be5f-830c8b48a4db/kOHs0bIX8p.json"
      loop
      autoplay
      speed={5}
      
      style={{ height: "120px", width: "120px", float: 'right', justifyContent: 'center' }}/>



<h1>
  
 
  
   Trabalhos recentes com frontend/backend </h1>
<h2> Petflix - streaming para animais </h2>
<img
     src={"http://petbiologia.paginas.ufsc.br/files/2018/04/30572138_1624529127632614_8702183303356512137_n.jpg"}
     style={{ height: "200px", width: "400px" }} />
<h2> Página em React para listar as informações de personagens de Rick and Morty</h2>
<h3> https://rick-morty-gray.vercel.app/</h3>


     <img
     src={"https://media.licdn.com/dms/image/D4E03AQEiSoR8AS5BAg/profile-displayphoto-shrink_200_200/0/1682553369184?e=2147483647&v=beta&t=KT1D23xNi4mY959EPm2u3CqmGPNA9LHUumqAL4N4vsk"}
     style={{ height: "100px", width: "100px", borderRadius: '50px' }} />
     
                        
            
     
    









    </>
  )
}

export default App
