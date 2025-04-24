// app/page.tsx
import './styles/globals.css';
import Board from './components/Board';

const HomePage: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Inca Counting Board</h1>
            <Board />
        </div>
    );
};

export default HomePage;
