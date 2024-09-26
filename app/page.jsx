import Image from "next/image";
import Link from "next/link";
import hero from "../img/hero.jpg";
import artist from "../img/artist.jpeg";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-screen bg-black text-white flex flex-col justify-center items-center">
        {/* Background Image or Video */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden hero-image">
          <Image
            src={hero}
            alt="Event Background"
            layout="fill"
            objectFit="cover"
            className="opacity-70"
          />
        </div>
        {/* Jumbotron Text */}
        <div className="relative z-10 text-center hero-content">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            The Global Music Fest
          </h1>
          <p className="text-lg md:text-xl mb-2">
            The ultimate music experience is here.
          </p>

          {/* Event Dates */}
          <p className="text-md md:text-lg font-semibold mb-6">
            September 30 - October 2, 2024
          </p>

          {/* CTA Button */}
          <Link href="/tickets">
            <button className="bg-white text-indigo-800 transition-colors duration-300 ease-in-out px-6 py-3 rounded-full font-semibold text-lg hover:bg-indigo-800 hover:text-white border-none">
              Get Tickets
            </button>
          </Link>
        </div>
      </section>

      {/* About the Event Section */}
      <section className="py-16 px-8 bg-gray-100 text-gray-800">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div>
            <Image
              src={artist} // Replace with your about image source
              alt="About the Event"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
          {/* About Text */}
          <div>
            <h2 className="text-4xl font-bold mb-4">About the Event</h2>
            <p className="text-lg">
              Join us at the Grand Music Fest for a day filled with incredible
              performances, immersive experiences, and memories that will last a
              lifetime. Our event brings together the best artists from around
              the world for an unforgettable experience.
            </p>
          </div>
        </div>
      </section>

      {/* Artists Section */}
      <section className="py-16 px-8 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Featured Artists</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Artist 1 */}
            <div className="flex flex-col items-center">
              <Image
                src={artist} // Replace with artist image
                alt="Artist 1"
                width={300}
                height={300}
                className="rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">Artist 1</h3>
            </div>
            {/* Artist 2 */}
            <div className="flex flex-col items-center">
              <Image
                src={artist} // Replace with artist image
                alt="Artist 2"
                width={300}
                height={300}
                className="rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">Artist 2</h3>
            </div>
            {/* Artist 3 */}
            <div className="flex flex-col items-center">
              <Image
                src={artist} // Replace with artist image
                alt="Artist 3"
                width={300}
                height={300}
                className="rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">Artist 3</h3>
            </div>
            {/* Artist 4 */}
            <div className="flex flex-col items-center">
              <Image
                src={artist} // Replace with artist image
                alt="Artist 4"
                width={300}
                height={300}
                className="rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">Artist 4</h3>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
