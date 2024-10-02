import Image from "next/image"
import image from "../../public/images/computer.jpg"
function Project() {
  return (
    <section className="text-white body-font bg-project">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          <div className="sm:w-1/2 mb-10 px-4">
            <div className="rounded-lg h-64 overflow-hidden">
              <Image 
              src={image}
              className="object-cover object-center h-full w-full"
              alt="content"
              width={100}
              height={100}/>
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
              width={100}
              height={100}/>
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

  )
}

export default Project