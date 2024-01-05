import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaCss3Alt, FaNode, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs, SiJavascript, SiRedux, SiFirebase, SiMysql, SiExpress,  } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
// import { TbBrandRedux } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";
import { GrGraphQl } from "react-icons/gr";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
            <span className="bannerIcon">
              <FaTwitter />
            </span>
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </div>
        </div>
        <div className='ml-3'>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
            <span className="bannerIcon">
            <SiJavascript />
            </span>
          </div>
          <div className='mt-4'>
          <span className="bannerIcon">
          <TiHtml5 />
            </span>
            <span className="bannerIcon ml-4">
            <FaCss3Alt />
            </span>
            <span className="bannerIcon ml-4">
            <SiRedux />
            </span>
            <span className="bannerIcon ml-4">
            <FaNode />
            </span>
            <span className="bannerIcon ml-3 mr-4">
            <DiMongodb />
            </span>
            <span className="bannerIcon mt-4 ">
            <SiFirebase />
            </span>
            <span className="bannerIcon mt-4 ml-4 ">
            <GrGraphQl />
            </span>
            <span className="bannerIcon mt-4 ml-4 ">
            <SiMysql />
            </span>
            <span className="bannerIcon mt-4 ml-4 ">
            <FaJava />
            </span>
            <span className="bannerIcon mt-4 ml-4 ">
            <SiExpress />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media