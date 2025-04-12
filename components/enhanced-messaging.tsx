"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Send, Paperclip, ImageIcon, Smile, Mic, Video, Phone, MoreHorizontal, X, Check, Clock } from "lucide-react"

interface Message {
  id: string
  text: string
  time: string
  sent: boolean
  status?: "sending" | "sent" | "delivered" | "read"
  reactions?: { emoji: string; count: number }[]
}

interface Conversation {
  id: number
  name: string
  avatar: string
  online: boolean
  typing?: boolean
  lastActive?: string
}

interface EnhancedMessagingProps {
  conversation: Conversation
  messages: Message[]
  onSendMessage: (text: string) => void
  className?: string
  isMobile?: boolean
}

export function EnhancedMessaging({
  conversation,
  messages,
  onSendMessage,
  className = "",
  isMobile = false,
}: EnhancedMessagingProps) {
  const [newMessage, setNewMessage] = useState("")
  const [isRecording, setIsRecording] = useState(false)
  const [showEmojis, setShowEmojis] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const emojis = ["👍", "❤️", "😂", "😮", "😢", "😡"]

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    if (!newMessage.trim()) return

    onSendMessage(newMessage)
    setNewMessage("")

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewMessage(e.target.value)

    // Auto-resize textarea
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }

  const getMessageStatusIcon = (status?: string) => {
    switch (status) {
      case "sending":
        return <Clock className="h-3 w-3 text-gray-400" />
      case "sent":
        return <Check className="h-3 w-3 text-gray-400" />
      case "delivered":
        return (
          <div className="flex">
            <Check className="h-3 w-3 text-gray-400" />
            <Check className="h-3 w-3 -ml-1 text-gray-400" />
          </div>
        )
      case "read":
        return (
          <div className="flex">
            <Check className="h-3 w-3 text-blue-500" />
            <Check className="h-3 w-3 -ml-1 text-blue-500" />
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className={`flex flex-col h-full ${className}`}>
      {!isMobile && (
        <div className="p-2 sm:p-3 md:p-4 border-b flex items-center justify-between bg-white dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="relative">
              <img
                src={conversation.avatar || "/placeholder.svg"}
                alt={conversation.name}
                className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full object-cover border-2 border-blue-100 dark:border-blue-800"
              />
              {conversation.online && (
                <span className="absolute bottom-0 right-0 w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></span>
              )}
            </div>
            <div>
              <h3 className="font-medium text-xs sm:text-sm md:text-base dark:text-white">{conversation.name}</h3>
              <p className="text-[10px] sm:text-xs text-muted-foreground flex items-center">
                {conversation.typing ? (
                  <span className="flex items-center text-blue-600 dark:text-blue-400">
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex space-x-1 items-center"
                    >
                      <span>Typing</span>
                      <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                      >
                        ...
                      </motion.span>
                    </motion.span>
                  </span>
                ) : conversation.online ? (
                  <span className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1"></span>
                    Online
                  </span>
                ) : (
                  `Last active ${conversation.lastActive}`
                )}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-1 md:space-x-2">
            <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 md:h-9 md:w-9">
              <Phone className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 md:h-9 md:w-9">
              <Video className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 md:h-9 md:w-9">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      <ScrollArea className="flex-1 p-2 sm:p-3 md:p-4 bg-gray-50 dark:bg-gray-900">
        <div className="space-y-3 sm:space-y-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.sent ? "justify-end" : "justify-start"}`}>
              {!message.sent && (
                <img
                  src={conversation.avatar || "/placeholder.svg"}
                  alt={conversation.name}
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover mr-2 mt-1 flex-shrink-0"
                />
              )}
              <div className="max-w-[85%] sm:max-w-[80%] md:max-w-[70%]">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`rounded-2xl px-2.5 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2 ${
                    message.sent
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white dark:from-blue-700 dark:to-blue-800"
                      : "bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
                  }`}
                >
                  <p
                    className={`text-xs sm:text-sm md:text-base ${message.sent ? "text-white" : "text-gray-800 dark:text-gray-200"}`}
                  >
                    {message.text}
                  </p>
                  <div className="flex justify-end items-center mt-0.5 sm:mt-1 space-x-1">
                    <span
                      className={`text-[10px] sm:text-xs ${
                        message.sent ? "text-blue-100 dark:text-blue-200" : "text-gray-500 dark:text-gray-400"
                      }`}
                    >
                      {message.time}
                    </span>
                    {message.sent && getMessageStatusIcon(message.status)}
                  </div>
                </motion.div>

                {message.reactions && message.reactions.length > 0 && (
                  <div className={`flex mt-1 space-x-1 ${message.sent ? "justify-start" : "justify-end"}`}>
                    <div className="bg-white dark:bg-gray-800 rounded-full shadow-sm border border-gray-100 dark:border-gray-700 px-2 py-0.5 flex items-center space-x-1">
                      {message.reactions.map((reaction, i) => (
                        <div key={i} className="flex items-center">
                          <span>{reaction.emoji}</span>
                          {reaction.count > 1 && (
                            <span className="text-xs text-gray-500 dark:text-gray-400 ml-0.5">{reaction.count}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              {message.sent && (
                <img
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                  alt="Your avatar"
                  className="w-8 h-8 rounded-full object-cover ml-2 mt-1 flex-shrink-0"
                />
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>

      <div className="p-2 sm:p-3 md:p-4 border-t bg-white dark:bg-gray-800 dark:border-gray-700">
        <form onSubmit={handleSendMessage} className="space-y-1.5 sm:space-y-2">
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="rounded-full flex-shrink-0 h-8 w-8 sm:h-9 sm:w-9 hidden sm:flex"
            >
              <Paperclip className="h-4 w-4" />
            </Button>
            <Textarea
              ref={textareaRef}
              value={newMessage}
              onChange={handleTextareaChange}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
              className="min-h-[40px] sm:min-h-[44px] max-h-[120px] resize-none text-sm sm:text-base"
            />
            <Button
              type="submit"
              size="icon"
              className="rounded-full flex-shrink-0 h-8 w-8 sm:h-9 sm:w-9 bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="rounded-full h-7 w-7 sm:h-8 sm:w-8"
              >
                <Smile className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="rounded-full h-7 w-7 sm:h-8 sm:w-8"
              >
                <Mic className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </Button>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="rounded-full h-7 w-7 sm:h-8 sm:w-8"
              >
                <ImageIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="rounded-full h-7 w-7 sm:h-8 sm:w-8"
              >
                <Video className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
