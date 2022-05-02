import { ChatTeardropDots } from 'phosphor-react';
import { Popover} from '@headlessui/react';

export function Widget() {
    return (
        <Popover className="absolute bottom-5 right-5">
           <Popover.Panel className='bg-gray-700 w-20 h-40 absolute z-10 bottom-14 right-5'>
                <div></div>
           </Popover.Panel>
            <Popover.Button className="bg-violet-500 rounded-full px-3 h-12 text-white flex items-center group">
                <ChatTeardropDots className="w-6 h-6" />
                <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
                    <span className="pl-2">
                        Feedback
                        </span>
                        </span>
                
                </Popover.Button>
        </Popover>
    )
}