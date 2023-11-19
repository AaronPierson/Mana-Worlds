
import Link from 'next/link';
import Image from 'next/image';

import { Metadata } from 'next';

export const metadata : Metadata = {
    title: 'Games',
    description: 'Mana Worlds Games',
}

const games = [
  {
    id: 1,
    title: 'Shinobi Sprint',
    description: 'Navigating meticulously designed levels that progressively accelerate, turning each completion into an adrenaline-packed challenge.',
    image: '/imgs/games/sprint.png',
    link: '/shinobi-sprint',
  },
];

export default function GamesPage() {
return (
    <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Games</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {games.map((game) => (
            <div key={game.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
                <Image src={game.image} alt={game.title} layout="fill" objectFit="cover" />
            </div>
            <div className="p-4">
                <h2 className="text-lg text-gray-600 font-bold mb-2">{game.title}</h2>
                <p className="text-gray-600">{game.description}</p>
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-3">
                  <Link href={`/games/${game.link}`}>
                      Play now
                  </Link>
                </button>

            </div>
            </div>
        ))}
        </div>
    </div>
);
}
