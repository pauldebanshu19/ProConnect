import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Building, Calendar, Edit, MapPin, MessageSquare, Plus, Share2, Users } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { AnimatedCard } from "@/components/animated-card"
import { AnimatedButton } from "@/components/animated-button"

export default function ProfilePage({ params }) {
  // In a real app, you would fetch the profile data based on the ID
  const profile = {
    id: params.id,
    name: "Alex Morgan",
    title: "Senior Product Manager",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    connections: 732,
    about:
      "Experienced product manager with a passion for creating user-centric solutions. I have over 8 years of experience in the tech industry, working with cross-functional teams to deliver successful products that solve real user problems.",
    experience: [
      {
        id: 1,
        title: "Senior Product Manager",
        company: "Tech Innovations Inc.",
        location: "San Francisco, CA",
        startDate: "Jan 2020",
        endDate: "Present",
        description:
          "Leading product strategy and execution for the company's flagship SaaS platform. Collaborating with engineering, design, and marketing teams to deliver features that drive user engagement and retention.",
        logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      },
      {
        id: 2,
        title: "Product Manager",
        company: "Software Solutions Co.",
        location: "Seattle, WA",
        startDate: "Mar 2017",
        endDate: "Dec 2019",
        description:
          "Managed the product lifecycle from conception to launch for a B2B analytics tool. Increased user adoption by 45% through targeted feature development based on customer feedback and market research.",
        logo: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      },
    ],
    education: [
      {
        id: 1,
        school: "University of California, Berkeley",
        degree: "MBA, Technology Management",
        years: "2015 - 2017",
        logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      },
      {
        id: 2,
        school: "Stanford University",
        degree: "BS, Computer Science",
        years: "2011 - 2015",
        logo: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      },
    ],
    skills: [
      "Product Strategy",
      "User Research",
      "Agile Methodologies",
      "Data Analysis",
      "Cross-functional Leadership",
      "Product Roadmapping",
      "A/B Testing",
      "Market Analysis",
    ],
    avatar:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    coverImage:
      "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-blue-50/50">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-md flex items-center justify-center shadow-md">
              <Users className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
              ProConnect
            </span>
          </Link>
          <nav className="flex items-center space-x-4">
            <Link href="/jobs" className="hidden md:flex items-center text-sm font-medium">
              <Briefcase className="w-4 h-4 mr-2" />
              Jobs
            </Link>
            <Link href="/network" className="hidden md:flex items-center text-sm font-medium">
              <Users className="w-4 h-4 mr-2" />
              Network
            </Link>
            <Link href="/messages" className="hidden md:flex items-center text-sm font-medium">
              <MessageSquare className="w-4 h-4 mr-2" />
              Messages
            </Link>
            <Button variant="ghost" size="icon">
              <img src={profile.avatar || "/placeholder.svg"} alt="User avatar" className="w-8 h-8 rounded-full" />
            </Button>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <div className="relative">
          <div className="h-48 md:h-64 w-full bg-slate-200 relative overflow-hidden">
            <img src={profile.coverImage || "/placeholder.svg"} alt="Cover" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
          <div className="container px-4 md:px-6 relative">
            <div className="absolute -top-16 left-4 md:left-6 w-32 h-32 rounded-full border-4 border-white bg-white overflow-hidden shadow-xl">
              <img
                src={profile.avatar || "/placeholder.svg"}
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pt-20 pb-6 flex flex-col md:flex-row md:items-center md:justify-between">
              <ScrollAnimation>
                <div className="space-y-1">
                  <h1 className="text-2xl font-bold">{profile.name}</h1>
                  <p className="text-muted-foreground">{profile.title}</p>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <Building className="w-4 h-4 mr-1" />
                      {profile.company}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {profile.location}
                    </span>
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {profile.connections} connections
                    </span>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation delay={0.2}>
                <div className="flex space-x-2 mt-4 md:mt-0">
                  <AnimatedButton>
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Message
                  </AnimatedButton>
                  <Button variant="outline" className="border-blue-200 hover:border-blue-300">
                    <Plus className="w-4 h-4 mr-2" />
                    Connect
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
        <div className="container px-4 md:px-6 py-6">
          <Tabs defaultValue="about" className="space-y-6">
            <TabsList className="bg-transparent border-b w-full justify-start rounded-none p-0">
              <TabsTrigger
                value="about"
                className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:shadow-none px-4 py-2"
              >
                About
              </TabsTrigger>
              <TabsTrigger
                value="experience"
                className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:shadow-none px-4 py-2"
              >
                Experience
              </TabsTrigger>
              <TabsTrigger
                value="education"
                className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:shadow-none px-4 py-2"
              >
                Education
              </TabsTrigger>
              <TabsTrigger
                value="skills"
                className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:shadow-none px-4 py-2"
              >
                Skills
              </TabsTrigger>
            </TabsList>
            <TabsContent value="about" className="space-y-6">
              <ScrollAnimation>
                <AnimatedCard>
                  <Card className="border-blue-100">
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle>About</CardTitle>
                      </div>
                      <Button variant="ghost" size="icon">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </CardHeader>
                    <CardContent>
                      <p>{profile.about}</p>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </ScrollAnimation>
            </TabsContent>
            <TabsContent value="experience" className="space-y-6">
              <ScrollAnimation>
                <AnimatedCard>
                  <Card className="border-blue-100">
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle>Experience</CardTitle>
                      </div>
                      <Button variant="ghost" size="icon">
                        <Plus className="w-4 h-4" />
                      </Button>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {profile.experience.map((exp, index) => (
                        <ScrollAnimation key={exp.id} delay={0.1 * index}>
                          <div className="space-y-2">
                            <div className="flex items-start">
                              <div className="mr-4 mt-1">
                                <div className="w-12 h-12 bg-white rounded-md border border-blue-100 shadow-sm flex items-center justify-center overflow-hidden">
                                  {exp.logo ? (
                                    <img
                                      src={exp.logo || "/placeholder.svg"}
                                      alt={exp.company}
                                      className="w-full h-full object-cover"
                                    />
                                  ) : (
                                    <Building className="w-6 h-6 text-slate-500" />
                                  )}
                                </div>
                              </div>
                              <div className="space-y-1">
                                <h3 className="font-medium">{exp.title}</h3>
                                <p className="text-sm text-muted-foreground">
                                  {exp.company} • {exp.location}
                                </p>
                                <p className="text-sm text-muted-foreground flex items-center">
                                  <Calendar className="w-3 h-3 mr-1" />
                                  {exp.startDate} - {exp.endDate}
                                </p>
                                <p className="text-sm mt-2">{exp.description}</p>
                              </div>
                            </div>
                          </div>
                        </ScrollAnimation>
                      ))}
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </ScrollAnimation>
            </TabsContent>
            <TabsContent value="education" className="space-y-6">
              <ScrollAnimation>
                <AnimatedCard>
                  <Card className="border-blue-100">
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle>Education</CardTitle>
                      </div>
                      <Button variant="ghost" size="icon">
                        <Plus className="w-4 h-4" />
                      </Button>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {profile.education.map((edu, index) => (
                        <ScrollAnimation key={edu.id} delay={0.1 * index}>
                          <div className="space-y-2">
                            <div className="flex items-start">
                              <div className="mr-4 mt-1">
                                <div className="w-12 h-12 bg-white rounded-md border border-blue-100 shadow-sm flex items-center justify-center overflow-hidden">
                                  {edu.logo ? (
                                    <img
                                      src={edu.logo || "/placeholder.svg"}
                                      alt={edu.school}
                                      className="w-full h-full object-cover"
                                    />
                                  ) : (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="w-6 h-6 text-slate-500"
                                    >
                                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                                    </svg>
                                  )}
                                </div>
                              </div>
                              <div className="space-y-1">
                                <h3 className="font-medium">{edu.school}</h3>
                                <p className="text-sm text-muted-foreground">{edu.degree}</p>
                                <p className="text-sm text-muted-foreground flex items-center">
                                  <Calendar className="w-3 h-3 mr-1" />
                                  {edu.years}
                                </p>
                              </div>
                            </div>
                          </div>
                        </ScrollAnimation>
                      ))}
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </ScrollAnimation>
            </TabsContent>
            <TabsContent value="skills" className="space-y-6">
              <ScrollAnimation>
                <AnimatedCard>
                  <Card className="border-blue-100">
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle>Skills</CardTitle>
                      </div>
                      <Button variant="ghost" size="icon">
                        <Plus className="w-4 h-4" />
                      </Button>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {profile.skills.map((skill, index) => (
                          <ScrollAnimation key={index} delay={0.05 * index}>
                            <Badge
                              key={index}
                              variant="secondary"
                              className="px-3 py-1 bg-blue-50 hover:bg-blue-100 transition-colors"
                            >
                              {skill}
                            </Badge>
                          </ScrollAnimation>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </ScrollAnimation>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <footer className="border-t bg-gradient-to-b from-blue-50/50 to-white">
        <div className="container px-4 py-6 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© 2023 ProConnect. All rights reserved.</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Link href="#" className="text-muted-foreground hover:text-blue-600 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-blue-600 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-blue-600 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
