export default function HeroSection() {
    return (
        <>
        <section className="bg-[#002366] text-white py-12 px-6 shadow-md border-6 border-orange-400">
            <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-orange-400">
                Welcome to <span className="text-white">RhinoPulse</span>
                </h1>
                <p className="text-lg md:text-xl mb-2">
                Discover everything the Internet is saying about <strong>Indian Oil Corporation</strong>.
                </p>
                <p className="text-md text-orange-200 italic">
                Stats • News • Social Feeds • Market Buzz — All in one place.
                </p>
            </div>
        </section>
        <div className="h-12 bg-gradient-to-b from-[#FF9933] to-white dark:to-gray-100"> </div>
        <div className="h-12 bg-gradient-to-b from-gray-100 to-[#138808]"> </div>
        </>
    )
}