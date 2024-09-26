"use client"


import { useState } from 'react';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    neighborhood: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Appel à l'API Google Calendar pour créer un événement
    try {
      const response = await fetch('/api/bookLesson', {  // Chemin correct
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.success) {
        alert('Votre réservation a été confirmée.');
      } else {
        alert('Erreur lors de la réservation.');
      }
    } catch (error) {
      alert('Erreur de connexion à l\'API.');
      console.log('erreur a suivre', error);
      
    }
  };

  return (
    <div className="max-w-lg mx-auto my-8 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-semibold mb-6">Réserver un cours pratique</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nom complet</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Numéro de téléphone</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Quartier</label>
          <input
            type="text"
            name="neighborhood"
            value={formData.neighborhood}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Heure</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Réserver
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;
