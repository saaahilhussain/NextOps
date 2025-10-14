"use client";
import marketingServices from "@/data/services.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

interface Services {
    id: number,
    title: string,
    slug: string,
    description: string,
    isFeatured: boolean,
    image: string
}

export default function FeaturedServices() {
    const services = marketingServices.services.filter((service:Services) => service.isFeatured);
    return (
        <div className="py-12 bg-gray-900">
            <div>
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Features Services</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Check them out today!</p>
                </div>
            </div>
            <div className="mt-10 mx-8">
                <div className="mt-10 flex flex-wrap justify-center gap-8">
                    {services.map((service:Services) => (
                        <div key={service.id} className="flex justify-center">
                            <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm" >
                                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                    <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 font-bold">{service.title}</p>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow font-light">{service.description}</p>
                                    <Link href={`/services/${service.slug}`} className="mt-4">Explore more</Link>
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>

            </div>
            <div className="mt-20 text-center">
                <Link href={"/courses"} className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
                View all courses
                </Link>
            </div>
        </div>
    )
}