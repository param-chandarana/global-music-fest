"use client"

import Image from "next/image";
import { useState } from "react";
import image from "@/img/festival1.jpeg";

const galleryData = [
  {
    id: 1,
    title: "Serenity",
    image: image, // Replace with actual image paths
    description: "A tranquil scene of nature's beauty.",
  },
  {
    id: 2,
    title: "City Lights",
    image: image,
    description: "The vibrant pulse of the city at night.",
  },
  {
    id: 3,
    title: "Mountain Adventure",
    image: image,
    description: "An exhilarating hike through breathtaking landscapes.",
  },
  {
    id: 4,
    title: "Ocean Breeze",
    image: image,
    description: "The calming waves and sandy beaches.",
  },
  {
    id: 5,
    title: "Cultural Wonders",
    image: image,
    description: "Exploring the rich history of ancient civilizations.",
  },
  {
    id: 6,
    title: "Night Sky",
    image: image,
    description: "Stargazing under a clear night sky.",
  },
  {
    id: 6,
    title: "Night Sky",
    image: image,
    description: "Stargazing under a clear night sky.",
  },
  {
    id: 6,
    title: "Night Sky",
    image: image,
    description: "Stargazing under a clear night sky.",
  },
];

export default function Gallery() {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <main className="py-16 px-4 bg-gray-100">
      <section className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryData.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => openModal(item.image)}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={300}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for image preview */}
        {modalImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeModal}>
            <Image src={modalImage} alt="Preview" width={800} height={600} className="object-contain" />
          </div>
        )}
      </section>
    </main>
  );
}
