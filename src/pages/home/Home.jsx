import Navbar from "../../Components/navbar/Navbar";
import Featured from "../../Components/featured/Featured";
import "./home.scss";
import List from "../../Components/list/List";

const Home = () => {
  return (
    <div className='home'>
     
      <Navbar/>
      <Featured/>
      <List/>
      <List/>
      <List/>
      <List/>
    </div>
  )
}

export default Home
