import Head from 'next/head';
import Image from "next/image";
import artist from "@/img/artist.jpeg";

const scheduleData = [
  {
    id: 1,
    artistName: "Alexandra Blake",
    description:
      "Alexandra Blake is a singer-songwriter known for her soulful voice and introspective lyrics. With a blend of acoustic folk and modern pop, her music touches the heart and soul of listeners worldwide.",
    genre: "Pop",
    time: "September 30, 2024 - 7:00 PM",
    image: artist,
  },
  {
    id: 2,
    artistName: "The Midnight Gypsies",
    description:
      "An eclectic band that fuses elements of classic rock with modern blues, The Midnight Gypsies have a reputation for electrifying live performances, driven by their gritty guitar solos and soulful vocals.",
    genre: "Blues Rock",
    time: "September 30, 2024 - 9:00 PM",
    image: artist,
  },
  {
    id: 3,
    artistName: "Eleanor Rivers",
    description:
      "With hauntingly beautiful melodies and a voice reminiscent of old-world folk traditions, Eleanor Rivers creates music that takes listeners on a journey through time and emotion.",
    genre: "Indie Folk",
    time: "October 1, 2024 - 6:00 PM",
    image: artist,
  },
  {
    id: 4,
    artistName: "Marcus Stone",
    description:
      "A dynamic and versatile jazz pianist, Marcus Stone has captivated audiences with his ability to blend classical techniques with modern jazz improvisations. His live performances are a masterclass in musicality.",
    genre: "Jazz",
    time: "October 1, 2024 - 8:00 PM",
    image: artist,
  },
  {
    id: 5,
    artistName: "Steve Duval",
    description:
      "A rising star in the world of electronic music, Steve Duval combines pulsing beats with ethereal vocals to create immersive soundscapes. His unique style has redefined the boundaries of the genre.",
    genre: "Electronic",
    time: "October 2, 2024 - 5:00 PM",
    image: artist,
  },
];

export default function Schedule() {
  return (
    <>
      <Head>
        <title>Performance Schedule | Music Festival</title>
        <meta name="description" content="Discover the performance schedule of our Music Festival featuring diverse artists across various genres. Join us for an unforgettable experience!" />
        <meta property="og:title" content="Performance Schedule | Music Festival" />
        <meta property="og:description" content="Join us for an unforgettable experience at our Music Festival featuring talented artists from various genres." />
        <meta property="og:image" content="https://www.yourdomain.com/images/festival.jpg" />
        <meta property="og:url" content="https://www.yourdomain.com/schedule" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Performance Schedule | Music Festival" />
        <meta name="twitter:description" content="Join us for an unforgettable experience at our Music Festival featuring talented artists from various genres." />
        <meta name="twitter:image" content="https://www.yourdomain.com/images/festival.jpg" />
      </Head>
      <main className="py-16 px-8 bg-gray-100">
        <section className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Performance Schedule</h2>
          <div className="flex flex-col space-y-10">
            {scheduleData.map((artist) => (
              <div
                key={artist.id}
                className="flex flex-col md:flex-row md:items-center bg-white shadow-lg rounded-lg p-6 transition-transform duration-300 hover:scale-105"
              >
                {/* Artist Image */}
                <div className="w-full md:w-1/3 mb-4 md:mb-0">
                  <Image
                    src={artist.image}
                    alt={artist.artistName}
                    width={300}
                    height={300}
                    className="rounded-lg object-cover shadow-md"
                  />
                </div>
                
                {/* Artist Info */}
                <div className="w-full md:w-2/3 md:pl-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-1">{artist.artistName}</h3>
                  <p className="text-sm text-gray-600 mb-4">{artist.description}</p>
                  <p className="text-sm font-bold text-gray-500 mb-1">Genre: <span className="text-gray-800">{artist.genre}</span></p>
                  <p className="text-sm text-gray-500">{artist.time}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
