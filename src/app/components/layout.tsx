import Components_sidebar from "@/components/layout/components_sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function sidebarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <Components_sidebar />

      <main>{children}</main>
    </SidebarProvider>
  );
}