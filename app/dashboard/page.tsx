import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import type { Metadata } from "next";
import AcrAprGrid from "../components/sections/dashboard/acr-apr-grid";
import LeaveStack from "../components/sections/dashboard/leave-stack";
import Overview from "../components/sections/dashboard/overview";
export const metadata: Metadata = {
  title: "Dashboard | Sikkim Government ACR Portal",
  description: "View and manage performance reviews, leave requests, and other administrative tasks on the Sikkim Government ACR Portal dashboard.",
};
export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {/* <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-muted/50 aspect-video rounded-xl  overflow-hidden grayscale" >
           <img src="./performance.svg" alt="" className="h-full w-full object-cover"/>
            </div>
            <div className="bg-muted/50 aspect-video rounded-xl overflow-hidden grayscale" >
            <img src="./leaves-management.svg" alt="" className="h-full w-full object-cover"/>
            </div>
            <div className="bg-muted/50 aspect-video rounded-xl" />
          </div>
          <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" /> */}
          <div className="grid grid-cols-3 gap-4">
          <div className="col-span-3 bg-[#f3f4f6] p-5 rounded-lg">
           <h1 className="text-2xl font-bold mb-4">ACR/APR</h1>
           <AcrAprGrid/>
           {/* <div className="grid gap-4 grid-cols-4">
            <div className="bg-[#ffffff] p-8 rounded-lg">

            </div>
            <div className="bg-[#ffffff] p-8 rounded-lg">

            </div>
            <div className="bg-[#ffffff] p-8 rounded-lg">

            </div>
            <div className="bg-[#ffffff] p-8 rounded-lg">

            </div>
            <div className="bg-[#ffffff] p-8 rounded-lg">

            </div>
            <div className="bg-[#ffffff] p-8 rounded-lg">

            </div>
            <div className="bg-[#ffffff] p-8 rounded-lg">

            </div>
            <div className="bg-[#ffffff] p-8 rounded-lg">

            </div>
           </div> */}
          </div>
         {/* <div className="bg-[#f3f4f6] p-5 rounded-lg">
          <h1 className="text-2xl font-bold mb-4">Leaves</h1>
            <LeaveStack />
          </div>
         {/*<div className="col-span-2 bg-[#23538F] p-5 rounded-lg">
          <h1 className="text-2xl font-bold mb-4 text-[#ffffff]">Overview</h1>
            <Overview />
          </div>*/}
        </div>
        </div>
        
      </SidebarInset>
    </SidebarProvider>
  )
}
