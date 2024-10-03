import React from 'react';
import Image from 'next/image';
import Images from '../../../public/images/dp.png'

function Blog() {
  return (
    
<div id='blog'>
<section className="text-white bg-blog  body-font  mt-2">
<div className="container px-5 py-24 mx-auto">
<h3 className='text-5xl text-center mb-20'>Our Blocks</h3>

  <div className="flex flex-wrap -m-4">
    {/*  1st Box*/}
    <div className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <Image className="lg:h-50 md:h-64 w-80 object-cover object-center"  src={Images} height={200}width={200} alt='hero'/>
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-white mb-1">CATEGORY</h2>
          <h1 className="title-font text-lg font-medium text-white mb-3">The Catalyzer</h1>
          <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          <div className="flex items-center flex-wrap ">
            <a className="text-white hover:text-red-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
              {/* svg areo tag */}
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* 2nd Box */}
    <div className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <Image className="lg:h-50 md:h-64 w-80 object-cover object-center"  src={Images} height={200}width={200} alt='hero'/>
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-white mb-1">CATEGORY</h2>
          <h1 className="title-font text-lg font-medium text-white mb-3">The 400 Blows</h1>
          <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          <div className="flex items-center flex-wrap">
          <a className="text-white hover:text-red-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
              {/* svg areo tag */}
            </a>
          </div>
        </div>
      </div>
    </div>


    {/*  3rd Box*/}
    <div className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        {/* <Image className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/722x402" alt="blog" width={200} height={200}/> */}
        <Image className="lg:h-50 md:h-64 w-80 object-cover object-center"  src={Images} height={200}width={200} alt='hero'/>
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-white mb-1">CATEGORY</h2>
          <h1 className="title-font text-lg font-medium text-white mb-3">Shooting Stars</h1>
          <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          <div className="flex items-center flex-wrap ">
            <a className="text-white hover:text-red-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
</div>

);
}
export  default Blog;