import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

 
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const components_sidebar = () => {
    const items = [
      {
        title: "Buttons",
        url: "#",
        icon: Home,
        subItems: [
          {
            title: "All",
            url: "#",
          },
          {
            title: "Normal",
            url: "#",
          },
          {
            title: "Destructive",
            url: "#",
          },
        ],
      },
      {
        title: "Navigation Bar",
        url: "#",
        icon: Inbox,
      },
      {
        title: "Card",
        url: "#",
        icon: Calendar,
      },
      {
        title: "Sticky Banner",
        url: "#",
        icon: Search,
      },
      {
        title: "Hero Sections",
        url: "#",
        icon: Settings,
      },
    ];
  return (
    <Sidebar className="pt-20 border-none ">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Components</SidebarGroupLabel>
          <SidebarGroupContent>
            {items.map((item, index) => (
              <SidebarMenu key={index}>
                <Collapsible className="group/collapsible">
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton>{item.title}</SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.subItems?.map((subItem, subIndex) => (
                          <SidebarMenuSubItem key={subIndex}>
                            <SidebarMenuButton>
                              {/* <Home className="mr-2 h-4 w-4" /> */}
                              {subItem.title}
                            </SidebarMenuButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              </SidebarMenu>
            ))}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export default components_sidebar