import Image from "next/image"
import image from "../../../public/images/dp.png";
function About() {
    return (
       <div id="about">
         <section className="text-white  body-font bg-about">
            <h2 className="container text-center  sm:text-7xl pt-20 ">About Me</h2>
            <div className="container px-5 py-24 mx-auto flex flex-col">
                <div className="lg:w-4/6 mx-auto">
                    <div className="flex flex-col sm:flex-row mt-8">
                        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                            <div className="w-20 h-20 rounded-full inline-flex items-center justify-center text-white">
                                <Image  
                                    src={image}
                                    alt="Woman"
                                    height={200}
                                    width={200}
                                    className="rounded-full"
                                />
                            </div>
                            <div className="flex flex-col items-center text-center justify-center">
                                <h2 className="font-medium title-font mt-4 text-white text-lg">
                                    Phoebe Caulfield
                                </h2>
                                <div className="w-12 h-1 bg-white rounded mt-2 mb-4" />
                                <p className="text-base">
                                    Raclette knausgaard hella meggs normcore williamsburg enamel pin
                                    sartorial venmo tbh hot chicken gentrify portland.
                                </p>
                            </div>
                        </div>
                        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-white sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                            <p className="leading-relaxed text-lg mb-4">
                                My name is Areej Zaheer, and I am a dedicated
                                frontend and backend developer with a passion
                                for creating seamless and engaging web experiences.
                                With a strong foundation in HTML, CSS, JavaScript,
                                and various backend technologies, I strive to build
                                responsive, user-friendly websites that not only meet
                                client requirements but also exceed their expectations.
                                I believe in the power of innovative solutions and
                                collaborative work, and I approach each project with a
                                focus on quality and functionality. My goal is to not
                                just develop websites, but to craft digital experiences
                                that inspire and connect with users.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       </div>


    )
}

export default About