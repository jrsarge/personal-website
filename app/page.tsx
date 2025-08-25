// Import Components
import Link from "next/link";

// Hero Header
function HeroBlock() {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                        Jacob Sargent
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-light">
                        Master of Information Systems Student & Software Developer
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <div className="bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-md">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">🎓 BYU Graduate Student</span>
                        </div>
                        <div className="bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-md">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">🏆 National Competition Winner</span>
                        </div>
                        <div className="bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-md">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">💻 Full-Stack Developer</span>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            href="/resume" 
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg"
                        >
                            View Resume
                        </Link>
                        <Link 
                            href="/projects" 
                            className="border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
                        >
                            View Projects
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

// Content
export default function Home() {
    return (
        <main> 
            <HeroBlock />
        </main>
    );
}



