import './App.scss'

import { ToastProvider } from './components/Toast/Toast';
import LeftView from './views/Left/LeftView';
import RightView from './views/Right/RightView';

function App()
{
    return (
    <ToastProvider>
        <LeftView />
        <RightView />
    </ToastProvider>);
}

export default App