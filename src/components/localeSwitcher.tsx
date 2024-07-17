"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import usFlag from "@/assets/images/us.svg";
import irFlag from "@/assets/images/ir.svg";

export default function LocaleSwitcher() {
    const pathName = usePathname();
    const redirectedPathName = (locale:string) => {
        if (!pathName) return "/";
        const segments = pathName.split("/");
        segments[1] = locale;
        return segments.join("/");
    };

    return (
        <div className="flex items-center">
            <ul className="mx-auto inline-block">
                <li className="flex flex-row">
                    <Link href={redirectedPathName("en-us")}>
                        <Image
                            src={usFlag}
                            className="m-2"
                            width={30}
                            height={30}
                            alt="US Flag"
                        />
                    </Link>

                    <Link href={redirectedPathName("fa-ir")}>
                        <Image
                            src={irFlag}
                            className="m-2"
                            width={30}
                            height={30}
                            alt="IR Flag"
                        />
                    </Link>
                </li>
            </ul>
        </div>
    );
}
