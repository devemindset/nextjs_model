const PaymentFailed = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-100">
      <div className="bg-white p-6 rounded shadow text-center">
        <h1 className="text-2xl font-bold text-red-700">❌ Payment Failed</h1>
        <p className="mt-2 text-gray-600">There was a problem with your payment. Please try again.</p>
      </div>
    </div>
  );
};

export default PaymentFailed;