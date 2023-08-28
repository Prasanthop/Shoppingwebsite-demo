import React from 'react';

function Contact() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
      <p className="text-gray-700">
        Have questions or feedback? Feel free to reach out to us using the
        information below.
      </p>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Email:</h2>
        <p className="text-gray-700">contact@prasantsveggies.com</p>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Phone:</h2>
        <p className="text-gray-700">123-456-7890</p>
      </div>
    </div>
  );
}

export default Contact;
