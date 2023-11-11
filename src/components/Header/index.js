import './Header.scss';

const Header = (props) => {
    return (
        <header className="conponent-header">
            <div className="conponent-header__logo">@</div>
            <nav>
                <a href="#">ссылка</a>
                <a href="#">ссылка</a>
                <a href="#">ссылка</a>
                <a href="#">ссылка</a>
            </nav>
            {props?.isShowContacts ? <div className="conponent-header__contacts">+7234234234324</div> : '' }
            
        </header>
    );
};

export default Header;
