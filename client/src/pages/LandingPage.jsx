"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Code,
  Layers,
  Zap,
  Palette,
  Globe,
  BarChart,
  Heart,
  Users,
  Lightbulb,
  Sun,
  Moon,
  Menu,
  X,
  Play,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import QA from "@/assets/images/qa.jpg";
import WebDev from "@/assets/images/web-dev.jpg";
import Devops from "@/assets/images/devops.jpg";
import UiUx from "@/assets/images/uiux.jpg";
import SampleVdo from "@/assets/images/sample.mp4";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const GlowingOrb = ({ color, darkColor }) => (
  <div
    className={`absolute w-64 h-64 rounded-full ${color} dark:${darkColor} filter blur-3xl opacity-10 animate-pulse`}
  />
);

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
  >
    <Icon className="text-blue-600 dark:text-blue-400 mb-4" size={24} />
    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
      {title}
    </h3>
    <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
  </motion.div>
);

export default function ResponsiveThemeLanding({ isDarkMode, onSetApp }) {
  const [activeSection, setActiveSection] = useState("hero");
  // const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const controls = useAnimation();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const orbitRef = useRef(null);

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });

    const rotateOrbit = () => {
      if (orbitRef.current) {
        orbitRef.current.style.transform = `rotate(${scrollY.get() / 2}deg)`;
      }
    };

    window.addEventListener("scroll", rotateOrbit);
    return () => window.removeEventListener("scroll", rotateOrbit);
  }, [controls, scrollY]);

  const handleScroll = () => {
    const sections = [
      "hero",
      "features",
      "how-to-use",
      "showcase",
      "pricing",
      "support-mission",
    ];
    const scrollPosition = window.scrollY + 100;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (
        element &&
        scrollPosition >= element.offsetTop &&
        scrollPosition < element.offsetTop + element.offsetHeight
      ) {
        setActiveSection(section);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    // setIsDarkMode(!isDarkMode);
    // document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      className={`min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 overflow-hidden ${
        isDarkMode ? "dark" : ""
      }`}
    >
      {/* <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-50 backdrop-blur-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
            >
              PortaFlex
            </motion.div>
            <div className="hidden md:flex space-x-6">
              {[
                "hero",
                "features",
                "how-to-use",
                "showcase",
                "pricing",
                "support-mission",
              ].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                    activeSection === section
                      ? "text-blue-600 dark:text-blue-400 font-semibold"
                      : ""
                  }`}
                >
                  {section
                    .split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                </a>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <button
                // onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <a
                href="#"
                className="hidden md:inline-block bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
              >
                Launch App
              </a>
              <button
                onClick={toggleMenu}
                className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav> */}

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white dark:bg-gray-900 pt-16">
          <div className="container mx-auto px-6 py-8">
            {[
              "hero",
              "features",
              "how-to-use",
              "showcase",
              "pricing",
              "support-mission",
            ].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {section
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </a>
            ))}
            <a
              href="#"
              className="block mt-4 bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors text-center"
            >
              Launch App
            </a>
          </div>
        </div>
      )}

      <main>
        <section
          id="hero"
          className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
        >
          <motion.div
            style={{ y, opacity, scale }}
            className="absolute inset-10 z-0"
          >
            <GlowingOrb color="bg-blue-300" darkColor="bg-blue-500" />
            <GlowingOrb color="bg-purple-300" darkColor="bg-purple-500" />
          </motion.div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
              >
                Revolutionize Your Digital Presence
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-700 dark:text-gray-300"
              >
                Craft stunning, interactive portfolios that captivate and
                inspire.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
              >
                <Link
                  to="/login"
                  className="inline-block bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                >
                  Start Your Journey
                </Link>

                <Dialog>
                  <DialogTrigger asChild>
                    <a
                      href="#"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                    >
                      Watch Demo <ArrowRight className="ml-2" size={20} />
                    </a>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[60vw] h-[80vh]">
                    <DialogHeader>
                      <DialogTitle>PortaFlex Demo</DialogTitle>
                    </DialogHeader>
                    <div className="aspect-w-16 aspect-h-9">
                      <iframe
                        src={SampleVdo}
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <FeatureCard
                icon={Layers}
                title="Intuitive Builder"
                description="Create stunning portfolios with our easy-to-use drag-and-drop interface."
              />
              <FeatureCard
                icon={Globe}
                title="Global Reach"
                description="Showcase your work to a worldwide audience with built-in SEO optimization."
              />
              <FeatureCard
                icon={Zap}
                title="Lightning Fast"
                description="Impress visitors with blazing-fast load times and smooth interactions."
              />
            </div>
          </div>
        </section>
        <section id="features" className="py-20 relative overflow-hidden">
          <GlowingOrb color="bg-green-300" darkColor="bg-green-500" />
          <GlowingOrb color="bg-yellow-300" darkColor="bg-yellow-500" />
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-yellow-600 dark:from-green-400 dark:to-yellow-400">
              Unleash Your Creativity
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Layers,
                  title: "Intuitive Builder",
                  description: "Drag-and-drop interface for effortless design",
                },
                {
                  icon: Zap,
                  title: "AI-Powered Insights",
                  description: "Smart suggestions to optimize your portfolio",
                },
                {
                  icon: Globe,
                  title: "Global Reach",
                  description: "Multilingual support and SEO optimization",
                },
                {
                  icon: Code,
                  title: "Custom Code Injection",
                  description:
                    "Add your personal touch with custom HTML/CSS/JS",
                },
                {
                  icon: Palette,
                  title: "Dynamic Themes",
                  description:
                    "Adaptive color schemes that evolve with your brand",
                },
                {
                  icon: BarChart,
                  title: "Advanced Analytics",
                  description:
                    "Deep insights into your portfolio's performance",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  className="bg-white dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-50 p-6 rounded-lg backdrop-blur-lg hover:bg-opacity-70 dark:hover:bg-opacity-70 transition-all group"
                >
                  <feature.icon
                    className="text-blue-600 dark:text-blue-400 mb-4 group-hover:animate-bounce"
                    size={32}
                  />
                  <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="how-to-use"
          className="py-20 bg-gray-200 dark:bg-gray-800 relative overflow-hidden"
        >
          <GlowingOrb color="bg-indigo-300" darkColor="bg-indigo-500" />
          <GlowingOrb color="bg-pink-300" darkColor="bg-pink-500" />
          <div className="container mx-auto px-[5rem] relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-600 dark:from-indigo-400 dark:to-pink-400">
              Embark on Your PortaFlex Journey
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  step: 1,
                  title: "Create Your Account",
                  description:
                    "Sign up and unlock a world of creative possibilities.",
                },
                {
                  step: 2,
                  title: "Choose Your Template",
                  description:
                    "Select from our curated collection of stunning designs.",
                },
                {
                  step: 3,
                  title: "Customize Your Space",
                  description:
                    "Infuse your unique style with our intuitive editor.",
                },
                {
                  step: 4,
                  title: "Showcase Your Brilliance",
                  description:
                    "Publish and share your portfolio with the world.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  // initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={controls}
                  // transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-2xl font-bold text-white">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="showcase" className="py-20 relative overflow-hidden">
          <GlowingOrb color="bg-purple-300" darkColor="bg-purple-500" />
          <GlowingOrb color="bg-blue-300" darkColor="bg-blue-500" />
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
              Inspire and Be Inspired
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Quality Assurance",
                  image: QA,
                },
                {
                  title: "Web Development",
                  image: WebDev,
                },
                {
                  title: "UX/UI Design",
                  image: UiUx,
                },
                {
                  title: "DevOps",
                  image: Devops,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={controls}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  className="relative group overflow-hidden rounded-lg"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[22rem] object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600 dark:from-blue-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                    <h3 className="text-2xl font-semibold text-white">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="py-20 bg-gray-200 dark:bg-gray-800 relative overflow-hidden"
        >
          <GlowingOrb color="bg-red-300" darkColor="bg-red-500" />
          <GlowingOrb color="bg-orange-300" darkColor="bg-orange-500" />
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-600 dark:from-red-400 dark:to-orange-400">
              Elevate Your Brand
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Innovator",
                  price: "$19",
                  features: [
                    "3 Dynamic Portfolios",
                    "Basic Analytics",
                    "Custom Domain",
                  ],
                },
                {
                  name: "Visionary",
                  price: "$49",
                  features: [
                    "Unlimited Portfolios",
                    "Advanced Analytics",
                    "Priority Support",
                    "AI-Powered Insights",
                  ],
                },
                {
                  name: "Legend",
                  price: "$99",
                  features: [
                    "Everything in Visionary",
                    "White-Label Solution",
                    "Dedicated Account Manager",
                    "Custom Integrations",
                  ],
                },
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  className="bg-white dark:bg-gray-900 bg-opacity-50 dark:bg-opacity-50 p-6 rounded-lg backdrop-blur-lg hover:bg-opacity-70 dark:hover:bg-opacity-70 transition-all border border-transparent hover:border-blue-500 dark:hover:border-blue-400"
                >
                  <h3 className="text-2xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
                    {plan.name}
                  </h3>
                  <p className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                    {plan.price}
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      /mo
                    </span>
                  </p>
                  <ul className="mb-6 space-y-2">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center text-gray-700 dark:text-gray-300"
                      >
                        <ArrowRight
                          className="mr-2 text-blue-600 dark:text-blue-400"
                          size={16}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className="block w-full bg-blue-600 dark:bg-blue-500 text-white text-center py-2 rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                  >
                    Choose {plan.name}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="support-mission"
          className="py-20 relative overflow-hidden"
        >
          <GlowingOrb color="bg-green-300" darkColor="bg-green-500" />
          <GlowingOrb color="bg-yellow-300" darkColor="bg-yellow-500" />
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-yellow-600 dark:from-green-400 dark:to-yellow-400">
              Support Our Vision
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Heart,
                  title: "Empower Creativity",
                  description:
                    "Help us foster a global community of digital innovators.",
                },
                {
                  icon: Users,
                  title: "Build Connections",
                  description:
                    "Support networking opportunities for creators worldwide.",
                },
                {
                  icon: Lightbulb,
                  title: "Fuel Innovation",
                  description:
                    "Contribute to the development of cutting-edge portfolio tools.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  className="bg-white dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-50 p-6 rounded-lg backdrop-blur-lg hover:bg-opacity-70 dark:hover:bg-opacity-70 transition-all group"
                >
                  <item.icon
                    className="text-yellow-600 dark:text-yellow-400 mb-4 group-hover:animate-pulse"
                    size={32}
                  />
                  <h3 className="text-xl font-semibold mb-2 text-green-600 dark:text-green-400">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-12 text-center"
            >
              <a
                href="#"
                className="inline-block bg-gradient-to-r from-green-600 to-yellow-600 dark:from-green-500 dark:to-yellow-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-green-700 hover:to-yellow-700 dark:hover:from-green-600 dark:hover:to-yellow-600 transition-colors"
              >
                Join Our Mission
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <GlowingOrb color="bg-purple-300" darkColor="bg-purple-600" />
    </div>
  );
}
