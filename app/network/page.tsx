"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, Search, Users, MessageSquare, UserPlus, Filter, Bell } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { AnimatedCard } from "@/components/animated-card"
import { AnimatedButton } from "@/components/animated-button"
import { EnhancedSection, GlowButton } from "@/components/ui-enhancement"
import { NetworkGrowth } from "@/components/network-growth"
import { ThemeToggle } from "@/components/theme-toggle"
import { ConfettiExplosion, triggerConfetti } from "@/components/confetti-explosion"

export default function NetworkPage() {
  const [showConfetti, setShowConfetti] = useState(false)
  const [acceptedInvitations, setAcceptedInvitations] = useState<number[]>([])

  const handleAcceptInvitation = (id: number) => {
    if (!acceptedInvitations.includes(id)) {
      setAcceptedInvitations([...acceptedInvitations, id])
      setShowConfetti(true)
      triggerConfetti({ origin: { x: 0.5, y: 0.4 } })
      setTimeout(() => setShowConfetti(false), 3000)
    }
  }

  const networkGrowthData = [
    { month: "Jan", connections: 45 },
    { month: "Feb", connections: 62 },
    { month: "Mar", connections: 78 },
    { month: "Apr", connections: 95 },
    { month: "May", connections: 130 },
    { month: "Jun", connections: 168 },
    { month: "Jul", connections: 154 },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-blue-50/50 dark:from-gray-900 dark:to-gray-800">
      {showConfetti && <ConfettiExplosion />}
      <header className="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b dark:border-gray-800">
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
                placeholder="Search connections..."
                className="w-full pl-9 border-blue-100 focus:border-blue-300 dark:border-gray-700 dark:focus:border-gray-600"
              />
            </div>
          </div>
          <nav className="flex items-center space-x-4">
            <Link href="/jobs" className="hidden md:flex items-center text-sm font-medium dark:text-gray-300">
              <Briefcase className="w-4 h-4 mr-2" />
              Jobs
            </Link>
            <Link
              href="/network"
              className="hidden md:flex items-center text-sm font-medium text-blue-600 dark:text-blue-400"
            >
              <Users className="w-4 h-4 mr-2" />
              Network
            </Link>
            <Link href="/messages" className="hidden md:flex items-center text-sm font-medium dark:text-gray-300">
              <MessageSquare className="w-4 h-4 mr-2" />
              Messages
            </Link>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-blue-600 rounded-full"></span>
            </Button>
            <ThemeToggle />
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
        <div className="container px-4 md:px-6 py-8">
          <EnhancedSection>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
                  My Network
                </h1>
                <p className="text-muted-foreground">Manage your professional connections</p>
              </div>
              <div className="mt-4 md:mt-0">
                <GlowButton className="flex items-center">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Add Connections
                </GlowButton>
              </div>
            </div>
          </EnhancedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="md:col-span-2">
              <ScrollAnimation>
                <NetworkGrowth data={networkGrowthData} />
              </ScrollAnimation>
            </div>
            <div>
              <ScrollAnimation delay={0.2}>
                <AnimatedCard>
                  <Card className="border-blue-100 dark:border-gray-700 shadow-sm h-full">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4 dark:text-white">Network Summary</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Total Connections</span>
                          <span className="font-medium dark:text-white">732</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Pending Invitations</span>
                          <span className="font-medium dark:text-white">
                            {invitations.length - acceptedInvitations.length}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Profile Views</span>
                          <span className="font-medium dark:text-white">128 this week</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Search Appearances</span>
                          <span className="font-medium dark:text-white">43 this week</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </ScrollAnimation>
            </div>
          </div>

          <Tabs defaultValue="connections" className="space-y-8">
            <ScrollAnimation>
              <TabsList className="bg-transparent border-b w-full justify-start rounded-none p-0 dark:border-gray-700">
                <TabsTrigger
                  value="connections"
                  className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:shadow-none px-4 py-2"
                >
                  Connections (732)
                </TabsTrigger>
                <TabsTrigger
                  value="invitations"
                  className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:shadow-none px-4 py-2"
                >
                  Invitations ({invitations.length - acceptedInvitations.length})
                </TabsTrigger>
                <TabsTrigger
                  value="people"
                  className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:shadow-none px-4 py-2"
                >
                  People You May Know
                </TabsTrigger>
                <TabsTrigger
                  value="messages"
                  className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:shadow-none px-4 py-2"
                >
                  Messages
                </TabsTrigger>
              </TabsList>
            </ScrollAnimation>

            <TabsContent value="connections" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold dark:text-white">Your Connections</h2>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-blue-200 hover:border-blue-300 dark:border-gray-700 dark:hover:border-gray-600"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {connections.map((connection, index) => (
                  <ScrollAnimation key={connection.id} delay={0.1 * index}>
                    <AnimatedCard>
                      <ConnectionCard connection={connection} />
                    </AnimatedCard>
                  </ScrollAnimation>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <AnimatedButton
                  variant="outline"
                  className="border-blue-200 hover:border-blue-300 dark:border-gray-700 dark:hover:border-gray-600"
                >
                  Load More
                </AnimatedButton>
              </div>
            </TabsContent>

            <TabsContent value="invitations" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold dark:text-white">Pending Invitations</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {invitations
                  .filter((invitation) => !acceptedInvitations.includes(invitation.id))
                  .map((invitation, index) => (
                    <ScrollAnimation key={invitation.id} delay={0.1 * index}>
                      <AnimatedCard>
                        <InvitationCard
                          invitation={invitation}
                          onAccept={() => handleAcceptInvitation(invitation.id)}
                        />
                      </AnimatedCard>
                    </ScrollAnimation>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="people" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold dark:text-white">People You May Know</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {suggestions.map((suggestion, index) => (
                  <ScrollAnimation key={suggestion.id} delay={0.1 * index}>
                    <AnimatedCard>
                      <SuggestionCard suggestion={suggestion} />
                    </AnimatedCard>
                  </ScrollAnimation>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <AnimatedButton
                  variant="outline"
                  className="border-blue-200 hover:border-blue-300 dark:border-gray-700 dark:hover:border-gray-600"
                >
                  Show More
                </AnimatedButton>
              </div>
            </TabsContent>

            <TabsContent value="messages" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold dark:text-white">Recent Messages</h2>
                <Link href="/messages">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-blue-200 hover:border-blue-300 dark:border-gray-700 dark:hover:border-gray-600"
                  >
                    View All Messages
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {recentMessages.map((message, index) => (
                  <ScrollAnimation key={message.id} delay={0.1 * index}>
                    <AnimatedCard>
                      <MessagePreviewCard message={message} />
                    </AnimatedCard>
                  </ScrollAnimation>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <Link href="/messages">
                  <GlowButton className="flex items-center">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Go to Messages
                  </GlowButton>
                </Link>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <footer className="border-t bg-gradient-to-b from-blue-50/50 to-white dark:from-gray-800 dark:to-gray-900 dark:border-gray-800">
        <div className="container px-4 py-6 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© 2023 ProConnect. All rights reserved.</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
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
              <Link
                href="#"
                className="text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
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
              <Link
                href="#"
                className="text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
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

function ConnectionCard({ connection }) {
  return (
    <Card className="border-blue-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-start">
          <div className="mr-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-100 dark:border-gray-700">
              <img
                src={connection.avatar || "/placeholder.svg"}
                alt={connection.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-lg dark:text-white">{connection.name}</h3>
            <p className="text-sm text-muted-foreground">{connection.title}</p>
            <p className="text-sm text-muted-foreground">{connection.company}</p>
            <p className="text-xs text-muted-foreground mt-1">Connected {connection.connectedSince}</p>
            <div className="flex space-x-2 mt-4">
              <Button
                variant="outline"
                size="sm"
                className="border-blue-200 hover:border-blue-300 dark:border-gray-700 dark:hover:border-gray-600"
              >
                <MessageSquare className="w-3 h-3 mr-2" />
                Message
              </Button>
              <Button variant="ghost" size="sm">
                View Profile
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function InvitationCard({ invitation, onAccept }) {
  return (
    <Card className="border-blue-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-start">
          <div className="mr-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-100 dark:border-gray-700">
              <img
                src={invitation.avatar || "/placeholder.svg"}
                alt={invitation.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-lg dark:text-white">{invitation.name}</h3>
            <p className="text-sm text-muted-foreground">{invitation.title}</p>
            <p className="text-sm text-muted-foreground">{invitation.company}</p>
            <p className="text-xs text-muted-foreground mt-1">Received {invitation.receivedDate}</p>
            <div className="flex space-x-2 mt-4">
              <AnimatedButton size="sm" onClick={onAccept}>
                Accept
              </AnimatedButton>
              <Button
                variant="outline"
                size="sm"
                className="border-blue-200 hover:border-blue-300 dark:border-gray-700 dark:hover:border-gray-600"
              >
                Ignore
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function SuggestionCard({ suggestion }) {
  return (
    <Card className="border-blue-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-blue-100 dark:border-gray-700 mb-4">
            <img
              src={suggestion.avatar || "/placeholder.svg"}
              alt={suggestion.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-medium text-lg dark:text-white">{suggestion.name}</h3>
          <p className="text-sm text-muted-foreground">{suggestion.title}</p>
          <p className="text-sm text-muted-foreground">{suggestion.company}</p>
          {suggestion.mutualConnections > 0 && (
            <p className="text-xs text-muted-foreground mt-2">
              {suggestion.mutualConnections} mutual connection{suggestion.mutualConnections > 1 ? "s" : ""}
            </p>
          )}
          <AnimatedButton className="mt-4 w-full" size="sm">
            <UserPlus className="w-3 h-3 mr-2" />
            Connect
          </AnimatedButton>
        </div>
      </CardContent>
    </Card>
  )
}

function MessagePreviewCard({ message }) {
  return (
    <Card className="border-blue-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300">
      <CardContent className="p-4">
        <div className="flex items-start">
          <div className="mr-3 relative">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-100 dark:border-gray-700">
              <img
                src={message.avatar || "/placeholder.svg"}
                alt={message.name}
                className="w-full h-full object-cover"
              />
            </div>
            {message.online && (
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></span>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start">
              <h4 className="font-medium dark:text-white">{message.name}</h4>
              <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">{message.time}</span>
            </div>
            <p className="text-sm text-muted-foreground truncate">{message.preview}</p>
          </div>
        </div>
        <div className="mt-3 flex justify-end">
          <Link href={`/messages?id=${message.id}`}>
            <Button
              variant="outline"
              size="sm"
              className="border-blue-200 hover:border-blue-300 dark:border-gray-700 dark:hover:border-gray-600"
            >
              <MessageSquare className="w-3 h-3 mr-2" />
              Reply
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

// Sample data
const connections = [
  {
    id: 1,
    name: "Jennifer Lee",
    title: "Product Designer",
    company: "Design Studio Inc.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    connectedSince: "2 years ago",
  },
  {
    id: 2,
    name: "David Wilson",
    title: "Software Engineer",
    company: "Tech Solutions",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    connectedSince: "1 year ago",
  },
  {
    id: 3,
    name: "Sophia Martinez",
    title: "Marketing Director",
    company: "Global Brands",
    avatar:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    connectedSince: "6 months ago",
  },
  {
    id: 4,
    name: "James Johnson",
    title: "Data Analyst",
    company: "Analytics Co.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    connectedSince: "3 months ago",
  },
  {
    id: 5,
    name: "Emma Thompson",
    title: "UX Researcher",
    company: "User First Design",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    connectedSince: "1 month ago",
  },
  {
    id: 6,
    name: "Michael Brown",
    title: "Project Manager",
    company: "Innovative Solutions",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    connectedSince: "2 weeks ago",
  },
]

const invitations = [
  {
    id: 1,
    name: "Robert Chen",
    title: "Frontend Developer",
    company: "Web Solutions Inc.",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    receivedDate: "2 days ago",
  },
  {
    id: 2,
    name: "Lisa Wang",
    title: "Product Manager",
    company: "Tech Innovations",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    receivedDate: "1 week ago",
  },
  {
    id: 3,
    name: "John Smith",
    title: "Sales Director",
    company: "Growth Solutions",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    receivedDate: "2 weeks ago",
  },
]

const suggestions = [
  {
    id: 1,
    name: "Rachel Green",
    title: "Content Strategist",
    company: "Media Solutions",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    mutualConnections: 12,
  },
  {
    id: 2,
    name: "Thomas Wright",
    title: "Backend Developer",
    company: "Cloud Systems",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    mutualConnections: 8,
  },
  {
    id: 3,
    name: "Olivia Davis",
    title: "HR Manager",
    company: "People First Inc.",
    avatar:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    mutualConnections: 5,
  },
  {
    id: 4,
    name: "Daniel Kim",
    title: "UI Designer",
    company: "Creative Studio",
    avatar:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    mutualConnections: 3,
  },
  {
    id: 5,
    name: "Sarah Johnson",
    title: "Marketing Specialist",
    company: "Brand Solutions",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    mutualConnections: 2,
  },
  {
    id: 6,
    name: "Alex Rodriguez",
    title: "Data Scientist",
    company: "Analytics Pro",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    mutualConnections: 0,
  },
]

const recentMessages = [
  {
    id: 1,
    name: "Jennifer Lee",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    preview: "That sounds great! Let's schedule a call to discuss the details.",
    time: "10:42 AM",
    online: true,
  },
  {
    id: 2,
    name: "David Wilson",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    preview: "I just sent you the code repository. Let me know what you think!",
    time: "Yesterday",
    online: false,
  },
  {
    id: 3,
    name: "Sophia Martinez",
    avatar:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    preview: "The marketing strategy looks solid. I've added some comments for your review.",
    time: "Monday",
    online: true,
  },
]
