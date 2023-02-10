import React from 'react';
import styles from "../style.js";
import {logo} from "../assets/index.js";
import {footerLinks, socialMedia} from "../constants/index.js";

const Footer = () => {
    return (
        <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
            <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
                <div className="flex-1 flex flex-col justify-start mr-10">
                    <img src={logo} alt="hoobank" className="w-[266px] h-[72px] object-contain"/>
                    <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new way to make the payments easy,
                        reliable and
                        secure.</p>
                </div>

                <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
                    {footerLinks?.map((link, i) => (
                        <div key={link.key} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                                {link.title}
                            </h4>
                            <ul className="list-none mt-5">
                                {link.links?.map((item, i) => (
                                    <li key={item.name}
                                        className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-2 last:mb-0`}>
                                        {item.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div
                className="mt-5 w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
                <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-dimWhite">2022
                    HooBank.
                    All Rights
                    Reserved.</p>

                <div className="flex flex-row md:mt-0 mt-6">
                    {socialMedia?.map((item, i) => {
                        return <img key={item.id} src={item.icon} alt={item.id}
                                    className={`w-[21px] h-[21px] object-contain cursor-pointer mr-6 last:mr-0`}/>
                    })}
                </div>
            </div>
        </section>
    );
};

export default Footer;