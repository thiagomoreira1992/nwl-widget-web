import { Camera, Trash } from "phosphor-react";
import html2canvas from 'html2canvas';
import { useState } from "react";
import { Loading } from "../Loading";

interface ScreenshotButtonProps{
    screenshot: string;
    onScreeshotTook: (screenshot: string) => void;
}

export function ScreenshotButton({screenshot, onScreeshotTook} : ScreenshotButtonProps) {
    const [isTakingScreenshot, setIsTakingScreeshot] = useState(false);

    async function handleTakeScreeshot() {
        setIsTakingScreeshot(true);
        const canvas = await html2canvas(document.querySelector('html')!);
        const base64image = canvas.toDataURL('image/png');

        onScreeshotTook(base64image);
        setIsTakingScreeshot(false);
    }

    if(screenshot){
        return(
            <button type="button" className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end
            items-end text-zinc-400 hover:text-zinc-100 transition-colors">
                <Trash weight="fill"/>
            </button>
        )
    }
    return (
        <button type='button'
            className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-offset-zinc-900 focus:ring-[#8257E6]"
                onClick={handleTakeScreeshot}>
            {isTakingScreenshot? <Loading/> : <Camera className='w-6 h-6' />}
        </button>
    )
}