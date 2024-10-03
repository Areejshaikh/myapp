import Image from "next/image"
import image from "../../../public/images/two.jpg"
function Project() {
  return (
 <div id="project">
     <section className="text-white body-font bg-project">
     <h3 className='text-5xl text-center pt-20 '>Project</h3>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          <div className="sm:w-1/2 mb-10 px-4">
            <div className="rounded-lg h-64 overflow-hidden">
              <Image 
              src={image}
              className="object-cover object-center h-full w-full"
              alt="content"
              
/>
            </div>
            <h2 className="title-font text-2xl font-medium text-white mt-6 mb-3">
              Buy YouTube Videos
            </h2>
            <p className="leading-relaxed text-base">
              Williamsburg occupy sustainable snackwave gochujang. Pinterest
              cornhole brunch, slow-carb neutra irony.
            </p>
            <button className="flex mx-auto mt-6 bg-red-500  text-white border-0 py-2 px-5 focus:outline-none hover:bg-white hover:text-red-700 rounded">
              View
            </button>
          </div>
          <div className="sm:w-1/2 mb-10 px-4">
            <div className="rounded-lg h-64 overflow-hidden">
              <Image 
              src={image}
              className="object-cover object-center h-full w-full"
              alt="content"
              />
            </div>
            <h2 className="title-font text-2xl font-medium text-white mt-6 mb-3">
              The Catalyzer
            </h2>
            <p className="leading-relaxed text-base">
              Williamsburg occupy sustainable snackwave gochujang. Pinterest
              cornhole brunch, slow-carb neutra irony.
            </p>
            <button className="flex mx-auto mt-6 bg-red-500  text-white border-0 py-2 px-5 focus:outline-none hover:bg-white hover:text-red-700 rounded">
              View
            </button>
          </div>
        </div>
      </div>
    </section>
 </div>

  )
}

export default Project