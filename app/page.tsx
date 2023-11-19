// Import necessary modules and styles
import Image from 'next/image';
import Link from 'next/link';

// Import your company logo image
import logoImage from '../public/imgs/logos/blob.svg';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-white">
      {/* Hero section */}
      <section className="hero bg-cyan-950 w-full min-h-screen flex flex-col items-center justify-center text-white">
        <div className="text-center">
          {/* <div className="max-w-md"> */}
          <div className="">

            <Image src={logoImage} alt="Mana Worlds" width={500} height={500} />
            <h1 className="text-4xl font-bold">Mana Worlds</h1>
            <p className="py-6">Innovation in Gaming</p>
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="text-center bg-zinc-50 w-full h-fit flex flex-col items-center justify-center text-cyan-950">
        <h2 className="text-2xl font-bold m-5">Who is Mana Worlds</h2>
        <div className='flex flex-col md:flex-row w-full m-10 items-center'>
          <div className="w-full md:w-1/2" >
            <Image className="m-auto" src="/imgs/Icons/accent1-transparent.png" alt="Company Logo" width={400} height={400} />
          </div>

          <div className='md:divider md:divider-horizontal'></div>

          <div className='w-full md:w-1/2 md:m-8 text-left'>
            <p className="text-md m-4">
              Mana Worlds is a software development company that strives to create unforgettable gaming experiences. 
              We are passionate about gaming and are committed to delivering the best gaming experiences to our players. Our team of is made up of talented developers, designers, and gamers who work together to create games that are both fun and challenging. 
              We believe that gaming is more than just a hobby; its a way of life. 
              Thats why we are dedicated to creating games that are not only entertaining but also meaningful. 
              Whether youre a casual gamer or a hardcore gamer, we have something for everyone. 
              Join us on our journey to create the best gaming experiences in the world.
            </p>
            <Link className=" m-4" href="/about">
              <div className="bg-cyan-800 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded mt-4 inline-block">
                More About Us
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Other Games section */}
      <section className="text-center bg-cyan-950 w-full h-80 flex flex-col items-center justify-center text-white">
        <p className="text-lg  m-4">Explore our diverse portfolio of games that cater to every gaming taste.</p>
        <Link href="/games">
          <div className="bg-cyan-800 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded mt-4 inline-block">
            View Our Games
          </div>
        </Link>
      </section>

      {/* Community & News section */}
      <section className=" bg-zinc-50 w-full h-120">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 m-10 justify-items-center">
          <div className="card md:w-64 lg:w-96 my-6 bg-cyan-950 text-primary-content">
            <div className="card-body items-center text-center">
              <h2 className="card-title">News</h2>
              <p className="text-lg">Stay in the loop with the latest news, updates, and announcements from Your Game Company Name.</p>
              <Link href="/news">
                <div className="bg-cyan-800 hover:bg-cyan-700 font-bold py-2 px-4 rounded mt-4 inline-block">
                  Read News
                </div>
              </Link>      
            </div>
          </div>
          <div className="card md:w-64 lg:w-96 my-6 bg-cyan-950 text-primary-content">
            <div className="card-body items-center text-center">
              <h2 className="card-title">Community</h2>
              <p className="text-lg">Join our gaming community to connect with fellow gamers, share experiences, and stay updated.</p>
              <Link target="" href="https://forum.manaworlds.com/">
                <div className="bg-cyan-800 hover:bg-cyan-700  font-bold py-2 px-4 rounded mt-4 inline-block">
                  Join Community
                </div>
              </Link>    
            </div>
          </div>
        </div>

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
