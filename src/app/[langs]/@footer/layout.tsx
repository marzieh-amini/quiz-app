import React from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="bg-slate-900 text-center h-20 p-6">{children}</div>;
}
