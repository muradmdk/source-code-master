"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

// import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Source Code Academia",
    email: "info@sourcecodeacademy",
    avatar: "/images/favicon.ico",
  },
  teams: [
    {
      name: "Source Code Academia",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: () => <img src="/images/icons/display.svg" alt="dashboard" className="w-5 h-5" />,
    },
    {
      name: "My Course",
      url: "/my-courses",
      icon: () => <img src="/images/icons/card-checklist.svg" alt="dashboard" className="w-5 h-5" />,
    },
    {
      name: "My Quiz",
      url: "/quiz",
      icon: () => <img src="/images/icons/patch-question.svg" alt="dashboard" className="w-5 h-5" />,
    },
    ,
    {
      name: "Bookmarks",
      url: "/bookmarks",
      icon: () => <img src="/images/icons/bookmark-heart.svg" alt="dashboard" className="w-5 h-5" />,
    }
    ,
    {
      name: "Friends & Family",
      url: "/friends-family",
      icon: () => <img src="/images/icons/person-plus.svg" alt="dashboard" className="w-5 h-5" />,
    },
    ,
    {
      name: "Payment Info",
      url: "/payment-info",
      icon: () => <img src="/images/icons/card-checklist.svg" alt="dashboard" className="w-5 h-5" />,
    },
    ,
    {
      name: "My Profile",
      url: "/my-profile",
      icon: () => <img src="/images/icons/person-square.svg" alt="dashboard" className="w-5 h-5" />,
    },
    ,
    {
      name: "Update Password",
      url: "/update-password",
      icon: () => <img src="/images/icons/file-lock.svg" alt="dashboard" className="w-5 h-5" />,
    },
    ,
    {
      name: " Your Experience",
      url: "/experience",
      icon: () => <img src="/images/icons/star.svg" alt="dashboard" className="w-5 h-5" />,
    }
  ],
}

export function AppSidebar({
  ...props
}) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        {/* <NavMain items={data.navMain} /> */}
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
