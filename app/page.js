"use client"
import Head from "next/head";
import Header from "@/components/ui/Header";
import Main from "@/components/ui/Main";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <div className="text-black " style={{minHeight:"100vh", backgroundColor:"black"}}>
    
      <Head>
        <title>AI Rate My Professor</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <Main />
    </div>
  );
}
