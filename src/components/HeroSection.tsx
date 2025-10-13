import Link from "next/link";

export default function HeroSection() {
    return <div className="h-[20rem] md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relateive overflow-hidden mx-auto py-10 md:py-0">
        
        <div className="p-4 relative z-10 w-full text-center">
            <h1 className="mt-20 md:mt-10 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 pb-2">Ignite Your Digital Presence</h1>
            <p className="mt-4 font-extralight text-base md:text-lg text-neutral-200 max-w-lg mx-auto">We provide strategic solutions to drive growth and transform your online potential into success.</p>
            <div className="mt-4 font-light">
                <Link href={"/services"}>Explore Our Services</Link>
            </div>
        </div>
    </div>
}