import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import { ReactNode } from "react";
import clsx from "clsx";

interface BackLinkProps {
  children: ReactNode;
  href: string;
  className?: string;
}

function BackLink({
  children,
  href,
  className
}: BackLinkProps) {
  return (
    <Link href={href} className={clsx("flex items-center justify-start gap-2 mb-6", className)}>
      <ChevronLeft className="h-6" strokeWidth={1}/>
      <p className="text-[12px] text-purple-500">
        {children}
      </p>
    </Link>
  )
}

export default BackLink;