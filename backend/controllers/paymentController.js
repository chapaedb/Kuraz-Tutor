const MakePayment = async (req, res) => {
    try {
        res.status(200).json({
            status: 'success',
            data: {
                message: 'Payment successful'
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
}

module.exports = { MakePayment };