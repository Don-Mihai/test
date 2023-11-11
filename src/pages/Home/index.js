import Header from "../../components/Header";
import './Home.scss'

const Home = () => {
    return (
        <div className="pages-home">
            <Header isShowContacts={false} />
            <div className="pages-home__main">main</div>
            <footer>footer</footer>
        </div>
    );
};

export default Home;
