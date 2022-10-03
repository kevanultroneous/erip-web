import Layout from "@/components/common/Layout";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import useRazorpay from "react-razorpay";

export default function paynow() {
    const [datas, setDatas] = useState()
    const Razorpay = useRazorpay();



    const handlePayment = async () => {
        await axios.post("api/payment").then((r) => alert(JSON.stringify(r.data))).catch((e) => console.log(e))

        // const options = {
        //     key: "rzp_test_edc0iutgef4r18",
        //     amount: "3000",
        //     currency: "INR",
        //     name: "Acme Corp",
        //     description: "Test Transaction",
        //     image: "https://example.com/your_logo",
        //     order_id: orderid.id,

        //     handler: (res) => {
        //         console.log(res);
        //     },
        //     prefill: {
        //         name: "Piyush Garg",
        //         email: "youremail@example.com",
        //         contact: "9999999999",
        //         method: "netbanking",
        //         bank: "HDFC Bank",
        //     },
        //     notes: {
        //         address: "Razorpay Corporate Office",
        //     },
        //     theme: {
        //         color: "#3399cc",
        //     },
        //     method: 'card',
        //     card: {
        //         number: "4111 1111 1111 1111",
        //         name: "john",
        //         expiry_month: "04",
        //         expiry_year: "24",
        //         cvv: "324"
        //     }
        // };

        // const rzpay = new Razorpay(options);
        // rzpay.open();
    };

    return (
        <div className="App">
            <button onClick={handlePayment}>Click</button>
        </div>
    );
}