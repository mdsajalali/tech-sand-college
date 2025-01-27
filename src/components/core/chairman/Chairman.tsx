import React from "react";
import ChairmanSidebar from "./ChairmanSidebar";
import ChairmanMessage from "./ChairmanMessage";
import ChairmanProfile from "./ChairmanProfile";
import Container from "@/components/shared/Container";

export default function Chairman() {
  return (
    <div className="py-10">
      <Container>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          {/* Sidebar */}
          <div className="md:col-span-12 lg:col-span-3">
            <ChairmanSidebar />
          </div>

          {/* Main Content */}
          <div className="md:col-span-8 lg:col-span-6 xl:px-5">
            <ChairmanMessage />
          </div>

          {/* Profile */}
          <div className="md:col-span-4 lg:col-span-3">
            <ChairmanProfile />
          </div>
        </div>
      </Container>
    </div>
  );
}
