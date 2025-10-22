//vamos a importar estilos y el componente InfoCard
import { InfoCard } from "./components/InfoCard" 
import { UserCard } from "./components/UserCard"
import { ListaComida } from "./components/ListaComida"
import "./App.css"

export function App(){
  return(
    <div>
      <h1>App</h1>
      <InfoCard />
      <UserCard image="https://rickandmortyapi.com/api/character/avatar/88.jpeg" 
      userName="Cynthia"
      />
      <UserCard image="https://rickandmortyapi.com/api/character/avatar/207.jpeg" 
      userName="Loggins"
      />
      <UserCard image="https://rickandmortyapi.com/api/character/avatar/232.jpeg" 
      userName="Morty Smith"
      />
       <UserCard image="https://rickandmortyapi.com/api/character/avatar/709.jpeg" 
      userName="Dracula"
      />
      <ListaComida image="https://cocinaisraeli.com/wp-content/uploads/2024/03/arroz-chino-frito.jpg" 
      comidaName="Arroz Chino"
      description="Consiste en arroz salteado a fuego alto con ingredientes como pollo, cerdo,verduras."
      />
      <ListaComida image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZhbyj0sQEmYJHI1xZyEM7PueszmWGlVPTlg&s" 
      comidaName="Arroz con Leche"
      description="Consiste en arroz cocido en leche con azúcar, canela y pasas. "
      />
      <ListaComida image="https://upload.wikimedia.org/wikipedia/commons/4/44/Burrito_chihuahuense_de_chile_verde.jpg" 
      comidaName="Burritos"
      description="Tortilla de harina enrollada y rellena de ingredientes como carne y verduras."
      />
      <ListaComida image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-YbWF36MgbYM8kRu0V4OCFjF2CWXIZoyerg&s" 
      comidaName="Buñuelo"
      description="Hecho de una masa que se fríe en aceite, resultando en un exterior crujiente e interior esponjoso."
      />
    </div>
  )
}