"use client"
// Import Components
import Link from "next/link";

// Hero Header
function HeroBlock() {
    return (
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-gray-900">
            <style jsx>{`
                .lava-lamp {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                }
                
                .blob {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(40px);
                    mix-blend-mode: multiply;
                    animation-iteration-count: infinite;
                    animation-timing-function: ease-in-out;
                }
                
                .dark .blob {
                    mix-blend-mode: lighten;
                }
                
                .blob1 {
                    width: 380px;
                    height: 380px;
                    background: linear-gradient(45deg, #bfdbfe 0%, #93c5fd 100%);
                    top: -15%;
                    left: -10%;
                    animation: float1 45s infinite;
                }
                
                .blob2 {
                    width: 120px;
                    height: 120px;
                    background: linear-gradient(45deg, #f9a8d4 0%, #e879f9 100%);
                    top: 110%;
                    right: -15%;
                    animation: float2 52s infinite;
                }
                
                .blob3 {
                    width: 280px;
                    height: 280px;
                    background: linear-gradient(45deg, #a7f3d0 0%, #6ee7b7 100%);
                    bottom: -20%;
                    left: 110%;
                    animation: float3 58s infinite;
                }
                
                .blob4 {
                    width: 450px;
                    height: 450px;
                    background: linear-gradient(45deg, #fde68a 0%, #fbbf24 100%);
                    top: -20%;
                    right: 110%;
                    animation: float4 41s infinite;
                }
                
                .blob5 {
                    width: 90px;
                    height: 90px;
                    background: linear-gradient(45deg, #f9a8d4 0%, #fb7185 100%);
                    bottom: 110%;
                    right: -10%;
                    animation: float5 49s infinite;
                }
                
                .blob6 {
                    width: 340px;
                    height: 340px;
                    background: linear-gradient(45deg, #a5b4fc 0%, #818cf8 100%);
                    top: 50%;
                    left: -25%;
                    animation: float6 47s infinite;
                }
                
                .blob7 {
                    width: 150px;
                    height: 150px;
                    background: linear-gradient(45deg, #bef264 0%, #a3e635 100%);
                    top: -10%;
                    left: 50%;
                    animation: float7 55s infinite;
                }
                
                .blob8 {
                    width: 420px;
                    height: 420px;
                    background: linear-gradient(45deg, #fdba74 0%, #f59e0b 100%);
                    bottom: -15%;
                    right: 50%;
                    animation: float8 44s infinite;
                }
                
                .blob9 {
                    width: 80px;
                    height: 80px;
                    background: linear-gradient(45deg, #86efac 0%, #4ade80 100%);
                    top: 30%;
                    right: -20%;
                    animation: float9 51s infinite;
                }
                
                .blob10 {
                    width: 320px;
                    height: 320px;
                    background: linear-gradient(45deg, #d1d5db 0%, #9ca3af 100%);
                    bottom: 30%;
                    left: -15%;
                    animation: float10 48s infinite;
                }
                
                .blob11 {
                    width: 250px;
                    height: 250px;
                    background: linear-gradient(45deg, #e879f9 0%, #c084fc 100%);
                    top: 70%;
                    left: 110%;
                    animation: float11 56s infinite;
                }
                
                .blob12 {
                    width: 110px;
                    height: 110px;
                    background: linear-gradient(45deg, #5eead4 0%, #2dd4bf 100%);
                    top: 40%;
                    left: -30%;
                    animation: float12 59s infinite;
                }
                
                .blob13 {
                    width: 390px;
                    height: 390px;
                    background: linear-gradient(45deg, #fed7aa 0%, #fb923c 100%);
                    bottom: -25%;
                    right: 120%;
                    animation: float13 43s infinite;
                }
                
                .blob14 {
                    width: 70px;
                    height: 70px;
                    background: linear-gradient(45deg, #cbd5e1 0%, #94a3b8 100%);
                    top: -25%;
                    left: 30%;
                    animation: float14 62s infinite;
                }
                
                .blob15 {
                    width: 300px;
                    height: 300px;
                    background: linear-gradient(45deg, #ddd6fe 0%, #a78bfa 100%);
                    bottom: 50%;
                    right: -35%;
                    animation: float15 50s infinite;
                }
                
                .blob16 {
                    width: 480px;
                    height: 480px;
                    background: linear-gradient(45deg, #e5e7eb 0%, #6b7280 100%);
                    top: 120%;
                    left: 20%;
                    animation: float16 42s infinite;
                }
                
                .blob17 {
                    width: 130px;
                    height: 130px;
                    background: linear-gradient(45deg, #fde047 0%, #eab308 100%);
                    top: 15%;
                    right: 130%;
                    animation: float17 61s infinite;
                }
                
                .blob18 {
                    width: 95px;
                    height: 95px;
                    background: linear-gradient(45deg, #7dd3fc 0%, #0ea5e9 100%);
                    bottom: -30%;
                    left: 80%;
                    animation: float18 64s infinite;
                }
                
                .blob19 {
                    width: 410px;
                    height: 410px;
                    background: linear-gradient(45deg, #f3f4f6 0%, #d1d5db 100%);
                    top: 80%;
                    right: -40%;
                    animation: float19 53s infinite;
                }
                
                .blob20 {
                    width: 180px;
                    height: 180px;
                    background: linear-gradient(45deg, #fda4af 0%, #f43f5e 100%);
                    bottom: 120%;
                    left: -20%;
                    animation: float20 57s infinite;
                }
                
                @keyframes float1 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    25% { transform: translate(120vw, 50vh) scale(1.2); }
                    50% { transform: translate(80vw, 120vh) scale(0.8); }
                    75% { transform: translate(40vw, -20vh) scale(1.1); }
                }
                
                @keyframes float2 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    25% { transform: translate(-50vw, -80vh) scale(1.3); }
                    50% { transform: translate(-120vw, 30vh) scale(0.7); }
                    75% { transform: translate(20vw, -120vh) scale(1.05); }
                }
                
                @keyframes float3 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    30% { transform: translate(-80vw, -50vh) scale(1.4); }
                    60% { transform: translate(-150vw, 80vh) scale(0.6); }
                    90% { transform: translate(-40vw, 120vh) scale(1.15); }
                }
                
                @keyframes float4 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(-120vw, 100vh) scale(0.9); }
                    66% { transform: translate(-80vw, 140vh) scale(1.25); }
                }
                
                @keyframes float5 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    25% { transform: translate(150vw, -70vh) scale(1.1); }
                    50% { transform: translate(100vw, -120vh) scale(0.95); }
                    75% { transform: translate(50vw, -50vh) scale(1.05); }
                }
                
                @keyframes float6 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    20% { transform: translate(140vw, -30vh) scale(1.2); }
                    40% { transform: translate(120vw, 50vh) scale(0.8); }
                    60% { transform: translate(80vw, -60vh) scale(1.15); }
                    80% { transform: translate(40vw, 20vh) scale(0.9); }
                }
                
                @keyframes float7 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    30% { transform: translate(-40vw, 130vh) scale(1.3); }
                    60% { transform: translate(60vw, 120vh) scale(0.7); }
                    90% { transform: translate(20vw, 80vh) scale(1.1); }
                }
                
                @keyframes float8 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    25% { transform: translate(-60vw, -100vh) scale(1.25); }
                    50% { transform: translate(-120vw, -80vh) scale(0.75); }
                    75% { transform: translate(-80vw, -40vh) scale(1.05); }
                }
                
                @keyframes float9 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    35% { transform: translate(-140vw, 60vh) scale(1.4); }
                    70% { transform: translate(-100vw, 120vh) scale(0.6); }
                }
                
                @keyframes float10 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    20% { transform: translate(130vw, -40vh) scale(1.15); }
                    40% { transform: translate(160vw, 30vh) scale(0.85); }
                    60% { transform: translate(90vw, 100vh) scale(1.25); }
                    80% { transform: translate(50vw, 60vh) scale(0.95); }
                }
                
                @keyframes float11 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    25% { transform: translate(-80vw, -70vh) scale(1.2); }
                    50% { transform: translate(-150vw, -30vh) scale(0.8); }
                    75% { transform: translate(-120vw, 40vh) scale(1.1); }
                }
                
                @keyframes float12 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    30% { transform: translate(170vw, -40vh) scale(1.35); }
                    60% { transform: translate(130vw, 80vh) scale(0.65); }
                    90% { transform: translate(90vw, -20vh) scale(1.05); }
                }
                
                @keyframes float13 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    25% { transform: translate(-90vw, -110vh) scale(1.15); }
                    50% { transform: translate(-140vw, -70vh) scale(0.85); }
                    75% { transform: translate(-110vw, -30vh) scale(1.25); }
                }
                
                @keyframes float14 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    20% { transform: translate(-20vw, 140vh) scale(1.45); }
                    40% { transform: translate(40vw, 160vh) scale(0.55); }
                    60% { transform: translate(80vw, 100vh) scale(1.25); }
                    80% { transform: translate(60vw, 60vh) scale(0.95); }
                }
                
                @keyframes float15 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    35% { transform: translate(-160vw, 20vh) scale(1.3); }
                    70% { transform: translate(-120vw, 140vh) scale(0.7); }
                }
                
                @keyframes float16 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    25% { transform: translate(60vw, -130vh) scale(1.2); }
                    50% { transform: translate(120vw, -90vh) scale(0.8); }
                    75% { transform: translate(90vw, -50vh) scale(1.15); }
                }
                
                @keyframes float17 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(-110vw, 90vh) scale(0.9); }
                    66% { transform: translate(-170vw, 130vh) scale(1.4); }
                }
                
                @keyframes float18 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    20% { transform: translate(-70vw, -120vh) scale(1.35); }
                    40% { transform: translate(-130vw, -80vh) scale(0.65); }
                    60% { transform: translate(-100vw, -40vh) scale(1.15); }
                    80% { transform: translate(-40vw, 10vh) scale(0.85); }
                }
                
                @keyframes float19 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    30% { transform: translate(-180vw, -60vh) scale(1.25); }
                    60% { transform: translate(-140vw, 100vh) scale(0.75); }
                    90% { transform: translate(-80vw, 50vh) scale(1.05); }
                }
                
                @keyframes float20 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    25% { transform: translate(150vw, -80vh) scale(1.3); }
                    50% { transform: translate(180vw, 40vh) scale(0.7); }
                    75% { transform: translate(120vw, 110vh) scale(1.1); }
                }
            `}</style>
            
            <div className="lava-lamp">
                <div className="blob blob1"></div>
                <div className="blob blob2"></div>
                <div className="blob blob3"></div>
                <div className="blob blob4"></div>
                <div className="blob blob5"></div>
                <div className="blob blob6"></div>
                <div className="blob blob7"></div>
                <div className="blob blob8"></div>
                <div className="blob blob9"></div>
                <div className="blob blob10"></div>
                <div className="blob blob11"></div>
                <div className="blob blob12"></div>
                <div className="blob blob13"></div>
                <div className="blob blob14"></div>
                <div className="blob blob15"></div>
                <div className="blob blob16"></div>
                <div className="blob blob17"></div>
                <div className="blob blob18"></div>
                <div className="blob blob19"></div>
                <div className="blob blob20"></div>
            </div>
            
            <div className="container mx-auto px-6 text-center relative z-10">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                        Jacob Sargent
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-light">
                        Master of Information Systems Student & Product Manager
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <div className="bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-md">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">🎓 BYU Graduate Student</span>
                        </div>
                        <div className="bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-md">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">🏆 National Competition Winner</span>
                        </div>
                        <div className="bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-md">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">💻 Product Manager</span>
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



