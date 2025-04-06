import BasicSidebar from "@/components/BasicSidebar";
import Header from "@/components/Header";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="pl-4">{children}</main>
    </>
  );
}
