"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Contact,
  Bot,
  UserPlus,
  Split,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  CalendarCheck,
  ChartColumnIncreasing,
  SquareTerminal,
  LayoutDashboard
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
// import { NavProjects } from "@/components/nav-projects"
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
    name: "Sming",
    email: "sonammingyur90@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "WorkNest",
      logo: GalleryVerticalEnd,
      plan: "Sikkim Gov",
    },
    // {
    //   name: "Acme Corp.",
    //   logo: AudioWaveform,
    //   plan: "Startup",
    // },
    // {
    //   name: "Evil Corp.",
    //   logo: Command,
    //   plan: "Free",
    // },
  ],
  navMain: [
    
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "ACR Status",
      url: "#",
      icon: UserPlus,
     
    },
    {
      title: "Employees",
      url: "/employees",
      icon: Contact,
      // items: [
      //   {
      //     title: "Sub item 1",
      //     url: "#",
      //   },
      //   {
      //     title: "Sub item 2",
      //     url: "#",
      //   },
      //   {
      //     title: "Sub item 3",
      //     url: "#",
      //   },
      //   {
      //     title: "Sub item 4",
      //     url: "#",
      //   },
      // ],
    },
    {
      title: "ACR/APR",
      url: "#",
      icon: ChartColumnIncreasing,
      items: [
        {
          title: "ACR/APR Details",
          url: "#",
        },
        {
          title: "Forward ACR/APR",
          url: "#",
        },
        //{
          //title: "Sub item 3",
          //url: "#",
        //},
        //{
          //title: "Sub item 4",
          //url: "#",
        //},
      ],
    },
    {
      title: "Section",
      url: "#",
      icon: CalendarCheck,
      items: [
        {
          title: "Creat Section",
          url: "#",
        },
        {
          title: "View Section",
          url: "#",
        },
        {
          title: "Map Department to Section",
          url: "#",
        },
        //{
          //title: "Sub item 4",
          //url: "#",
        //},
      ],
    },
    {
      title: "Leave",
      url: "#",
      icon: Split,
     
    },
  ],
  // projects: [
  //   {
  //     name: "Design Engineering",
  //     url: "#",
  //     icon: Frame,
  //   },
  //   {
  //     name: "Sales & Marketing",
  //     url: "#",
  //     icon: PieChart,
  //   },
  //   {
  //     name: "Travel",
  //     url: "#",
  //     icon: Map,
  //   },
  // ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" className="text-[#ffffff]" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent className="text-[#ffffff]">
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
