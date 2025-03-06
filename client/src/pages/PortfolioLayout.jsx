import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Menu, Moon, Sun, Twitter } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NotFound from "./NotFound";
import PortfolioTemplate1 from "./port1";
import PortfolioTemplate4 from "./port4";
import DynamicBlack from "./dynamic-black";

const PortfolioLayout = ({ portfolioData = [], notFound = false }) => {
  console.log(portfolioData);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : false; // Default to light mode
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [template, setTemplate] = useState("");

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  useEffect(() => {
    if (portfolioData.personalDetails) {
      setTemplate(portfolioData.personalDetails[0].template || "");
    }
  }, [portfolioData]);

  const renderTemplate = () => {
    switch (template) {
      case "violetGlow":
        return <PortfolioTemplate1 data={portfolioData} />;
      case "dynamicBlack":
        return <DynamicBlack data={portfolioData} />;
      case "azureBreeze":
        return <PortfolioTemplate4 data={portfolioData} />;
      default:
        return null; // Default fallback
    }
  };
  return (
    <div className={`min-h-screen flex flex-col`}>
      <header className="sticky top-0 z-50">
        {/* Navbar */}
        <nav className="bg-background border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="flex-shrink-0">
                  <span className="ml-2 text-xl font-bold text-primary">
                    PortaFlex
                  </span>
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-center space-x-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsDarkMode(!isDarkMode)}
                  >
                    {isDarkMode ? (
                      <Sun className="h-5 w-5" />
                    ) : (
                      <Moon className="h-5 w-5" />
                    )}
                  </Button>
                </div>
              </div>
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => setIsDarkMode(!isDarkMode)}
                >
                  {!isDarkMode ? "Light Mode" : "Dark Mode"}
                  {!isDarkMode ? (
                    <Sun className="h-5 w-5 ms-2" />
                  ) : (
                    <Moon className="h-5 w-5 ms-2" />
                  )}
                </Button>
              </div>
            </div>
          )}
        </nav>
      </header>
      {notFound ? (
        <NotFound />
      ) : (
        <>
          <main className="min-h-screen">{renderTemplate()}</main>
          {/* Footer */}
          <footer className="bg-muted py-12 mt-auto">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">
                    Let&apos;s Build Something Amazing
                  </h2>
                  <p className="text-muted-foreground">
                    I&apos;m always open to new opportunities and
                    collaborations. Feel free to reach out!
                  </p>
                  <div className="flex space-x-4">
                    <Link
                      href="https://github.com"
                      className="text-muted-foreground hover:text-primary"
                    >
                      <Github className="h-6 w-6" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                    <Link
                      href="https://linkedin.com"
                      className="text-muted-foreground hover:text-primary"
                    >
                      <Linkedin className="h-6 w-6" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link
                      href="https://twitter.com"
                      className="text-muted-foreground hover:text-primary"
                    >
                      <Twitter className="h-6 w-6" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                  </div>
                </div>
                <div>
                  <form className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-1"
                      >
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-1"
                      >
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="Your email" />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-1"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Your message"
                        rows={4}
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-muted-foreground/20 text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} PortaFlex. All rights reserved.
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
};

export default PortfolioLayout;
