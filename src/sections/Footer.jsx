// import React from 'react'

import {footerLogo} from "../assets/images/index.js";
import {footerLinks, socialMedia} from "../constants/index.js";
import {copyrightSign} from "../assets/icons/index.js";

const Footer = () => {
    return (
        <footer className="max-container text-white-400">
            <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
                <div className="flex flex-col items-start">
                    {/*Logo footer*/}
                    <a href="/">
                        <img src={footerLogo} width={150} height={46} alt=""/>
                    </a>
                    <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
                        Get shoes ready for the new term at your nearest Nike store. Find
                        Your perfect Size In Store. Get Rewards
                    </p>
                    {/*Social Media Icons*/}
                    <div className="flex items-center gap-5 mt-8">
                        {
                            socialMedia.map((icon) => (
                                <div key={icon.alt} className="flex justify-center items-center w-12 h-12 rounded-full cursor-pointer bg-white-400">
                                    <img src={icon.src} alt={icon.alt} width={24} height={24}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
                {/*Enlaces*/}
                <div className="flex flex-1 flex-wrap justify-between gap-20 lg:gap-10">
                    {
                        footerLinks.map((section) => (
                            <div key={section.title}>
                                <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">{section.title}</h4>
                                <ul>
                                    {
                                        section.links.map((link) => (
                                            <li key={link.name} className="mt-3 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer">
                                                <a href={link.link}>{link.name}</a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/*Copyright - Terms & Conditions*/}
            <div className="mt-24 flex flex-col items-center  sm:flex-row sm:justify-between">
                <div className="flex flex-1 justify-start items-center space-x-2 font-montserrat cursor-pointer">
                    <img src={copyrightSign} alt="copyright" className="w-5 h-5  "/>
                    <p>
                        Copyright. All rights reserved.
                    </p>
                </div>
                <p className="font-montserrat cursor-pointer">
                    Terms & Conditions
                </p>
            </div>
        </footer>
    )
}
export default Footer
