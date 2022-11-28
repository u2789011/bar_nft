import style from './style.scss';

const Header = () => {
  return (
    <div>
      <div>Tipst Cat</div>
      <div className={style.controlBar}>
        <div>Explore</div>
        <div>About us</div>
        <div>Connect Wallet</div>
      </div>
    </div>
  );
};

export default Header;