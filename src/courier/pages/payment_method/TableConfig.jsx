import debit from "../../assets/images/logo/debit card.jpeg"
import COD from "../../assets/images/logo/COD.png"
import payhere from "../../assets/images/logo/PAYHERE.png"
import ezcash from "../../assets/images/logo/ezcash.png"




export const initialPaymentMethods = [
    { 
        id: 1, 
        type: "Debit Card or Credit Card", 
        details: "Use Visa/Master/AmericanExpress", 
        enabled: true,
        icon: debit 
    },
    { 
        id: 2, 
        type: "Cash On Delivery", 
        details: "Pay When Received", 
        enabled: true,
        icon: COD 
    },
    { 
        id: 3, 
        type: "PayHere", 
        details: " Pay it Online and Securely", 
        enabled: true ,
        icon: payhere
    },
    { 
        id: 4, 
        type: "EzCash", 
        details: "Pay with Mobile", 
        enabled: true ,
        icon: ezcash
    },
];