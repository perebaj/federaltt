import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import xandeco from "../public/xande.png";
import { SignIn } from "@clerk/nextjs";
import { TwitterIcon } from "@/components/icons";

export default function Component() {
  return (
    <div>
      <header className="flex items-center justify-between bg-[#15202B] px-6 py-4">
        <Link href="#" prefetch={false}>
          <TwitterIcon className="mr-2 h-5 w-5" />
        </Link>
        <Link
          href="/contact"
          className="text-sm text-[#1DA1F2] hover:underline focus:outline-none"
          prefetch={false}
        >
          Contact
        </Link>
      </header>
      <div className="grid h-screen grid-cols-2 bg-[#15202B]">
        <div className="flex items-center justify-center">
          <Image
            src={xandeco}
            width={500}
            height={500}
            alt="xandeco"
            className="rounded-sm"
          />
        </div>
        <div className="flex min-h-screen items-center justify-center">
          <SignIn />
        </div>
      </div>
    </div>
  );
}
