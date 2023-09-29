import { classNames } from 'shared/lib/helpers/classNames';
import { Footer } from 'widgets/Footer';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Navbar } from 'widgets/Navbar';
import { useLocation } from 'react-router-dom';
import { AppRouter } from './providers/router';
import 'index.css';

function App() {
    const location = useLocation();

    return (
        <div className={classNames('', {}, [])}>
            <Navbar />
            <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    classNames="fade"
                    timeout={300}
                >
                    <AppRouter />
                </CSSTransition>
            </TransitionGroup>
            <Footer />
        </div>
    );
}

export default App;
