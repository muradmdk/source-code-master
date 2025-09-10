import { AppSidebar } from "@/components/app-sidebar";
// import DashboardHeader from "@/components/layouts/dashboardHeader.jsx";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
export const metadata = {
  title: "Dashboard",
  description: "Jobs",
};

const DashboardLayoutPage = ({ children }) => {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className={"bg-neutral-100"}>
          <header className="sticky z-10 top-0 bg-neutral-100 flex justify-between h-[56px] shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
            <div className="ps-4">
              <h2 className="font-medium">Dashboard</h2>
              <p className="text-xs text-neutral-400">
                Updating your information will offer you the most relevent
                content{" "}
              </p>
            </div>

            {/* <DashboardHeader /> */}
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
};
export default DashboardLayoutPage;