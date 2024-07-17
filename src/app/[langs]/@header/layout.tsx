import React from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <header className="bg-slate-900 p-3">
      <nav>{children}
      </nav>
    </header>
  );
}
