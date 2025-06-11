import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';

const Payment = () => {
  const { merchantTransactionId } = useParams();
  const location = useLocation();
  const isPaymentPage = location.pathname === '/payment';

  // State for payment initiation form
  const [formData, setFormData] = useState({
    amount: '',
    userId: '12345', // Default for testing; replace with dynamic user ID
    phone: '',
    name: '',
  });
  const [formError, setFormError] = useState(null);
  const [formLoading, setFormLoading] = useState(false);

  // State for payment status
  const [status, setStatus] = useState(null);
  const [statusLoading, setStatusLoading] = useState(true);
  const [statusError, setStatusError] = useState(null);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setFormError(null);
    setFormLoading(true);
  
    console.log('Sending to backend:', formData);
  
    try {
      const response = await axios.post('https://api.nncwebsitedevelopment.com/api/phonepe/initiate', formData);
      console.log('Backend response:', response.data);
      const { data } = response.data;
      if (data.success && data.data.instrumentResponse.redirectInfo.url) {
        window.location.href = data.data.instrumentResponse.redirectInfo.url;
      } else {
        throw new Error('Failed to initiate payment');
      }
    } catch (err) {
      console.error('Payment initiation error:', err.response?.data, err.message);
      setFormError(
        err.response?.data?.phonePeError?.message ||
        err.response?.data?.message ||
        err.message ||
        'Payment initiation failed'
      );
      setFormLoading(false);
    }
  };

  // Fetch payment status
  useEffect(() => {
    const fetchPaymentStatus = async () => {
      try {
        const response = await axios.get(
          `https://api.nncwebsitedevelopment.com/api/phonepe/status/${merchantTransactionId}`
        );
        setStatus(response.data);
        setStatusLoading(false);
      } catch (err) {
        setStatusError(err.message);
        setStatusLoading(false);
      }
    };

    if (merchantTransactionId) {
      fetchPaymentStatus();
    } else if (!isPaymentPage) {
      setStatusError('Invalid transaction ID');
      setStatusLoading(false);
    }
  }, [merchantTransactionId, isPaymentPage]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        {isPaymentPage ? (
          <>
            <h1 className="text-2xl font-bold text-center mb-6">Initiate Payment</h1>
            <form onSubmit={handlePayment} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Amount (₹)</label>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  required
                  min="1"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter amount"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  pattern="[0-9]{10}"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter 10-digit phone number"
                />
              </div>
              <button
                type="submit"
                disabled={formLoading}
                className={`w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 ${
                  formLoading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {formLoading ? 'Processing...' : 'Pay with PhonePe'}
              </button>
              {formError && <p className="text-red-600 text-center mt-2">{formError}</p>}
            </form>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold text-center mb-6">Payment Status</h1>
            {statusLoading && (
              <div className="flex justify-center">
                <svg
                  className="animate-spin h-8 w-8 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </div>
            )}
            {statusError && (
              <div className="text-red-600 text-center">
                <p>Error: {statusError}</p>
                <button
                  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  onClick={() => window.location.reload()}
                >
                  Retry
                </button>
              </div>
            )}
            {status && !statusLoading && !statusError && (
              <div className="text-center">
                <p
                  className={`text-lg font-semibold ${
                    status.success ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {status.success ? 'Payment Successful!' : 'Payment Failed'}
                </p>
                <p className="mt-2 text-gray-600">
                  Transaction ID: {merchantTransactionId}
                </p>
                {status.data && (
                  <>
                    <p className="mt-1 text-gray-600">
                      Amount: ₹{status.data.data.amount / 100}
                    </p>
                    <p className="mt-1 text-gray-600">
                      Status: {status.data.data.state}
                    </p>
                  </>
                )}
                <button
                  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  onClick={() => (window.location.href = '/')}
                >
                  Back to Home
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Payment;