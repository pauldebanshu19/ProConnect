import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Briefcase, Filter, MapPin, Search, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { ScrollAnimation } from "@/components/scroll-animation"
import { AnimatedCard } from "@/components/animated-card"
import { AnimatedButton } from "@/components/animated-button"
import { AnimatedHero } from "@/components/animated-hero"

export default function JobsPage() {
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
          <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search jobs, people, companies..."
                className="w-full pl-9 border-blue-100 focus:border-blue-300"
              />
            </div>
          </div>
          <nav className="flex items-center space-x-4">
            <Link href="/jobs" className="hidden md:flex items-center text-sm font-medium">
              <Briefcase className="w-4 h-4 mr-2" />
              Jobs
            </Link>
            <Link href="/network" className="hidden md:flex items-center text-sm font-medium">
              <Users className="w-4 h-4 mr-2" />
              Network
            </Link>
            <Button variant="ghost" size="icon">
              <img
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                alt="User avatar"
                className="w-8 h-8 rounded-full"
              />
            </Button>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container px-4 md:px-6 relative">
            <AnimatedHero />
          </div>
        </section>
        <div className="container px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/4 space-y-6">
              <ScrollAnimation>
                <AnimatedCard>
                  <Card className="border-blue-100">
                    <CardContent className="p-4 space-y-4">
                      <div className="font-medium flex items-center justify-between">
                        <span>Filters</span>
                        <Button variant="ghost" size="sm" className="h-8 px-2 text-xs">
                          Clear all
                        </Button>
                      </div>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label>Job Type</Label>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Checkbox id="full-time" />
                              <label
                                htmlFor="full-time"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Full-time
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="part-time" />
                              <label
                                htmlFor="part-time"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Part-time
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="contract" />
                              <label
                                htmlFor="contract"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Contract
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="internship" />
                              <label
                                htmlFor="internship"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Internship
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label>Experience Level</Label>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Checkbox id="entry-level" />
                              <label
                                htmlFor="entry-level"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Entry Level
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="mid-level" />
                              <label
                                htmlFor="mid-level"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Mid Level
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="senior-level" />
                              <label
                                htmlFor="senior-level"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Senior Level
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label>Salary Range</Label>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Checkbox id="range-1" />
                              <label
                                htmlFor="range-1"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                $0 - $50,000
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="range-2" />
                              <label
                                htmlFor="range-2"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                $50,000 - $100,000
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="range-3" />
                              <label
                                htmlFor="range-3"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                $100,000 - $150,000
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="range-4" />
                              <label
                                htmlFor="range-4"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                $150,000+
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </ScrollAnimation>
            </div>
            <div className="md:w-3/4 space-y-6">
              <ScrollAnimation>
                <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
                      Jobs
                    </h2>
                    <p className="text-muted-foreground">Find your next opportunity</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                    <div className="relative w-full md:w-auto">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Search jobs..."
                        className="w-full md:w-[200px] pl-9 border-blue-100 focus:border-blue-300"
                      />
                    </div>
                    <Select>
                      <SelectTrigger className="w-full md:w-[180px] border-blue-100 focus:border-blue-300">
                        <SelectValue placeholder="Sort by: Relevance" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="relevance">Relevance</SelectItem>
                        <SelectItem value="recent">Most Recent</SelectItem>
                        <SelectItem value="salary-high">Salary: High to Low</SelectItem>
                        <SelectItem value="salary-low">Salary: Low to High</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button
                      variant="outline"
                      size="icon"
                      className="hidden md:flex border-blue-100 hover:border-blue-300"
                    >
                      <Filter className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </ScrollAnimation>
              <div className="space-y-4">
                {jobs.map((job, index) => (
                  <ScrollAnimation key={job.id} delay={0.1 * index}>
                    <AnimatedCard>
                      <JobCard job={job} />
                    </AnimatedCard>
                  </ScrollAnimation>
                ))}
              </div>
              <ScrollAnimation delay={0.4}>
                <div className="flex justify-center">
                  <AnimatedButton variant="outline" className="border-blue-200 hover:border-blue-300">
                    Load More Jobs
                  </AnimatedButton>
                </div>
              </ScrollAnimation>
            </div>
          </div>
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

function JobCard({ job }) {
  return (
    <Card className="overflow-hidden border-blue-100 shadow-sm transition-all duration-300 hover:shadow-md">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          <div className="p-6 flex-1">
            <div className="flex items-start">
              <div className="mr-4 flex-shrink-0">
                <img
                  src={job.logo || "/placeholder.svg"}
                  alt={job.company}
                  className="w-12 h-12 object-contain rounded-md shadow-sm border border-blue-50"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium">{job.title}</h3>
                <p className="text-sm text-muted-foreground">{job.company}</p>
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  <Badge variant="secondary" className="flex items-center gap-1 bg-blue-50">
                    <MapPin className="w-3 h-3" />
                    {job.location}
                  </Badge>
                  <Badge variant="secondary" className="flex items-center gap-1 bg-blue-50">
                    <Briefcase className="w-3 h-3" />
                    {job.type}
                  </Badge>
                  {job.remote && (
                    <Badge variant="secondary" className="bg-blue-50">
                      Remote
                    </Badge>
                  )}
                </div>
                <p className="text-sm mt-4">{job.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {job.skills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="bg-blue-50 border-blue-100">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-white p-6 flex flex-col justify-between md:w-64">
            <div>
              <p className="text-lg font-medium">{job.salary}</p>
              <p className="text-sm text-muted-foreground">Posted {job.posted}</p>
            </div>
            <div className="mt-4 space-y-2">
              <AnimatedButton className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900">
                Apply Now
              </AnimatedButton>
              <Button variant="outline" className="w-full border-blue-200 hover:border-blue-300">
                Save Job
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Sample data with real images
const jobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Tech Innovations",
    location: "Remote",
    type: "Full-time",
    remote: true,
    salary: "$120,000 - $150,000",
    posted: "2 days ago",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    description:
      "We are looking for a Senior Frontend Developer to join our team. You will be responsible for building user interfaces for our web applications using React and TypeScript.",
    skills: ["React", "TypeScript", "CSS", "HTML", "JavaScript"],
  },
  {
    id: 2,
    title: "Product Marketing Manager",
    company: "Brand Solutions",
    location: "New York, NY",
    type: "Full-time",
    remote: false,
    salary: "$90,000 - $110,000",
    posted: "1 week ago",
    logo: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    description:
      "We're seeking a Product Marketing Manager to develop and execute marketing strategies for our products. You'll work closely with product and sales teams to drive growth.",
    skills: ["Marketing Strategy", "Product Positioning", "Market Research", "Content Creation"],
  },
  {
    id: 3,
    title: "UX/UI Designer",
    company: "Creative Agency",
    location: "Los Angeles, CA",
    type: "Full-time",
    remote: true,
    salary: "$85,000 - $105,000",
    posted: "3 days ago",
    logo: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    description:
      "Join our design team to create beautiful and intuitive user experiences for our clients. You'll be responsible for the entire design process from research to implementation.",
    skills: ["Figma", "User Research", "Wireframing", "Prototyping", "UI Design"],
  },
  {
    id: 4,
    title: "Data Scientist",
    company: "Analytics Pro",
    location: "Boston, MA",
    type: "Full-time",
    remote: false,
    salary: "$130,000 - $160,000",
    posted: "Just now",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    description:
      "We're looking for a Data Scientist to help us extract insights from our data. You'll work with large datasets and build models to solve complex business problems.",
    skills: ["Python", "Machine Learning", "SQL", "Data Visualization", "Statistics"],
  },
  {
    id: 5,
    title: "DevOps Engineer",
    company: "Cloud Systems Inc.",
    location: "Seattle, WA",
    type: "Contract",
    remote: true,
    salary: "$110,000 - $140,000",
    posted: "5 days ago",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    description:
      "Join our DevOps team to build and maintain our cloud infrastructure. You'll be responsible for automation, CI/CD pipelines, and ensuring system reliability.",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
  },
]
