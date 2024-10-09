import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-primary text-primary-foreground py-12 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About PortaFlex</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Empowering professionals to showcase their work with ease and style.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg mb-4">
            At PortaFlex, we believe that every professional deserves a stunning
            portfolio that truly represents their skills and accomplishments.
            Our mission is to provide an intuitive, powerful platform that
            enables individuals to create and maintain impressive online
            portfolios without the need for coding knowledge or design
            expertise.
          </p>
          <p className="text-lg">
            We're dedicated to helping creatives, freelancers, and professionals
            across all industries showcase their work, attract clients, and
            advance their careers.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4">
                PortaFlex was founded in 2023 by a team of designers and
                developers who recognized the challenges faced by professionals
                in creating compelling online portfolios. Frustrated by the
                limitations of existing platforms, we set out to create a
                solution that combines ease of use with powerful customization
                options.
              </p>
              <p className="text-lg">
                Since our launch, we've helped thousands of users create
                stunning portfolios that have led to new opportunities, clients,
                and career advancements. We're constantly evolving and improving
                our platform based on user feedback and emerging design trends.
              </p>
            </div>
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="PortaFlex team"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Jane Doe",
                role: "CEO & Co-founder",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "John Smith",
                role: "CTO & Co-founder",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Emily Johnson",
                role: "Head of Design",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((member) => (
              <Card key={member.name}>
                <CardContent className="p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-center">
                    {member.name}
                  </h3>
                  <p className="text-center text-muted-foreground">
                    {member.role}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Join Us on Our Journey</h2>
          <p className="text-lg mb-6">
            We're always looking for talented individuals to join our team and
            help us shape the future of online portfolios. If you're passionate
            about design, development, or helping professionals succeed, we'd
            love to hear from you.
          </p>
          <div className="flex justify-center">
            <Button asChild>
              <Link to="/careers">View Open Positions</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
