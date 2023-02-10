import React from 'react';
import {clients} from "../constants/index.js";
import styles from "../style.js";

const Clients = () => {
    return (
        <section className={`${styles.flexCenter} my-4`}>
            <div className={`${styles.flexCenter} flex-wrap w-full`}>
                {clients?.map((client, i) => {
                    return <div key={client.id}
                                className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] opacity-75 hover:opacity-100 ease-in-out duration-300`}>
                        <img src={client.logo} alt="client"
                             className="sm:w-[192px] w-[100px] object-contain"/>
                    </div>
                })}
            </div>
        </section>
    );
};

export default Clients;