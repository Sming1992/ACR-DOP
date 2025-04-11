import { ResetPasswordForm } from "@/components/reset-password"
import { GalleryVerticalEnd } from "lucide-react"
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Reset Password | Sikkim Government ACR Portal",
  description: "Reset your password to regain access to the Sikkim Government ACR Portal for performance reviews and leave management.",
};

export default function ResetPassword() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <GalleryVerticalEnd className="size-4" />
          </div>
          Sikkim Government
        </a>
        <ResetPasswordForm/>
      </div>
    </div>
  )
}