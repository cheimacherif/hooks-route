import './App.css';
import { useState } from 'react';
import MovieList from './MovieList/MovieList';
import {v4 as uuidv4} from 'uuid'
import AddMovie from './addmovie/AddMovie';
import { Route, Routes } from 'react-router';
import Description from './Description';
import Filter from './filter/Filter'



function App() {
  const [text,setText]=useState("")
  const[rating,setRating]=useState(1)
  const [movie,setMovie]=useState([
    {

    title:"Spiderman",
    image:"https://blog.fr.playstation.com/tachyon/sites/10/2022/06/17beeefc8aa6008903d5f4fe83c276e6266c75fc.jpg",
    description:"Peter Parker, alias Spider-Man est un super-héros évoluant dans l'univers Marvel de la maison d'édition Marvel Comics.  ",
    rate:5,
    id:uuidv4(),
    link:"https://www.youtube.com/embed/S8ZUtWTuHT4",
  },
  {
    title:"Masha et Michka",
    image:"https://cdn.sortiraparis.com/images/80/69688/346820-masha-et-michka-le-spectacle-au-palace.jpg",
    description:"Masha et Michka raconte les aventures d'une petite fille, Masha, et de son ami, L'Ours Michka, avec délicatesse, sentiments et humour ",
    rate:4,
    id:uuidv4(),
    link:"https://www.youtube.com/embed/M4DR_bfrkto",
  },
  {
    title:"Peppa Pig",
    image:"https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_MyFriendPeppaPig_FR.jpg",
    description:"Peppa est une adorable chipie cochon qui vit avec son frère George, Maman Pig et Papa Pig.  ",
    rate:3,
    id:uuidv4(),
    link:"https://www.youtube.com/embed/NitFfEbj6Bs",
  },
  {
    title:"Les Simpsons",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlbXfXCBNypdkYg3G-Fj0U0c-7klPeAUyR9g&usqp=CAU",
    description:"Les Simpson sont une famille nucléaire composée du couple marié et de leurs trois enfants . ",
    rate:4,
    id:uuidv4(),
    link:"https://www.youtube.com/embed/3DFRCQwd-eY",
  },
  {
    title:"Sponge Bob ",
    image:"https://m.media-amazon.com/images/M/MV5BNDUwNjBkMmUtZjM2My00NmM4LTlmOWQtNWE5YTdmN2Y2MTgxXkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg",
    description:"En plein milieu de l'océan pacifique, les aventures mouvementées de Bob l'éponge et de ses amis poissons et crustacés, à Bikini Bottom, la petite bourgade subaquatique où il fait bon vivre. ",
    rate:2,
    id:uuidv4(),
    link:"https://www.youtube.com/embed/RKvMCCSPZnw",
  },
  {
    title:"Vaiana",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEgYZbUwEvDv836uqXek877Z5niFDQ4Ll86cf5_yg3Sz65EBZ84RPVOJ0S4yKs2j-vAt4&usqp=CAU",
    description:"Vaiana, la légende du bout du monde est un film réalisé par John Musker et Ron Clements avec les voix de Cerise Calixte, Anthony Kavanagh. ",
    rate:5,
    id:uuidv4(),
    link:"https://www.youtube.com/embed/m_NtPdfDyHI",
  },
  {
    title:"Dorra",
    image:"https://img-31.ccm2.net/JwfYE21GL9ZaZiWg_fbY3h-Cmg8=/1240x/smart/36de66e0c405435f9b98dcc3bb63f084/ccmcms-hugo/10604603.jpg",
    description:"Dora et son meilleur ami, un singe au nom de Babouche, partent à l'aventure dans un monde à l'intérieur . Elle a besoin d'aide pour résoudre des énigmes et des mystères . ",
    rate:3,
    id:uuidv4(),
    link:"https://www.youtube.com/embed/gHIVcsYWyjI",
  },
])
const addNewMovie=(newMovie)=>{
  setMovie([...movie , newMovie])
}
const deleteMov=(id)=>{
  const FiltredMov=movie.filter(elm=>elm.id!==id)
  setMovie(FiltredMov)
}

const handleSearch = (e) => {
  setText(e.target.value)
}

const rateMov=(num)=>{
  setRating(num)
}
  
  

  return (
   <div className='App'>

      <Routes>
        <Route path='/' element={<div>
      <Filter rateMov={rateMov}></Filter>
          <AddMovie addNewMovie={addNewMovie}/>
        <input type="search" placeholder='search' name='search' value={text} onChange={handleSearch}></input>
        <MovieList  deleteMov={deleteMov} movie={movie.filter(elm=>elm.title.toLocaleLowerCase().includes(text.toLocaleLowerCase().trim()) && elm.rate)}/>
        </div>}></Route>
        <Route path='/Description/:id' element={<Description movie={movie}></Description>}></Route>
      </Routes>
        


    </div>
  );

}

export default App;
