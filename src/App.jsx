import './App.css';
import Contetn from './components/Content';
import Header from './components/Header';
import MainWrapper from './components/MainWrapper';
import Sidebar from './components/Sidebar';

function App() {
    return (
        <>
            <Header />
            <MainWrapper>
                <Sidebar />
                <Contetn />
            </MainWrapper>
        </>
    );
}

export default App;
