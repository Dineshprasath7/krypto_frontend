import { useState } from 'react';
import './App.css';
import Navbar from './page/Navbar';
import Button from './components/ui/Button';
import { AvatarImage } from './components/ui/avatar';
import { DragHandleHorizontalIcon } from '@radix-ui/react-icons';
import { Avatar } from './components/ui/avatar';
import { useNavigate } from 'react-router-dom';
import { HomeIcon } from '@radix-ui/react-icons';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './components/ui/sheet';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="p-4">
        <Button onClick={() => setCount(count + 1)}>Click Me</Button>
        <p className="mt-2">Count: {count}</p>
      </div>
    </>
  );
}

export default App;

