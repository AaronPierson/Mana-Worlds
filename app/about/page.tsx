import Head from 'next/head';
import Image from 'next/image';
import { FC } from 'react';
import { Metadata } from 'next';

export const metadata : Metadata = {
    title: 'About',
    description: 'Mana Worlds About Page',
}

const AboutPage: FC = () => {
    return (
        <div className="container mx-auto py-8">
            <div className="flex flex-col items-center m-5 justify-center min-h-screen py-8">
                <h1 className="text-4xl font-bold mb-4">About Mana Worlds</h1>
                <div className="flex flex-col md:flex-row items-center justify-center max-w-4xl">
                    <div className="md:w-1/2 p-4">
                        <p className="text-xl mb-4">
                            Mana Worlds is a game company that specializes in creating immersive and engaging
                            gaming experiences for players of all ages. Our team of experienced developers and
                            designers work tirelessly to create games that are not only fun to play, but also
                            visually stunning and technically impressive.
                        </p>
                        <p className="text-xl">
                            Our mission is to create games that transport players to new worlds and allow them to
                            experience adventures they never thought possible. We believe that games have the
                            power to inspire, educate, and entertain, and we strive to create games that do all
                            three.
                        </p>
                    </div>
                    <div className="md:w-1/2 p-4">
                        <Image
                            src="/imgs/logos/blob2.svg"
                            alt="Mana Worlds team"
                            width={600}
                            height={400}
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
