'use client'

import Header from "@/components/nexoneComponents/Header";
import VideoBackground from "@/components/nexoneComponents/videoBackground";

export default function Hero() {
    return (
        <div className="flex flex-col w-full h-screen overflow-hidden">
            <Header/>
            <div className="flex-1 relative pt-16">
                <VideoBackground/>
            </div>
        </div>
    );
}