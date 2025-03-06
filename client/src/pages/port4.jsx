import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ProfileImg from "@/assets/images/profileImg.png";

export default function Portfolio4() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      {/* Header / Hero Section */}
      <header className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-8 md:p-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">John Doe</h1>
            <p className="text-xl mb-4">Full Stack Developer</p>
            <p className="mb-6">
              Crafting elegant solutions to complex problems
            </p>
            <Button variant="secondary">Contact Me</Button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src={ProfileImg}
              alt="Profile"
              className="rounded-full w-48 h-48 mx-auto"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Professional Summary */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Professional Summary</h2>
          <Card>
            <CardContent className="p-6">
              <p>
                Experienced Full Stack Developer with a passion for creating
                robust and scalable web applications. Proficient in both
                front-end and back-end technologies, with a strong focus on user
                experience and performance optimization. Committed to writing
                clean, maintainable code and staying up-to-date with the latest
                industry trends.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5">
                  <li>HTML5, CSS3, JavaScript</li>
                  <li>React, Vue.js</li>
                  <li>Responsive Web Design</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Backend</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5">
                  <li>Node.js, Express</li>
                  <li>Python, Django</li>
                  <li>RESTful API Design</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Database & Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5">
                  <li>MongoDB, PostgreSQL</li>
                  <li>Git, Docker</li>
                  <li>AWS, Heroku</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Personal Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Project Alpha</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  A revolutionary AI-powered task management system
                </p>
                <Button variant="outline">View Project</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Beta App</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Cross-platform mobile app for health tracking
                </p>
                <Button variant="outline">View Project</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Gamma Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Scalable e-commerce solution with microservices architecture
                </p>
                <Button variant="outline">View Project</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Senior Developer at Tech Co</CardTitle>
              <p className="text-sm text-gray-500">January 2020 - Present</p>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5">
                <li>
                  Led development of key features, improved performance by 40%
                </li>
                <li>
                  Mentored junior developers and implemented best practices
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Web Developer at Startup Inc</CardTitle>
              <p className="text-sm text-gray-500">
                March 2018 - December 2019
              </p>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5">
                <li>Developed and maintained multiple client websites</li>
                <li>Implemented responsive designs and optimized for mobile</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <Card>
            <CardHeader>
              <CardTitle>Bachelor of Science in Computer Science</CardTitle>
              <p className="text-sm text-gray-500">
                University of Technology, Graduated 2018
              </p>
            </CardHeader>
            <CardContent>
              <p>GPA: 3.8 / 4.0</p>
            </CardContent>
          </Card>
        </section>

        {/* Certifications */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Certifications</h2>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">AWS Certified Developer</Badge>
            <Badge variant="secondary">Google Cloud Professional</Badge>
            <Badge variant="secondary">Certified Scrum Master</Badge>
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Achievements</h2>
          <ul className="list-disc pl-5">
            <li>Winner of XYZ Hackathon 2022</li>
            <li>Published article on best practices in React development</li>
            <li>Open source contributor to popular JavaScript library</li>
            <li>Speaker at Web Development Conference 2021</li>
          </ul>
        </section>
      </main>

      {/* Footer / Contact Me */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <p className="mb-4">
            Feel free to reach out for collaborations or just a friendly chat.
          </p>
          <Button variant="secondary">Send Message</Button>
        </div>
      </footer>
    </div>
  );
}
