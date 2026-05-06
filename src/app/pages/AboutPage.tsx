import { Card, CardContent } from "@/app/components/ui/card";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import {
  Target,
  Eye,
  Heart,
  Shield,
  Users,
  MapPin,
  Clock,
  Award,
  CheckCircle2,
} from "lucide-react";

export function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Your security and well-being are our top priorities with 24/7 surveillance and trained staff.",
    },
    {
      icon: Heart,
      title: "Student-Centric",
      description: "Every decision we make is focused on creating the best environment for student success.",
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Fostering a supportive community where students can connect, learn, and grow together.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to maintaining the highest standards in facilities, services, and management.",
    },
  ];

  const timeline = [
    { year: "2019", event: "Staytrack Founded", description: "Started with a vision to provide quality student accommodation" },
    { year: "2020", event: "Expansion", description: "Added more rooms and facilities to serve growing student community" },
    { year: "2022", event: "Modern Upgrade", description: "Renovated facilities with latest amenities and technology" },
    { year: "2024", event: "Excellence Award", description: "Recognized as one of the top student hostels in the region" },
  ];

  const rules = [
    "Maintain cleanliness and hygiene in your room and common areas",
    "Respect quiet hours (10 PM - 7 AM) for a peaceful environment",
    "No smoking, alcohol, or illegal substances on premises",
    "Visitors allowed only in common areas during specified hours",
    "Report any maintenance issues or concerns to management immediately",
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGgyLTJ6TTAgMTNoMnYtMkgwdjJ6bTAgMThoMnYtMkgwdjJ6bTAgMThoMnYtMkgwdjJ6bTAgMThoMnYtMkgwdjJ6bTAgMThoMnYtMkgwdjJ6bTAgMThoMnYtMkgwdjJ6bTAgMThoMnYtMkgwdjJ6bTEzNi0xMzJoLTJ2Mmgydi0yek0wIDEzaDJ2LTJIMHYyem0wIDE4aDJ2LTJIMHY0aC0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-black mb-4">About Staytrack</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Creating a home away from home for students since 2019. Our mission is to provide safe, comfortable, and modern living spaces that support academic excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Staytrack was born from a simple idea: students deserve more than just a place to sleep. They deserve a community, a support system, and an environment that nurtures their growth and success.
                </p>
                <p>
                  Founded in 2019, we started with a single building and a big dream. Today, we've grown into one of the most trusted student accommodation providers in the region, serving hundreds of students from diverse backgrounds.
                </p>
                <p>
                  Our team comprises experienced professionals who understand the unique challenges students face. We're not just managing a hostel; we're creating a home where students can thrive, make lifelong friends, and focus on what matters most – their education.
                </p>
                <p>
                  Every decision we make, every facility we add, and every policy we implement is guided by one question: "Will this help our students succeed?" This student-first approach has been the cornerstone of our success.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1626265774643-f1943311a86b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMGhvc3RlbCUyMG1hbmFnZW1lbnR8ZW58MXx8fHwxNzY5NzQ5OTk3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Staytrack Team"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-primary/10">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl font-black mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To provide safe, comfortable, and affordable accommodation that empowers students to focus on their academic and personal growth. We strive to create an environment where every student feels valued, supported, and inspired to achieve their dreams.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/10">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-secondary" />
                </div>
                <h2 className="text-2xl font-black mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted and preferred student accommodation provider, setting new standards in quality, safety, and student satisfaction. We envision a future where every student has access to world-class living facilities that support their journey to success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Staytrack.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-8 h-8 text-secondary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground">
              Key milestones in our growth story.
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-accent/10 rounded-2xl flex flex-col items-center justify-center">
                        <span className="text-2xl font-black text-accent">{item.year}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{item.event}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Management */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl font-black mb-4">Prime Location</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Strategically located in the heart of the college district, Staytrack offers easy access to major educational institutions, libraries, shopping centers, and public transportation.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    5 minutes from major universities
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    Well-connected by public transport
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    Walking distance to essential amenities
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    Safe and peaceful neighborhood
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-secondary" />
                </div>
                <h2 className="text-2xl font-black mb-4">Experienced Management</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our dedicated management team brings years of experience in student accommodation. We're available 24/7 to address any concerns and ensure a smooth living experience for all residents.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    24/7 on-site management
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    Quick response to maintenance issues
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    Regular feedback and improvement
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    Student welfare-focused approach
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Safety & Discipline */}
      <section className="py-16 lg:py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black mb-4">Safety & Discipline</h2>
            <p className="text-lg text-white/90">
              A secure environment where students can focus on their studies with peace of mind.
            </p>
          </div>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-6 text-white">Key Safety Measures</h3>
              <ul className="space-y-3">
                {rules.map((rule, index) => (
                  <li key={index} className="flex items-start gap-3 text-white/90">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
