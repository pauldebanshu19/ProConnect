import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Briefcase, Search, Users, MessageSquare, ArrowRight, Star, TrendingUp, Award } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { AnimatedCard } from "@/components/animated-card"
import { AnimatedButton } from "@/components/animated-button"
import { EnhancedSection, GlowButton, PulseEffect } from "@/components/ui-enhancement"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-blue-50/50">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b">
        <div className="container flex items-center justify-between h-14 sm:h-16 px-3 sm:px-4 mx-auto">
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-md flex items-center justify-center shadow-md">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
              ProConnect
            </span>
          </Link>
          <div className="hidden md:flex items-center flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search jobs, people, companies..."
                className="w-full pl-9 pr-4 py-2 h-9 border-blue-100 focus:border-blue-300"
              />
            </div>
          </div>
          <nav className="flex items-center space-x-2 sm:space-x-4">
            <Link href="/jobs" className="hidden md:flex items-center text-sm font-medium text-gray-600 hover:text-blue-600">
              <Briefcase className="w-4 h-4 mr-1.5" />
              Jobs
            </Link>
            <Link href="/network" className="hidden md:flex items-center text-sm font-medium text-gray-600 hover:text-blue-600">
              <Users className="w-4 h-4 mr-1.5" />
              Network
            </Link>
            <Link href="/messages" className="hidden md:flex items-center text-sm font-medium text-gray-600 hover:text-blue-600">
              <MessageSquare className="w-4 h-4 mr-1.5" />
              Messages
            </Link>
            <Link href="/signin">
              <Button 
                variant="outline" 
                size="sm" 
                className="h-8 sm:h-9 px-3 sm:px-4 text-xs sm:text-sm border-blue-200 hover:border-blue-300"
              >
                Sign In
              </Button>
            </Link>
            <Link href="/signup">
              <AnimatedButton
                size="sm"
                className="h-8 sm:h-9 px-3 sm:px-4 text-xs sm:text-sm bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900"
              >
                Sign Up
              </AnimatedButton>
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-8 sm:py-12 md:py-20 lg:py-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <EnhancedSection className="container max-w-6xl mx-auto px-4 relative">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <ScrollAnimation>
                <div className="space-y-4 sm:space-y-6 max-w-xl">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs sm:text-sm font-medium">
                    <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1" />
                    The #1 Professional Network
                  </div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
                    Connect, Grow, and Advance Your Career
                  </h1>
                  <p className="text-base sm:text-lg text-gray-600 max-w-[540px]">
                    Join thousands of professionals to showcase your skills, find opportunities, and build meaningful
                    connections in a vibrant community.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Link href="/signup">
                      <GlowButton className="w-full sm:w-auto px-4 sm:px-6 py-2.5 text-sm sm:text-base font-medium rounded-md">
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2 inline" />
                      </GlowButton>
                    </Link>
                    <Link href="/jobs">
                      <Button 
                        variant="outline" 
                        className="w-full sm:w-auto px-4 sm:px-6 py-2.5 text-sm sm:text-base border-blue-200 hover:border-blue-300"
                      >
                        Browse Jobs
                      </Button>
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation delay={0.2}>
                <div className="relative mt-8 lg:mt-0">
                  <div className="relative max-w-[540px] mx-auto lg:ml-0">
                    <img
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                      alt="Professional networking"
                      className="rounded-lg object-cover shadow-2xl w-full aspect-[4/3]"
                    />
                    <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white p-3 sm:p-4 rounded-lg shadow-xl">
                      <div className="flex items-center space-x-3">
                        <div className="relative w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                          <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                          <PulseEffect className="w-8 h-8 sm:w-10 sm:h-10" />
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm font-medium">10,000+</p>
                          <p className="text-[10px] sm:text-xs text-muted-foreground">Active Professionals</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 bg-white p-3 sm:p-4 rounded-lg shadow-xl">
                      <div className="flex items-center space-x-3">
                        <div className="relative w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                          <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
                          <PulseEffect className="w-8 h-8 sm:w-10 sm:h-10" />
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm font-medium">5,000+</p>
                          <p className="text-[10px] sm:text-xs text-muted-foreground">Job Opportunities</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </EnhancedSection>
        </section>

        <section className="py-12 md:py-20">
          <EnhancedSection className="container max-w-6xl mx-auto px-4">
            <ScrollAnimation>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 sm:mb-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs sm:text-sm font-medium">
                  <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1" />
                  Top Talent
                </div>
                <div className="space-y-2 max-w-2xl mx-auto">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
                    Featured Professionals
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600">
                    Connect with top talent in your industry
                  </p>
                </div>
              </div>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {featuredProfiles.map((profile, index) => (
                <ScrollAnimation key={profile.id} delay={0.1 * index}>
                  <AnimatedCard className="h-full">
                    <ProfileCard profile={profile} />
                  </AnimatedCard>
                </ScrollAnimation>
              ))}
            </div>
          </EnhancedSection>
        </section>

        <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50/50 relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <EnhancedSection className="container px-4 md:px-6 relative">
            <ScrollAnimation>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-2">
                  <TrendingUp className="w-3.5 h-3.5 mr-1" />
                  Hot Opportunities
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
                    Latest Job Opportunities
                  </h2>
                  <p className="max-w-[700px] text-muted-foreground md:text-xl">Discover your next career move</p>
                </div>
              </div>
            </ScrollAnimation>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
              {featuredJobs.map((job, index) => (
                <ScrollAnimation key={job.id} delay={0.1 * index}>
                  <AnimatedCard className="h-full">
                    <JobCard job={job} />
                  </AnimatedCard>
                </ScrollAnimation>
              ))}
            </div>
            <ScrollAnimation delay={0.4}>
              <div className="flex justify-center mt-8">
                <Link href="/jobs">
                  <AnimatedButton variant="outline" size="lg" className="border-blue-200 hover:border-blue-300">
                    View All Jobs
                  </AnimatedButton>
                </Link>
              </div>
            </ScrollAnimation>
          </EnhancedSection>
        </section>

        <section className="py-12 md:py-16 bg-blue-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-grid-pattern"></div>
          </div>
          <EnhancedSection className="container px-4 md:px-6 relative">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <ScrollAnimation>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                    Ready to take your career to the next level?
                  </h2>
                  <p className="text-blue-100 md:text-xl max-w-[600px]">
                    Join ProConnect today and connect with thousands of professionals, discover new opportunities, and
                    grow your career.
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation delay={0.2}>
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-end">
                  <Link href="/signup">
                    <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button variant="outline" size="lg" className="border-white text-white hover:bg-blue-700">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </ScrollAnimation>
            </div>
          </EnhancedSection>
        </section>
      </main>
      <footer className="border-t bg-gradient-to-b from-blue-50/50 to-white">
        <div className="container px-4 py-8 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Products</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">
                    Pro Membership
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">
                    For Business
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">
                    Learning
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t">
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

// Sample data with real images
const featuredProfiles = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Senior Product Designer",
    company: "Design Co.",
    location: "San Francisco, CA",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    connections: 487,
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Software Engineer",
    company: "Tech Solutions Inc.",
    location: "New York, NY",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    connections: 352,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    title: "Marketing Director",
    company: "Growth Strategies",
    location: "Chicago, IL",
    avatar:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    connections: 621,
  },
]

const featuredJobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Tech Innovations",
    location: "Remote",
    salary: "$120,000 - $150,000",
    posted: "2 days ago",
    logo: "https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
  },
  {
    id: 2,
    title: "Product Marketing Manager",
    company: "Brand Solutions",
    location: "New York, NY",
    salary: "$90,000 - $110,000",
    posted: "1 week ago",
    logo: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
  },
  {
    id: 3,
    title: "UX/UI Designer",
    company: "Creative Agency",
    location: "Los Angeles, CA",
    salary: "$85,000 - $105,000",
    posted: "3 days ago",
    logo: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
  },
  {
    id: 4,
    title: "Data Scientist",
    company: "Analytics Pro",
    location: "Boston, MA",
    salary: "$130,000 - $160,000",
    posted: "Just now",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
  },
]

function ProfileCard({ profile }) {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg border border-blue-100 shadow-sm h-full transition-all duration-300 hover:shadow-md">
      <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-blue-100 shadow-md">
        <img src={profile.avatar || "/placeholder.svg"} alt={profile.name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-lg font-medium">{profile.name}</h3>
      <p className="text-sm text-muted-foreground text-center">{profile.title}</p>
      <p className="text-sm text-muted-foreground text-center">{profile.company}</p>
      <p className="text-xs text-muted-foreground mt-1">{profile.location}</p>
      <div className="mt-4 text-sm text-muted-foreground">
        <span>{profile.connections} connections</span>
      </div>
      <AnimatedButton className="mt-4 w-full" variant="outline" size="sm">
        Connect
      </AnimatedButton>
    </div>
  )
}

function JobCard({ job }) {
  return (
    <div className="flex p-6 bg-white rounded-lg border border-blue-100 shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="mr-4 flex-shrink-0">
        <img
          src={job.logo || "/placeholder.svg"}
          alt={job.company}
          className="w-12 h-12 object-contain rounded-md shadow-sm"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-medium">{job.title}</h3>
        <p className="text-sm text-muted-foreground">{job.company}</p>
        <p className="text-sm text-muted-foreground">{job.location}</p>
        <p className="text-sm font-medium mt-2">{job.salary}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xs text-muted-foreground">Posted {job.posted}</span>
          <AnimatedButton
            size="sm"
            className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900"
          >
            Apply Now
          </AnimatedButton>
        </div>
      </div>
    </div>
  )
}
