"use strict";
import React from "react";


export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <section>
      <header>This is a admin layout header</header>
      <div>
        {children}
      </div>
    </section>
  );
}