export default async function handler(req, res) {
    if (req.method === "POST") {
        body = req.body.razorpay_order_id + "|" + req.body.razorpay_payment_id;
        var crypto = require("crypto");
        var expectedSignature = crypto.createHmac('sha256', 'O2OSsNhkadG2FBPPTTuYCPBh')
            .update(body.toString())
            .digest('hex');
        console.log("sig" + req.body.razorpay_signature);
        console.log("sig" + expectedSignature);

        if (expectedSignature === req.body.razorpay_signature) {
            console.log("Payment Success");
        } else {
            console.log("Payment Fail");
        }
    } else {
        // Handle any other HTTP method
    }
}