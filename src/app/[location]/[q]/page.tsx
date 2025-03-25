import Header from '@/components/Header';
import RestaurantItem from '@/components/RestaurantItem';
import { getAllTags, locations, searchRestaurants } from '@/data/restaurants';
import { Metadata } from 'next';
import React, { cache } from 'react'
interface PageParams {
    q: string;
    location: string;
}

export async function generateStaticParams() {
    const allTags = await getAllTags({
        // If you have very many pages, you can only render a subset at compile-time. The rest will be rendered & cached at first access.
        // limit: 10
    });
    return allTags
        .map((tag) =>
            locations.map((location) => ({
                location,
                q: tag,
            })),
        )
        .flat();
}

const getRestaurants = cache(searchRestaurants)

export async function generateMetadata({ params }: { params: Promise<PageParams> }): Promise<Metadata> {
    const { q = '', location = '' } = await params;
    const qDecoded = decodeURIComponent(q);
    const locationDecoded = decodeURIComponent(location);
    const results = await getRestaurants(qDecoded, locationDecoded);
    return {
        title: `Top ${results.length} ${qDecoded} Restaurants near ${locationDecoded} - Updated ${new Date().getFullYear()}`,
        description: `Find the best ${qDecoded} Restaurants near ${locationDecoded}`,
    };
}

export default async function Page({ params }: { params: Promise<PageParams> }) {
    const { q = '', location = '' } = await params;
    const qDecoded = decodeURIComponent(q);
    const locationDecoded = decodeURIComponent(location);

    const results = await getRestaurants(qDecoded, locationDecoded);

    return (
        <div className='flex flex-col'>
            <Header q={qDecoded} location={locationDecoded} />
            <div className="container mx-auto space-y-8 px-4 py-8">
                <p className="text-center font-semibold">
                    Showing {results.length} results for {`"${qDecoded}"`} near {locationDecoded}
                </p>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {results.map((restaurant) => (
                        <RestaurantItem key={restaurant.id} restaurant={restaurant} />
                    ))}
                </div>
            </div>
        </div>
    )
}

