import Image from 'next/image'
import './styles/globals.css';
import Board from './components/Board';

const HomePage: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Inca Counting Board (Yupana)</h1>
            <p>
                The Inca counting board, or yupana, was a stone-carved tool used for calculations and record-keeping in
                the Inca Empire. It featured compartments where pebbles or grains represented numerical values based
                on their position, following a decimal system. Different colors were used to distinguish various
                items being counted. The yupana was essential for managing resources and administrative tasks,
                complementing the quipu system for permanent records. It enabled efficient calculations and
                logistical management, showcasing the Inca ingenuity in administrative systems.
            </p>
            <Image
              src="Yupana.png"
              width={500}
              height={500}
              alt="Yupana"
            />
            <Board />
        </div>
    );
};

export default HomePage;
