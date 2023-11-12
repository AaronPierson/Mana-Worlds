// Import necessary modules and styles
import Image from 'next/image';
import Link from 'next/link';

// Import your company logo image
import logoImage from '../public/imgs/logos/blob.svg';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-white">
      {/* Header section */}
      <section className="text-center bg-cyan-950 w-full h-80 flex flex-col items-center justify-center text-white">
      <header className="mb-8">
        <Image src={logoImage} alt="Mana Worlds" width={350} height={350} />
        {/* <h1 className="text-4xl font-bold">Mana Worlds</h1> */}
        <p className="mt-2">Innovation in Gaming</p>
      </header>
      </section>

      {/* About section */}
      <section className="text-center bg-zinc-50 w-full h-fit flex flex-col items-center justify-center text-cyan-950">
        <h2 className="text-2xl font-bold m-5">Who is Mana Worlds</h2>
        <div className='flex flex-row w-full columns-3 m-10 items-center'>
          <div className="w-1/2" >
            <Image className="m-auto" src="/imgs/Icons/accent1-transparent.png" alt="Company Logo" width={400} height={400} />
          </div>

          <div className="divider divider-horizontal"></div>

          <div className='w-1/2 m-8 text-left'>
            <p className="text-md m-4">
              Mana Worlds is a software development company that strives to create unforgettable gaming experiences. 
              We are passionate about gaming and are committed to delivering the best gaming experiences to our players. Our team of is made up of talented developers, designers, and gamers who work together to create games that are both fun and challenging. 
              We believe that gaming is more than just a hobby; its a way of life. 
              Thats why we are dedicated to creating games that are not only entertaining but also meaningful. 
              Whether youre a casual gamer or a hardcore gamer, we have something for everyone. 
              Join us on our journey to create the best gaming experiences in the world.
            </p>
            <Link href="/about">
              <div className="bg-cyan-800 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded mt-4 inline-block">
                More About Us
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Other Games section */}
      <section className="text-center bg-cyan-950 w-full h-80 flex flex-col items-center justify-center text-white">
        <p className="text-lg">Explore our diverse portfolio of games that cater to every gaming taste.</p>
        <Link href="/games">
          <div className="bg-cyan-800 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded mt-4 inline-block">
            View Our Games
          </div>
        </Link>
      </section>

      {/* Community section */}
      <section className="text-center bg-zinc-50 w-full h-80 flex flex-col items-center justify-center text-cyan-950">
        <p className="text-lg">Join our gaming community to connect with fellow gamers, share experiences, and stay updated.</p>
        <Link href="/community">
          <div className="bg-cyan-800 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded mt-4 inline-block">
            Join Community
          </div>
        </Link>
      </section>

      {/* News section */}
      <section className="text-center bg-cyan-950 w-full h-80 flex flex-col items-center justify-center text-white">
        <p className="text-lg">Stay in the loop with the latest news, updates, and announcements from Your Game Company Name.</p>
        <Link href="/news">
          <div className="bg-cyan-800 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded mt-4 inline-block">
            Read News
          </div>
        </Link>
      </section>

      {/* Media section (Optional) */}
      {/* Add this section if you want a dedicated page for media like images, videos, etc. */}
      {/* <section className="text-center mb-8">
        <p className="text-lg">Explore our media gallery featuring stunning visuals and gameplay footage.</p>
        <Link href="/media">
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 inline-block">
            View Media
          </div>
        </Link>
      </section> */}

    </div>
  );
}
