import Image from "next/image"
// import Header from "./component/header/page"
import About from "./component/about/page"
import Blog from "./component/blog/page"
import Project from "./component/project/page"
import Contect from "./component/contect/page"
import Home1 from "./component/home1/page"


function Home() {
  return (
    <div>
      {/* <Header/> */}
      <Home1/>
      <About/>
      <Blog/>
      <Project/>
      <Contect/>
    </div>

  )
}

export default Home


