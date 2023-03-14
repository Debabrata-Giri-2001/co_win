import React from "react";
import Faq from 'react-faq-component';


const data = {
    title: "ABHA (Ayushman Bharat Health Account) Fundamentals",
    rows: [
        {
            title: "What is ABHA Number",
            content: `ABHA number is a 14 digit number that will uniquely identify you as a participant in India’s digital healthcare ecosystem. ABHA number will establish a strong and trustable identity for you that will be accepted by healthcare providers and payers across the country`,
        },
        {
            title: "What is ABHA Address",
            content: `ABHA (Ayushman Bharat Health Account) Address is a unique identifier (self declared username) that enables you to share and access your health records digitally. Your ABHA address may look like ‘yourname@consent manager’.For instance, xyz@abdm is a ABHA address with ABDM Consent Manager that will facilitate health data exchange for you with appropriate consent on the ABDM network  `,
                
        },
        {
            title: "Linking ABHA number  with  ABHA address",
            content: `You can use your ABHA number to seamlessly sign up for a ABHA address, and ensure that the health records created for you are shared only with you. To enable health data sharing, it is recommended that you create ABDM ABHA address and link it with your ABHA number .`,
        },
        {
            title: "Voluntary Opt-out",
            content: `You can participate at your own free will and choose to create your ABHA number voluntarily. Also, at any time, you can also request for permanent deletion or temporary deactivation of your ABHA number`,
        },
    ],
};

const styles = {
    bgColor: '#0B162C',
    titleTextColor: "#FFF",
    rowTitleColor: "#FFF",
    rowContentColor: 'grey',
    arrowColor: "#FFF",
};

const config = {
    animate: true,
    // arrowIcon: "V",
    tabFocus: true
};

export default function According() {
    return (
        <div className="p-3">
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    )
}
