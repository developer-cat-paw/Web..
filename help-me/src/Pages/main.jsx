import './main.scss';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from '../Components/Layout/AppLayout';
import Blank from '../Pages/Blank';
import Chat from '../ai-bot/AI-Chatbot'
function Main() {
    return (
            <Routes>
                <Route path='/' element={<AppLayout />}>
                    <Route index element={<Blank />} />
                    <Route path='/started' element={<Blank />} />
                    <Route path='/calendar' element={<Blank />} />
                    <Route path='/user' element={<Blank />} />
                    <Route path='/order' element={<Chat />} />
                </Route>
            </Routes>
    );
}

export default Main;