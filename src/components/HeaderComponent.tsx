import '../css/HeaderComponent.css'
const Header = () => {
    return (
        <nav>

            <img src="../images/pattern-bg-desktop.png" alt="image de fond header" />
            <div className='input'>
                <input type="text" name="search" id="search" placeholder='Search for any IP address or domain' />
                <button><img src="../images/icon-arrow.svg" alt="" /></button>
            </div>

            <h1 className='title'>Ip Adress Tracker</h1>

        </nav>

    );
}

export default Header;
