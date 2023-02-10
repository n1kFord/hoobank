import React from 'react';
import {card} from "../assets/index.js";
import styles, {layout} from "../style.js";
import Button from "./Button.jsx";

const CardDeal = () => {
    return (
        <section className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>Find a better card deal <br className="sm:block hidden"/> in few easy
                    steps.</h2>
                <p className={`${styles.paragraph} max-w-[500px] mt-5`}>Arcu tortor, purus in mattis at sed integer
                    faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
                <Button styles="mt-10"/>
            </div>
            <div className={layout.sectionImg}>
                <img src={card} alt="card" className="w-[100%] h-[100%] relative z-[5]"/>
            </div>
        </section>
    );
};

export default CardDeal;