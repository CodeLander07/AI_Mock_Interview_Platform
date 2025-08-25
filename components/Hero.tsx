import Image from "next/image";
import Link from "next/link";
import { problems, solutions } from "@/constants";

export default function ComingSoon() {


  return (
    <div className="min-h-screen relative overflow-hidden">
    
      {/* Animated background elements */}
      <div className="absolute top-20 left-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      
      <div className="relative z-10">
        {/* Coming Soon Header */}
        {/* <div className="flex justify-center pt-8 pb-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 border border-white/20 flex items-center space-x-3">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center pulse-glow">
              <div className="w-3 h-3 bg-white rounded-full pulse-professional"></div>
            </div>
            <span className="text-white text-lg font-semibold">Coming Soon</span>
          </div>
        </div> */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo and Brand Section */}
          <div className="text-center mb-16">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-6 mb-8">
              <Image
                src="/logo.svg"
                alt="Prepmaster"
                width={40}
                height={40}
              />
              <h1 className="text-2xl  font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                PrepMaster
              </h1>
            </div>
            
            {/* Main Headlines */}
            <div className="space-y-2 mb-2">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-300">
                Practice Real Interviews With a Real AI Powered Voice Assistant.
              </h3>
            </div>

            {/* Description */}
            <div className="max-w-5xl mx-auto">
              <p className="text-xl  text-gray-300 leading-relaxed mb-8">
                The voice-driven SAAS where you can generate an personalized mock interview. Get ready for the future of interview preparation. 
                <span className="text-purple-400 font-semibold"> AI-powered Interview practice platform</span> where you 
                receive instant feedback to help you land your dream job.
              </p>
            </div>
          </div>

          {/* Problems Section */}
          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">Problem That I Identify In Real World</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900/80 to-gray-800/70 rounded-xl p-6 sm:p-8 border border-gray-700/40 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">{problem.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{problem.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions Section */}
          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-4">Our comprehensive solution addresses every pain point</h2>
            <p className="text-center text-gray-300 mb-12 text-lg"></p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900/80 to-gray-800/70 rounded-xl p-6 sm:p-8 border border-gray-700/40 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{solution.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Final Punch Line */}
          <div className="text-center mb-16">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-red-600/20 to-orange-600/20 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-red-400/30">
                <blockquote className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight space-y-4">
            <p>&ldquo;People don’t usually lose the job because they couldn’t solve a question.</p>
            <p className="text-red-400">They lose it in the first 90 seconds — when nerves take over, confidence slips, and clarity vanishes.</p>
            <p>It’s not about knowing all the answers. It’s about how you show up, how you speak, and how you think under pressure.</p>
                            <p className="text-gray-400 text-sm">- Mayur Nikumbh</p>
              </blockquote>
            </div>
          </div>

          {/* Footer */}
          {/* <div className="text-center pb-12">
            <p className="text-gray-400 text-sm mb-4">
              Let&apos;s connect on LinkedIn and stay updated with Antriview.
            </p>
            <Link 
              href="https://www.linkedin.com/in/mayur-nikumbh/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium"
            >
              Connect on LinkedIn →
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}