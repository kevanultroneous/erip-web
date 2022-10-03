import Layout from "@/components/common/Layout";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import useRazorpay from "react-razorpay";

export default function paynow() {
    const [datas, setDatas] = useState([])
    useEffect(() => {
        axios.post("/api/payment").then((r) => setDatas(r.data)).catch((e) => console.log(e))
    }, [])
    console.log(datas)
    const Razorpay = useRazorpay();

    const handlePayment = useCallback(() => {

        const options = {
            key: "rzp_test_edc0iutgef4r18",
            amount: "3000",
            currency: "INR",
            name: "Acme Corp",
            description: "Test Transaction",
            image: "https://example.com/your_logo",
            order_id: datas ? datas.id : null,

            handler: (res) => {
                console.log(res);
            },
            prefill: {
                name: "Piyush Garg",
                email: "youremail@example.com",
                contact: "9999999999",
                method: "netbanking",
                bank: "HDFC Bank",
            },
            notes: {
                address: "Razorpay Corporate Office",
            },
            theme: {
                color: "#3399cc",
            },
        };

        const rzpay = new Razorpay(options);
        rzpay.open();
        rzpay.on('payment')
    }, [Razorpay]);

    return (
        <div className="App">
            <button onClick={handlePayment}>Click</button>
        </div>
    );
}