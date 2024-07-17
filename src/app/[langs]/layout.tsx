import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import 'react-loading-skeleton/dist/skeleton.css'
import React, { Suspense } from "react";

const vazir = Vazirmatn({ subsets: ["latin", "arabic"] });

export const metadata: Metadata = {
  title: {default:"quiz app",template:"quiz app | %s"},
  description: "برنامه پرسش و پاسخ",
};

export default function Layout({
  children,
  header,
  footer,params
}: Readonly<{
  children: React.ReactNode;
  header: React.ReactNode;
  footer:any,
  params:{langs:string}
}>) {
  
  return (
    <html lang={params.langs} dir={params.langs.startsWith("en")?"ltr":"rtl"}>
      <body className={`${vazir.className}  flex flex-col justify-between h-screen bg-slate-900`}>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
