"use client";
import {
  Bird,
  Book,
  Bot,
  Code2,
  Copy,
  Truck,
  CornerDownLeft,
  LifeBuoy,
  Mic,
  Paperclip,
  Rabbit,
  Settings,
  Settings2,
  Share,
  SquareTerminal,
  SquareUser,
  Triangle,
  MoreVertical,
  Turtle,
  CreditCard,
  ChevronLeft,
  ChevronRight,
  ArrowBigDownDash,
} from "lucide-react";

import data from "../../rmp-ai-assistant-python/reviews.json";


import { Separator } from "@/components/ui/separator";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Box, Stack, TextField } from "@mui/material";

import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";

import { useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Textarea } from "@/components/ui/textarea";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

export default function Message() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: `Hi! I'm the Rate My Professor support assistant. How can I help you today?`,
    },
  ]);
  const [message, setMessage] = useState("");

  //function to handle sending messages
  const sendMessage = async () => {
    event.preventDefault();
    setMessage("");
    setMessages((messages) => [
      ...messages,
      { role: "user", content: message },
      { role: "assistant", content: "" },
    ]);

    const response = fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([...messages, { role: "user", content: message }]),
    }).then(async (res) => {
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let result = "";

      return reader.read().then(function processText({ done, value }) {
        if (done) {
          return result;
        }
        const text = decoder.decode(value || new Uint8Array(), {
          stream: true,
        });
        setMessages((messages) => {
          let lastMessage = messages[messages.length - 1];
          let otherMessages = messages.slice(0, messages.length - 1);
          return [
            ...otherMessages,
            { ...lastMessage, content: lastMessage.content + text },
          ];
        });
        return reader.read().then(processText);
      });
    });
  };

  return (
    <div className="grid h-screen w-full pl-[56px]">
      <aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
        <div className="border-b p-2"></div>
      </aside>
      <div className="flex flex-col">
        <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
          <h1 className="text-xl font-semibold">AI Rate My Professor</h1>
        </header>
        <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
          <div
            className="relative hidden flex-col items-start gap-8 md:flex"
            x-chunk="dashboard-03-chunk-0"
          >
            <Card
              className="overflow-hidden"
              
              x-chunk="dashboard-05-chunk-4"
            >
              <CardHeader className="flex flex-row items-start bg-muted/50">
                <div className="grid gap-0.5">
                  <CardTitle className="group flex items-center gap-2 text-lg">
                    Professor Data <ArrowBigDownDash />
                  </CardTitle>
                  <CardDescription>
                    Below is the data provided to the AI for demo
                  </CardDescription>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild></DropdownMenuTrigger>
                  </DropdownMenu>
                </div>
              </CardHeader>

              <div style={{maxHeight: "500px", overflowY: "auto"}} >
                {/*----------map through all the reviews--------*/}
                {data.reviews.map((review, index) => (
                  <CardContent key={index} className="p-6 text-sm">
                    <div className="grid gap-3">
                      <div className="font-semibold">{review.professor}</div>
                      <dl className="grid gap-3">
                        <div className="flex items-center justify-between">
                          <dt className="text-muted-foreground">Subject</dt>
                          <dd>{review.subject}</dd>
                        </div>
                        <div className="flex items-center justify-between">
                          <dt className="text-muted-foreground">Stars</dt>
                          <dd>
                            <a href="">{review.stars}</a>
                          </dd>
                        </div>
                        <div className="flex items-center justify-between">
                          <dt className="text-muted-foreground">Review</dt>
                          <dd style={{ paddingLeft: "20px" }}>
                            <a href="">{review.review}</a>
                          </dd>
                        </div>
                      </dl>
                      {index < data.reviews.length - 1 && (
                        <Separator className="my-4" />
                      )}
                    </div>
                  </CardContent>
                ))}
              </div>
            </Card>
          </div>

          <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
            {messages.map((message, index) => (
              <Box
                key={index}
                display="flex"
                justifyContent={
                  message.role === "assistant" ? "flex-start" : "flex-end"
                }
                style={{marginBottom: "20px"}}
              >
                <Box
                  bgcolor={
                    message.role === "assistant"
                      ? "primary.main"
                      : "secondary.main"
                  }
                  color="white"
                  borderRadius={16}
                  p={3}
                >
                  {message.content}
                </Box>
                
              </Box>
            ))}

            <div className="flex-1" />
            <form
              className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
              x-chunk="dashboard-03-chunk-1"
            >
              <Label
                htmlFor="message"
                className="sr-only"
                style={{ color: "black" }}
              >
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Type your message here..."
                label="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    sendMessage();
                  }
                }}
                className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
              />
              <div className="flex items-center p-3 pt-0">
                <Button
                  type="submit"
                  size="sm"
                  className="ml-auto gap-1.5"
                  onClick={sendMessage}
                  
                >
                  Send Message
                  <CornerDownLeft className="size-3.5" />
                </Button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
