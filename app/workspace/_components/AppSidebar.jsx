"use client"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { BookIcon, LayoutDashboard, PencilRuler, UserCircle2, WalletCards } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const SideBarOptions = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/workspace"
  },
  {
    title: "My Learning",
    icon: BookIcon,
    href: "/workspace/my-courses"
  },
  {
    title: "AI Tools",
    icon: PencilRuler,
    href: "/workspace/ai-tools"
  },
  {
    title: "Billing",
    icon: WalletCards,
    href: "/workspace/billing"
  },
  {
    title: "Profile",
    icon: UserCircle2,
    href: "/workspace/profile"
  }
]

export function AppSidebar() {

  const path = usePathname()

  return (
    <Sidebar>
      <SidebarHeader className='p-4'>
        <div className="flex items-center gap-4">
          <Image src="/logo.jpg" alt="logo" width={60} height={60} />
          <span className="font-bold text-2xl text-cyan-900">ElevatEd</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <Button>+ Create New Course</Button>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {SideBarOptions.map((item, index) => (
                <SidebarMenuItem className="pt-2" key={index}>
                  <SidebarMenuButton className="p-2">
                    <Link className={`flex gap-4 ${path.includes(item.href) ? "text-cyan-900 font-bold bg-purple-50" : ""}`} href={item.href}>
                      <item.icon/>
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}
