import React, { useState } from "react";
import heroImage from "./assets/hero.jpg"; // Make sure this file exists in /src/assets

const Card = () => {
  const goalAmount = 1000;
  const currentAmount = 700;
  const progress = (currentAmount / goalAmount) * 100;
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks, ${formData.name}! We'll get back to you at ${formData.email}.`);
    // Optionally clear form:
    setFormData({ name: "", email: "", message: "" });
  };
  
  return (
    <div className="w-full">
      {/* Hero Banner */}
      <div
        className="bg-cover bg-center h-[400px] flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="bg-black bg-opacity-60 p-8 rounded-md text-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to Smart Crowdfunding Platform 🚀
          </h1>
          <p className="text-lg mb-6">
            Empower ideas. Fund dreams. Make an impact.
          </p>
          <a
            href="/create-campaign"
            className="bg-blue-600 px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Start a Campaign
          </a>
        </div>
      </div>

      {/* Campaign Card */}
      <div className="flex justify-center items-center my-12">
        <div className="w-[60%] h-auto bg-white shadow-lg p-8 flex items-center space-x-8 rounded-lg">
          {/* Image Section */}
          <img
            src="https://via.placeholder.com/350"
            alt="Campaign Poster"
            className="w-72 h-72 object-cover"
          />

          {/* Content Section */}
          <div className="flex flex-col justify-center w-full">
            <h2 className="text-3xl font-bold">Support "Lorem Ipsum"</h2>
            <p className="text-gray-600 mt-2">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Montes primis elit ullamcorper
              purus viverra. Taciti eros congue porttitor lacinia...
            </p>

            <p className="text-lg font-semibold text-gray-700 mt-4">
              ${currentAmount} raised out of ${goalAmount}
            </p>

            <progress
              className="progress progress-secondary w-full my-2"
              value={progress}
              max="100"
            ></progress>

            <p className="text-sm text-gray-500">{progress.toFixed(2)}% funded</p>

            <button className="px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 mt-4">
              Donate
            </button>
          </div>
        </div>
      </div>

      {/* ⬇️ Contact Us Section ⬇️ */}
      <section className="bg-gray-100 py-10 px-5 mt-12 rounded-md shadow-md mx-auto w-[60%]">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-2 border border-gray-300 rounded"
              rows="4"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default Card;
