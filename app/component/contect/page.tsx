"use client"

import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


function Contect() {
    return (
<div id="contect">
<section className="text-white body-font bg-contect ">
<h3 className='text-5xl text-center pt-20 '>Contect</h3>
            <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">

                    <iframe
                        width="100%"
                        height="100%"
                        className="absolute inset-0"
                        frameBorder={0}
                        title="map"
                        marginHeight={0}
                        marginWidth={0}
                        scrolling="no"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28939.908065396594!2d66.9863435201519!3d24.94948894480182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb36ae71fc40a31%3A0xcfbb1d61e6ab566d!2sOrangi%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1727846258608!5m2!1sen!2s"
                        style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
                    />
                    <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                                ADDRESS
                            </h2>
                            <p className="mt-1">
                                Photo booth tattooed prism, portland taiyaki hoodie neutra
                                typewriter
                            </p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                                EMAIL
                            </h2>
                            <a className="text-indigo-500 leading-relaxed">areejzaheer@email.com</a>
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                                PHONE
                            </h2>
                            <p className="leading-relaxed">0317-XXXXXXX</p>
                        </div>
                    </div>
                </div>
                <div className="border p-12 rounded-2xl w-80 bg-white flex flex-col md:ml-auto md:py-8 mt-8 md:mt-0">
                    <h2 className="text-gray-900 text-2xl mb-1 font-medium title-font">
                        Contect Me
                    </h2>

                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            defaultValue={""}
                        />
                    </div>
                    <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        Submit
                    </button>
                    <p className="text-1xl text-center text-gray-500 mt-3">

                        Contect  With us
                    </p>
                    <div className="flex justify-center">
                        <i className="p-2"><FaFacebookSquare /></i>
                        <i className="p-2"><FaInstagramSquare /></i>
                        <i className="p-2"><FaLinkedin /></i>
                    </div>
                </div>
            </div>
        </section>
</div>

    )

}

export default Contect
