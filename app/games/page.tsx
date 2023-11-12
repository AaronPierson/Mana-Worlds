
import Link from 'next/link';
import Image from 'next/image';

const games = [
  {
    id: 1,
    title: 'Shinobi Sprint',
    description: 'Description of Game 1',
    image: '/images/game1.jpg',
  },
  {
    id: 2,
    title: 'Game 2',
    description: 'Description of Game 2',
    image: '/images/game2.jpg',
  },
  {
    id: 3,
    title: 'Game 3',
    description: 'Description of Game 3',
    image: '/images/game3.jpg',
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
                <h2 className="text-lg font-bold mb-2">{game.title}</h2>
                <p className="text-gray-600">{game.description}</p>
                <Link href={`/games/${game.id}`}>
                    Play now
                </Link>
            </div>
            </div>
        ))}
        </div>
    </div>
);
}
