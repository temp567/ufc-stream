import {
  Archive,
  Calendar,
  DollarSign,
  Home,
  Inbox,
  Search,
  Settings,
  Shirt,
  Video,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "UFC 314 Live Stream",
    url: "#",
    icon: Video,
  },
  {
    title: "Football Live Stream",
    url: "#",
    icon: Shirt,
  },
  {
    title: "Past Events",
    url: "#",
    icon: Archive,
  },
  {
    title: "Pricing",
    url: "#",
    icon: DollarSign,
  },
];

const BasicSidebar = () => {
  return (
    <Sidebar
      className="mt-[50px] absolute left-0 top-0 z-40 border-r shadow"
      collapsible="icon"
    >
      <div className="flex  w-full justify-end">
        <SidebarTrigger className=" " />
      </div>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
export default BasicSidebar;
