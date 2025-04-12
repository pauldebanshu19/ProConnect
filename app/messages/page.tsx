"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Briefcase, Search, Users, MessageSquare, Bell, Menu, ArrowLeft } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { AnimatedCard } from "@/components/animated-card"
import { AnimatedButton } from "@/components/animated-button"
import { EnhancedMessaging } from "@/components/enhanced-messaging"
import { ThemeToggle } from "@/components/theme-toggle"
import { v4 as uuidv4 } from "uuid"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

// Sample data for conversations with enhanced structure
const conversations = [
  {
    id: 1,
    name: "Jennifer Lee",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    title: "Product Designer at Design Studio Inc.",
    lastMessage: "That sounds great! Let's schedule a call to discuss the details.",
    lastMessageTime: "10:42 AM",
    unread: 2,
    online: true,
    typing: false,
    lastActive: "",
    messages: [
      {
        id: "1",
        text: "Hi Alex! I saw your profile and I'm impressed with your product management experience.",
        time: "Yesterday, 2:30 PM",
        sent: false,
      },
      {
        id: "2",
        text: "Thanks Jennifer! I appreciate that. I've been following your work at Design Studio as well.",
        time: "Yesterday, 2:45 PM",
        sent: true,
        status: "read",
      },
      {
        id: "3",
        text: "I'm working on a new project that might benefit from your expertise. Would you be interested in collaborating?",
        time: "Yesterday, 3:00 PM",
        sent: false,
        reactions: [{ emoji: "👍", count: 1 }],
      },
      {
        id: "4",
        text: "I'm always open to new collaborations. What kind of project is it?",
        time: "Yesterday, 3:15 PM",
        sent: true,
        status: "read",
      },
      {
        id: "5",
        text: "It's a new product design for a fintech app. We need someone with your background to help with the product strategy.",
        time: "Yesterday, 4:30 PM",
        sent: false,
      },
      {
        id: "6",
        text: "That sounds right up my alley. I've worked on several fintech products in the past.",
        time: "Yesterday, 5:00 PM",
        sent: true,
        status: "read",
      },
      {
        id: "7",
        text: "Perfect! Would you be available for a quick call this week to discuss the details?",
        time: "Today, 9:30 AM",
        sent: false,
      },
      {
        id: "8",
        text: "That sounds great! Let's schedule a call to discuss the details.",
        time: "Today, 10:42 AM",
        sent: true,
        status: "read",
      },
    ],
  },
  {
    id: 2,
    name: "David Wilson",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    title: "Software Engineer at Tech Solutions",
    lastMessage: "I just sent you the code repository. Let me know what you think!",
    lastMessageTime: "Yesterday",
    unread: 0,
    online: false,
    typing: false,
    lastActive: "3 hours ago",
    messages: [
      {
        id: "9",
        text: "Hey Alex, I'm working on a new open-source project and thought you might be interested.",
        time: "Monday, 11:20 AM",
        sent: false,
      },
      {
        id: "10",
        text: "Hi David! That sounds interesting. What's the project about?",
        time: "Monday, 12:05 PM",
        sent: true,
        status: "read",
      },
      {
        id: "11",
        text: "It's a new framework for building responsive dashboards. I remember you mentioned you were looking for something like this.",
        time: "Monday, 12:30 PM",
        sent: false,
        reactions: [{ emoji: "🔥", count: 1 }],
      },
      {
        id: "12",
        text: "Yes, that's exactly what I need for my current project! Is it available on GitHub?",
        time: "Monday, 1:15 PM",
        sent: true,
        status: "read",
      },
      {
        id: "13",
        text: "Not yet, but I can share the private repository with you to get your feedback before we make it public.",
        time: "Monday, 2:00 PM",
        sent: false,
      },
      {
        id: "14",
        text: "That would be great! I'd be happy to provide feedback and maybe even contribute.",
        time: "Monday, 2:30 PM",
        sent: true,
        status: "read",
      },
      {
        id: "15",
        text: "I just sent you the code repository. Let me know what you think!",
        time: "Yesterday, 10:15 AM",
        sent: false,
      },
    ],
  },
  {
    id: 3,
    name: "Sophia Martinez",
    avatar:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    title: "Marketing Director at Global Brands",
    lastMessage: "The marketing strategy looks solid. I've added some comments for your review.",
    lastMessageTime: "Monday",
    unread: 0,
    online: true,
    typing: false,
    lastActive: "",
    messages: [
      {
        id: "16",
        text: "Hello Alex, I saw your presentation at the digital marketing conference last month. Very impressive!",
        time: "Last week, Wednesday",
        sent: false,
      },
      {
        id: "17",
        text: "Thank you, Sophia! I really enjoyed your panel discussion on emerging marketing trends as well.",
        time: "Last week, Wednesday",
        sent: true,
        status: "read",
      },
      {
        id: "18",
        text: "I'm putting together a marketing strategy for a new product launch and would love your input.",
        time: "Last week, Thursday",
        sent: false,
      },
      {
        id: "19",
        text: "I'd be happy to help! What industry is the product in?",
        time: "Last week, Thursday",
        sent: true,
        status: "read",
      },
      {
        id: "20",
        text: "It's a new SaaS platform for small businesses. I'll share the draft strategy document with you.",
        time: "Last week, Friday",
        sent: false,
        reactions: [{ emoji: "👍", count: 1 }],
      },
      {
        id: "21",
        text: "Looking forward to reviewing it. SaaS marketing is one of my specialties.",
        time: "Last week, Friday",
        sent: true,
        status: "read",
      },
      {
        id: "22",
        text: "The marketing strategy looks solid. I've added some comments for your review.",
        time: "Monday, 9:00 AM",
        sent: false,
      },
    ],
  },
  {
    id: 4,
    name: "James Johnson",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    title: "Data Analyst at Analytics Co.",
    lastMessage: "I've prepared the data visualization you requested. Check your email.",
    lastMessageTime: "Aug 25",
    unread: 0,
    online: false,
    typing: false,
    lastActive: "1 day ago",
    messages: [
      {
        id: "23",
        text: "Hi Alex, I'm working on a data analysis project and could use your product management perspective.",
        time: "Aug 20, 2:15 PM",
        sent: false,
      },
      {
        id: "24",
        text: "Hi James! I'd be happy to help. What kind of data are you analyzing?",
        time: "Aug 20, 3:30 PM",
        sent: true,
        status: "read",
      },
      {
        id: "25",
        text: "We're looking at user engagement metrics for a mobile app and trying to identify patterns that could inform product decisions.",
        time: "Aug 21, 9:45 AM",
        sent: false,
      },
      {
        id: "26",
        text: "That's interesting! Have you looked at session duration correlated with feature usage?",
        time: "Aug 21, 10:30 AM",
        sent: true,
        status: "read",
      },
      {
        id: "27",
        text: "Not yet, but that's a great suggestion. Could you help me interpret the results once I have them?",
        time: "Aug 22, 11:20 AM",
        sent: false,
        reactions: [{ emoji: "💡", count: 1 }],
      },
      {
        id: "28",
        text: "Of course! If you could also include user demographics in the analysis, that would give us more context.",
        time: "Aug 22, 1:15 PM",
        sent: true,
        status: "read",
      },
      {
        id: "29",
        text: "I've prepared the data visualization you requested. Check your email.",
        time: "Aug 25, 4:30 PM",
        sent: false,
      },
    ],
  },
  {
    id: 5,
    name: "Emma Thompson",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    title: "UX Researcher at User First Design",
    lastMessage: "The user testing results are in. Let's discuss them tomorrow.",
    lastMessageTime: "Aug 18",
    unread: 0,
    online: false,
    typing: false,
    lastActive: "2 days ago",
    messages: [
      {
        id: "30",
        text: "Hello Alex, I'm conducting user research for a new product and would love your input on the research questions.",
        time: "Aug 15, 10:00 AM",
        sent: false,
      },
      {
        id: "31",
        text: "Hi Emma! I'd be happy to help with the research questions. What's the product?",
        time: "Aug 15, 11:30 AM",
        sent: true,
        status: "read",
      },
      {
        id: "32",
        text: "It's a productivity tool for remote teams. I want to make sure we're addressing the right pain points.",
        time: "Aug 16, 9:15 AM",
        sent: false,
      },
      {
        id: "33",
        text: "That's a growing market. Have you considered focusing on async communication challenges?",
        time: "Aug 16, 10:45 AM",
        sent: true,
        status: "read",
      },
      {
        id: "34",
        text: "That's a great point. I'll add some questions about that. Would you be available to review the final research plan?",
        time: "Aug 17, 2:30 PM",
        sent: false,
        reactions: [{ emoji: "👍", count: 1 }],
      },
      {
        id: "35",
        text: "Send it over when it's ready and I'll provide feedback.",
        time: "Aug 17, 3:45 PM",
        sent: true,
        status: "read",
      },
      {
        id: "36",
        text: "The user testing results are in. Let's discuss them tomorrow.",
        time: "Aug 18, 5:20 PM",
        sent: false,
      },
    ],
  },
]

export default function MessagesPage() {
  const [activeChat, setActiveChat] = useState(conversations[0])
  const [messages, setMessages] = useState(conversations[0].messages)
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(null)
  const [isMobileView, setIsMobileView] = useState(false)
  const [showConversationList, setShowConversationList] = useState(true)

  useEffect(() => {
    setMessages(conversations.find((c) => c.id === activeChat.id)?.messages || [])
  }, [activeChat])

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setShowConversationList(true)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleSendMessage = (text: string) => {
    const newMessage = {
      id: uuidv4(),
      text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      sent: true,
      status: "sending",
    }

    setMessages((prev) => [...prev, newMessage])

    // Simulate message being sent
    setTimeout(() => {
      setMessages((prev) => prev.map((msg) => (msg.id === newMessage.id ? { ...msg, status: "sent" } : msg)))
    }, 1000)

    // Simulate message being delivered
    setTimeout(() => {
      setMessages((prev) => prev.map((msg) => (msg.id === newMessage.id ? { ...msg, status: "delivered" } : msg)))
    }, 2000)

    // Simulate message being read
    setTimeout(() => {
      setMessages((prev) => prev.map((msg) => (msg.id === newMessage.id ? { ...msg, status: "read" } : msg)))
    }, 3000)

    // Simulate typing indicator
    setTimeout(() => {
      setActiveChat((prev) => ({ ...prev, typing: true }))

      if (typingTimeout) {
        clearTimeout(typingTimeout)
      }

      const timeout = setTimeout(() => {
        setActiveChat((prev) => ({ ...prev, typing: false }))

        // Simulate reply
        const replyMessage = {
          id: uuidv4(),
          text: getRandomReply(),
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          sent: false,
        }

        setMessages((prev) => [...prev, replyMessage])
      }, 3000)

      setTypingTimeout(timeout)
    }, 1000)
  }

  const getRandomReply = () => {
    const replies = [
      "That sounds great! When would you like to meet?",
      "Thanks for the update. I'll take a look at it.",
      "I appreciate your message. Let me think about it and get back to you.",
      "Perfect! I'll add it to my calendar.",
      "Interesting point. Have you considered looking at it from another perspective?",
      "I'm available tomorrow if you want to discuss this further.",
    ]
    return replies[Math.floor(Math.random() * replies.length)]
  }

  const handleSelectChat = (conversation) => {
    setActiveChat(conversation)
    if (isMobileView) {
      setShowConversationList(false)
    }
  }

  const handleBackToList = () => {
    setShowConversationList(true)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-blue-50/50 dark:from-gray-900 dark:to-gray-800">
      <header className="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b dark:border-gray-800">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-md flex items-center justify-center shadow-md">
                <Users className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
                ProConnect
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search messages..."
                className="w-full pl-9 border-blue-100 focus:border-blue-300 dark:border-gray-700 dark:focus:border-gray-600"
              />
            </div>
          </div>

          <div className="flex items-center space-x-2 md:space-x-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[80%] sm:w-[350px]">
                <div className="py-4">
                  <div className="flex items-center mb-6">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-md flex items-center justify-center shadow-md mr-2">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
                      ProConnect
                    </span>
                  </div>
                  <nav className="space-y-4">
                    <Link
                      href="/jobs"
                      className="flex items-center py-2 px-3 rounded-md hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      <Briefcase className="w-4 h-4 mr-3" />
                      <span>Jobs</span>
                    </Link>
                    <Link
                      href="/network"
                      className="flex items-center py-2 px-3 rounded-md hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      <Users className="w-4 h-4 mr-3" />
                      <span>Network</span>
                    </Link>
                    <Link
                      href="/messages"
                      className="flex items-center py-2 px-3 rounded-md bg-blue-50 dark:bg-gray-800 text-blue-600 dark:text-blue-400"
                    >
                      <MessageSquare className="w-4 h-4 mr-3" />
                      <span>Messages</span>
                    </Link>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>

            <Link href="/jobs" className="hidden md:flex items-center text-sm font-medium dark:text-gray-300">
              <Briefcase className="w-4 h-4 mr-2" />
              Jobs
            </Link>
            <Link href="/network" className="hidden md:flex items-center text-sm font-medium dark:text-gray-300">
              <Users className="w-4 h-4 mr-2" />
              Network
            </Link>
            <Link
              href="/messages"
              className="hidden md:flex items-center text-sm font-medium text-blue-600 dark:text-blue-400"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Messages
            </Link>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
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
          </div>
        </div>
      </header>

      <main className="flex-1 container px-4 md:px-6 py-4 md:py-6">
        <ScrollAnimation>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 md:mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
                Messages
              </h1>
              <p className="text-sm md:text-base text-muted-foreground">Connect with your professional network</p>
            </div>
            <div className="mt-3 md:mt-0">
              <AnimatedButton size={isMobileView ? "sm" : "default"}>
                <MessageSquare className="w-4 h-4 mr-2" />
                New Message
              </AnimatedButton>
            </div>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Conversation List - shown conditionally on mobile */}
          {(showConversationList || !isMobileView) && (
            <div className="md:col-span-1">
              <ScrollAnimation>
                <AnimatedCard>
                  <Card className="border-blue-100 dark:border-gray-700 shadow-sm h-[calc(80vh-120px)]">
                    <CardContent className="p-0">
                      <Tabs defaultValue="all" className="w-full">
                        <TabsList className="w-full grid grid-cols-3 bg-blue-50/50 dark:bg-gray-800">
                          <TabsTrigger value="all">All</TabsTrigger>
                          <TabsTrigger value="unread">Unread</TabsTrigger>
                          <TabsTrigger value="archived">Archived</TabsTrigger>
                        </TabsList>
                        <div className="p-3 border-b dark:border-gray-700">
                          <div className="relative">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                              type="search"
                              placeholder="Search conversations..."
                              className="w-full pl-9 border-blue-100 focus:border-blue-300 dark:border-gray-700 dark:focus:border-gray-600"
                            />
                          </div>
                        </div>
                        <ScrollArea className="h-[calc(80vh-220px)]">
                          <div className="divide-y dark:divide-gray-700">
                            {conversations.map((conversation) => (
                              <div
                                key={conversation.id}
                                className={`p-3 hover:bg-blue-50/50 dark:hover:bg-gray-800/50 cursor-pointer transition-colors ${
                                  activeChat.id === conversation.id ? "bg-blue-50 dark:bg-gray-800" : ""
                                }`}
                                onClick={() => handleSelectChat(conversation)}
                              >
                                <div className="flex items-start space-x-3">
                                  <div className="relative flex-shrink-0">
                                    <img
                                      src={conversation.avatar || "/placeholder.svg"}
                                      alt={conversation.name}
                                      className="w-12 h-12 rounded-full object-cover border-2 border-blue-100 dark:border-gray-700"
                                    />
                                    {conversation.online && (
                                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></span>
                                    )}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-start">
                                      <h4 className="font-medium truncate dark:text-white">{conversation.name}</h4>
                                      <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                                        {conversation.lastMessageTime}
                                      </span>
                                    </div>
                                    <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
                                    <div className="flex items-center mt-1">
                                      <span className="text-xs text-muted-foreground truncate max-w-[150px]">
                                        {conversation.title}
                                      </span>
                                      {conversation.unread > 0 && (
                                        <Badge className="ml-2 bg-blue-600" variant="default">
                                          {conversation.unread}
                                        </Badge>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </ScrollArea>
                      </Tabs>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </ScrollAnimation>
            </div>
          )}

          {/* Chat View - shown conditionally on mobile */}
          {(!showConversationList || !isMobileView) && (
            <div className="md:col-span-2">
              <ScrollAnimation delay={0.1}>
                <AnimatedCard>
                  <Card className="border-blue-100 dark:border-gray-700 shadow-sm h-[calc(80vh-120px)] flex flex-col">
                    {activeChat ? (
                      <>
                        {isMobileView && (
                          <div className="p-3 border-b flex items-center dark:border-gray-700">
                            <Button variant="ghost" size="icon" className="mr-2" onClick={handleBackToList}>
                              <ArrowLeft className="h-5 w-5" />
                            </Button>
                            <div className="flex items-center">
                              <div className="relative mr-2">
                                <img
                                  src={activeChat.avatar || "/placeholder.svg"}
                                  alt={activeChat.name}
                                  className="w-8 h-8 rounded-full object-cover"
                                />
                                {activeChat.online && (
                                  <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></span>
                                )}
                              </div>
                              <div>
                                <h4 className="font-medium text-sm dark:text-white">{activeChat.name}</h4>
                                <p className="text-xs text-muted-foreground">
                                  {activeChat.typing
                                    ? "Typing..."
                                    : activeChat.online
                                      ? "Online"
                                      : `Last active ${activeChat.lastActive}`}
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                        <EnhancedMessaging
                          conversation={activeChat}
                          messages={messages}
                          onSendMessage={handleSendMessage}
                          isMobile={isMobileView}
                        />
                      </>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full">
                        <MessageSquare className="h-16 w-16 text-blue-200 dark:text-blue-800 mb-4" />
                        <h3 className="text-xl font-medium dark:text-white">No conversation selected</h3>
                        <p className="text-muted-foreground">Choose a conversation from the list</p>
                      </div>
                    )}
                  </Card>
                </AnimatedCard>
              </ScrollAnimation>
            </div>
          )}
        </div>
      </main>
      <footer className="border-t bg-gradient-to-b from-blue-50/50 to-white dark:from-gray-800 dark:to-gray-900 dark:border-gray-800">
        <div className="container px-4 py-4 md:py-6 md:px-6">
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
