
const ShinobiSprintPage = () => {
    const game = {
        title: "Shinobi Sprint",
        description: "A fast-paced ninja racing game.",
        developer: "Mana Worlds",
        publisher: "Mana Worlds",
        releaseDate: "2022-01-01",
        platforms: ["PC", "Xbox",],
        genres: ["Platformer", "Action"],
        tags: ["Ninja", "Arcade", "Fast-Paced"],
        metacriticScore: 85,
        userScore: 8.5,
        price: "Free",
        discount: "10%",
        image: '/imgs/games/sprint.png',
    };

    return (
        <>
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 p-4">
                    <img src={game.image} alt={game.title} className="w-full" />
                </div>
                <div className="md:w-1/2 p-4">
                    <h1 className="text-3xl font-bold mb-2">{game.title}</h1>
                    <p className="text-gray-700 mb-4">{game.description}</p>
                    <div className="flex mb-4">
                        <div className="w-1/2">
                            <p className="text-gray-700 font-bold">Developer:</p>
                            <p className="text-gray-700">{game.developer}</p>
                        </div>
                        <div className="w-1/2">
                            <p className="text-gray-700 font-bold">Publisher:</p>
                            <p className="text-gray-700">{game.publisher}</p>
                        </div>
                    </div>
                    <div className="flex mb-4">
                        <div className="w-1/2">
                            <p className="text-gray-700 font-bold">Release Date:</p>
                            <p className="text-gray-700">{game.releaseDate}</p>
                        </div>
                        <div className="w-1/2">
                            <p className="text-gray-700 font-bold">Platforms:</p>
                            <p className="text-gray-700">{game.platforms.join(", ")}</p>
                        </div>
                    </div>
                    <div className="flex mb-4">
                        <div className="w-1/2">
                            <p className="text-gray-700 font-bold">Genres:</p>
                            <p className="text-gray-700">{game.genres.join(", ")}</p>
                        </div>
                        <div className="w-1/2">
                            <p className="text-gray-700 font-bold">Tags:</p>
                            <p className="text-gray-700">{game.tags.join(", ")}</p>
                        </div>
                    </div>
                    {/* <div className="flex mb-4">
                        <div className="w-1/2">
                            <p className="text-gray-700 font-bold">Metacritic Score:</p>
                            <p className="text-gray-700">{game.metacriticScore}</p>
                        </div>
                        <div className="w-1/2">
                            <p className="text-gray-700 font-bold">User Score:</p>
                            <p className="text-gray-700">{game.userScore}</p>
                        </div>
                    </div> */}
                    <div className="flex mb-4">
                        <div className="w-1/2">
                            <p className="text-gray-700 font-bold">Price:</p>
                            <p className="text-gray-700">{game.price}</p>
                        </div>
                        {/* <div className="w-1/2">
                            <p className="text-gray-700 font-bold">Discount:</p>
                            <p className="text-gray-700">{game.discount}</p>
                        </div> */}
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Play Now
                    </button>
                </div>
            </div>
        </>
    );
};

export default ShinobiSprintPage;