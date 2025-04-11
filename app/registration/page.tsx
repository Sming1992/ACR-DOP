import RegistrationForm from "@/components/regestration-form"
import { GalleryVerticalEnd } from "lucide-react"
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Sign Up | Sikkim Government ACR Portal",
  description: "Create an account to access the Sikkim Government ACR Portal for performance reviews and leave management.",
};
export default function Registration() {
  return (
    // flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10
    <div className="max-w-[1200px] m-auto mt-20">
      <div className="flex flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <GalleryVerticalEnd className="size-4" />
          </div>
          Sikkim Government
        </a>
        <RegistrationForm/>
      </div>
    </div>
  )
}