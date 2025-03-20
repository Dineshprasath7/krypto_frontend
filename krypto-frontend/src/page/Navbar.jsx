import React from 'react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import Button from "@/components/ui/Button"; 
import { DragHandleHorizontalIcon } from '@radix-ui/react-icons';
import { AvatarImage } from '@/components/ui/avatar';
import { Sidebar } from 'lucide-react';

const Navbar = () => {
  return (
    <div className='px-2 py-3 border-b z-50 bg-background bg-opacity-0 sticky top-0 left-0 right-0 flex justify-between items-center'>
      <div className='flex items-center gap-3'>

        <Sheet>
          <SheetTrigger>
            <Button variant='ghost' size='icon' className='rounded-full h-11 w-11'>
              <DragHandleHorizontalIcon className='h-7 w-7' />
            </Button>
          </SheetTrigger>
          <SheetContent side='left' className='w-72 border-r-0 flex flex-col justify-center'>
            <SheetHeader>
              <SheetTitle>
                <div className='text-3xl flex justify-center item-center gap-1'>
                    <Avatar>
                        <AvatarImage src='https://media.istockphoto.com/id/1263820227/vector/bitcoin-mining-icon-black-color.jpg?s=2048x2048&w=is&k=20&c=YA7ST5MKxJ0RSP7elS1KRxpKVvyZ5MzNHtYXvmW4Vnw='/>
                        <div>
                            <span className='font-bold text-orange-700'>my</span>
                            <span>crypto</span>
                        </div>
                    </Avatar>
                </div>
              </SheetTitle>
            </SheetHeader>
            <Sidebar />
          </SheetContent>
        </Sheet>

      </div>
    </div>
  );
}

export default Navbar;
