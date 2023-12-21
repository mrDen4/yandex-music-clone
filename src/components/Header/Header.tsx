import style from './header.module.css'
import avatar from '../../assets/avatar.jpeg'

const Header = () => {
  return (
    <header className={style.header}>
        <a href="#" className={style.logo}>Yandex music clone</a>
        <nav className={style.header__nav}>
            <ul>
                <li className={style.header__nav_link_active}>
                    <a href="#">Главное</a>
                </li>
                <li>
                    <a href="#">Подкасты и книги</a>
                </li>
                <li>
                    <a href="#">Детям</a>
                </li>
                <li>
                    <a href="#">Коллекция</a>
                </li>
                <li>
                    <div className={style.header__search}>
                        <button>
                            <span className="material-icons">search</span>
                        </button>
                        <input type="text"  placeholder='Поиск'/>
                    </div>
                </li>
            </ul>
        </nav>
        <button className={style.header__account}>
            <img src={avatar} alt="avatar" />
        </button>
    </header>
  )
}

export default Header