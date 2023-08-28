import React from 'react';
import vegetableProducts from './Products';

function Home() {
  return (
    <div className="flex justify-center p-6 m-6 gap-6">
      {vegetableProducts.map(product => (
        <div key={product.id} className="bg-white p-4 rounded shadow">
          <img
            src={product.image}
            alt={product.name}
            className="w-50 h-50 object-cover mb-2"
          />
          <h2 className="text-lg text-center font-semibold">{product.name}</h2>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-orange-500 font-semibold mt-2">${product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
