import BannerImg from "../assets/images/herosection.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function LandingPage({ isDarkMode = false }) {
  return (
    <>
      {/* Hero Section */}
      <section className="py-12 sm:py-12 lg:py-12 xl:py-16 bg-background text-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="max-w-xl mx-auto lg:mx-0">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                Create Your{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  Dream Portfolio
                </span>{" "}
                in Minutes
              </h1>
              <p className="mt-4 text-xl text-muted-foreground">
                Showcase your work effortlessly with our no-code portfolio
                builder. Design, customize, and share your professional
                portfolio without writing a single line of code.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                >
                  <Link to="/register">Get Started</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="text-blue-600 border-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-gray-800 text-lg px-8 py-6 rounded-full"
                >
                  <Link to="/demo">View Templates</Link>
                </Button>
              </div>
            </div>
            <div className="mt-10 hidden md:block lg:mt-0 lg:col-start-2 lg:row-start-1">
              <img
                src={BannerImg}
                alt="PortaFlex Dashboard"
                className="mx-auto rounded-lg shadow-xl ring-1 ring-gray-400/10 w-[200px] h-[200px] md:w-[584px] md:h-[450px] lg:w-[584px] lg:h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose PortaFlex?
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="No Coding Required"
              description="Create stunning portfolios without any technical skills. Our intuitive interface makes it easy for anyone to build a professional website."
              icon={<CodeIcon className="h-8 w-8" />}
            />
            <FeatureCard
              title="Customizable Templates"
              description="Choose from a variety of professionally designed templates and customize them to match your unique style and brand."
              icon={<LayoutIcon className="h-8 w-8" />}
            />
            <FeatureCard
              title="Responsive Design"
              description="Your portfolio will look great on any device, ensuring a seamless experience for all visitors, whether on desktop or mobile."
              icon={<SmartphoneIcon className="h-8 w-8" />}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-background text-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              quote="PortaFlex made creating my portfolio a breeze. I was able to showcase my work professionally in no time!"
              author="Sarah J., Graphic Designer"
              isDarkMode={isDarkMode}
            />
            <TestimonialCard
              quote="As a freelancer, having a great portfolio is crucial. PortaFlex helped me stand out and attract more clients."
              author="Mike T., Web Developer"
              isDarkMode={isDarkMode}
            />
            <TestimonialCard
              quote="I love how easy it is to update my portfolio with PortaFlex. It's become an essential tool for my career growth."
              author="Emily R., Photographer"
              isDarkMode={isDarkMode}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Showcase Your Talent?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of professionals who trust PortaFlex for their online
            portfolios.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/register">Start Your Free Trial</Link>
          </Button>
        </div>
      </section>
    </>
  );
}

function FeatureCard({ title, description, icon }) {
  return (
    <div className="bg-card text-card-foreground rounded-lg shadow-lg p-6">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

function TestimonialCard({ quote, author, isDarkMode }) {
  return (
    <div
      className={`bg-card text-card-foreground rounded-lg p-6 
        border transition-shadow duration-300 
        ${
          isDarkMode
            ? "hover:bg-gray-800 shadow-white"
            : " hover:bg-gray-200 shadow-black"
        }`}
    >
      <blockquote className="text-lg mb-4">{`"${quote}"`}</blockquote>
      <p className="font-semibold">- {author}</p>
    </div>
  );
}

function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function LayoutIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <line x1="3" x2="21" y1="9" y2="9" />
      <line x1="9" x2="9" y1="21" y2="9" />
    </svg>
  );
}

function SmartphoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}
