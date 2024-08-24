"use client"
import Head from "next/head";
import Header from "@/components/ui/Header";
import Main from "@/components/ui/Main";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <div className="text-black bg-black">
    
      <Head>
        <title>nine4</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
