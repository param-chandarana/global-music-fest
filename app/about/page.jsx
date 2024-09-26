import Head from "next/head";
import Image from "next/image";
import festivalImage1 from "@/img/festival1.jpeg";
import festivalImage2 from "@/img/festival2.jpeg";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Global Music Fest</title>
        <meta name="description" content="Learn about the history, vision, and memorable moments of the Global Music Fest. Join us in celebrating music, art, and community!" />
        <meta property="og:title" content="About Us | Global Music Fest" />
        <meta property="og:description" content="Discover the journey of the Global Music Fest, an annual celebration of music, art, and community since 2010." />
        <meta property="og:image" content="https://www.yourdomain.com/images/festival.jpg" />
        <meta property="og:url" content="https://www.yourdomain.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | Global Music Fest" />
        <meta name="twitter:description" content="Learn about the history and vision of the Global Music Fest. Celebrate music and creativity with us!" />
        <meta name="twitter:image" content="https://www.yourdomain.com/images/festival.jpg" />
      </Head>
      <main className="py-16 px-8 bg-gray-100">
        <section className="container mx-auto text-gray-800">
          <h1 className="text-5xl font-bold text-center mb-12">About the Festival</h1>
          
          <div className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">Our History</h2>
            <p className="text-md mb-4">
              Founded in 2010, the Global Music Fest has become a beloved annual event that celebrates music, art, and community. 
              What began as a small gathering of local artists has blossomed into a vibrant festival attracting thousands of visitors from around the globe. 
              Our mission is to provide a platform for emerging artists, foster creativity, and create lasting memories for all who attend.
            </p>
            <p className="text-md mb-4">
              Over the years, we have featured renowned artists across various genres, showcasing their talent and passion. 
              Each year, we strive to improve our festival experience, focusing on sustainability, inclusivity, and community engagement.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
            <p className="text-md mb-4">
              We envision a world where music and art bring people together, transcending boundaries and creating connections. 
              Our goal is to inspire creativity, promote local talent, and celebrate the diverse cultures that enrich our lives.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">Memorable Moments</h2>
            <p className="text-md mb-4">
              Every year, the Global Music Fest hosts unforgettable performances, workshops, and community activities. 
              Here are some highlights from previous years:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src={festivalImage1}
                alt="Festival Moment 1"
                width={500}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src={festivalImage2}
                alt="Festival Moment 2"
                width={500}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">Join Us</h2>
            <p className="text-md mb-4">
              We invite you to be a part of our journey. Whether you&apos;re an artist, a volunteer, or an enthusiastic attendee, 
              there&apos;s a place for you at the Global Music Fest. Come experience the magic and joy of creativity with us!
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
