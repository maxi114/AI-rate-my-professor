"use client";
import React from "react";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [flyer, setFlyer] = React.useState(false);
  const [flyerTwo, setFlyerTwo] = React.useState(false);

  return (
    <header className="fixed top-0 w-full clearNav z-50">
      <div className="max-w-5xl mx-auto flex flex-wrap p-5 flex-col md:flex-row" style={{justifyContent:"center"}}>
        <div className="flex flex-row items-center justify-between p-3 md:p-1" >
          <a
            href="/"
            className="flex text-3xl text-white font-medium mb-4 md:mb-0"
            
          >
           AI Rate My Professor
          </a>
         
        </div>
        
      </div>
    </header>
  );
}
