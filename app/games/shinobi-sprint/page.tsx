import Image from 'next/image';

const ShinobiSprintPage = () => {
    const game = {
        title: "Shinobi Sprint",
        description: "A fast-paced ninja Platformer game.",
        developer: "Mana Worlds",
        publisher: "Mana Worlds",
        releaseDate: "TBD 2024",
        platforms: ["PC", "Android", "Web"],
        genres: ["Platformer"],
        tags: [ "Arcade", "Fast-Paced"],
        price: "Free",
        discount: "10%",
        image: '/imgs/games/sprint.png',
    };

    return (
        <>
            <div className="flex flex-col bg-zinc-50 text-cyan-700 md:flex-row ">
                <div className="md:w-1/2 p-4">
                    <Image src={game.image} width={500} height={500} alt={game.title} className="w-full" />
                </div>
                <div className="md:w-1/2 p-4">
                    <h1 className="text-3xl font-bold mb-2">{game.title}</h1>
                    <p className="text-gray-700 mb-4">{game.description}</p>
                    <div className="flex mb-4">
                        <div className="w-1/2">
                            <p className="text-cyan-700 font-bold">Developer:</p>
                            <p className="text-gray-700">{game.developer}</p>
                        </div>
                        <div className="w-1/2">
                            <p className="text-cyan-700 font-bold">Publisher:</p>
                            <p className="text-gray-700">{game.publisher}</p>
                        </div>
                    </div>
                    <div className="flex mb-4">
                        <div className="w-1/2">
                            <p className="text-cyan-700 font-bold">Release Date:</p>
                            <p className="text-gray-700">{game.releaseDate}</p>
                        </div>
                        <div className="w-1/2">
                            <p className="text-cyan-700 font-bold">Platforms:</p>
                            <p className="text-gray-700">{game.platforms.join(", ")}</p>
                        </div>
                    </div>
                    <div className="flex mb-4">
                        <div className="w-1/2">
                            <p className="text-cyan-700 font-bold">Genres:</p>
                            <p className="text-gray-700">{game.genres.join(", ")}</p>
                        </div>
                        <div className="w-1/2">
                            <p className="text-cyan-700 font-bold">Tags:</p>
                            <p className="text-gray-700">{game.tags.join(", ")}</p>
                        </div>
                    </div>
                    <div className="flex mb-4">
                        <div className="w-1/2">
                            <p className="text-cyan-700 font-bold">Price:</p>
                            <p className="text-gray-700">{game.price}</p>
                        </div>
                        {/* <div className="w-1/2">
                            <p className="text-gray-700 font-bold">Discount:</p>
                            <p className="text-gray-700">{game.discount}</p>
                        </div> */}
                    </div>
                    {/* <a href="/" download className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block">
                        Play
                    </a> */}
                    <iframe className='w-auto'  src="https://itch.io/embed/2375646?dark=true" width="552" height="167">
                        <a href="https://aaen.itch.io/shinobi-sprint">testing by Aaen</a>
                    </iframe>
                </div>
            </div>
        </>
    );
};

export default ShinobiSprintPage;
