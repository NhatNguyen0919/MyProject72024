
import Slider from "@/component/slider/app.slider";
import Appvideo from "@/component/videomain/app.video";
import Image from "next/image";

export default function Home() {
    return (
        <main >
            <div>
                <Slider />
                <Appvideo />
            </div>
        </main>
    );
}
