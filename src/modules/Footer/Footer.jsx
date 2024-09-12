import css from './Footer.module.css';

const Footer = () => {
  return (
    <div className={css.footer}>
      <div className={css.wrapper}>
        <div className={css.addressWrapper}>
          <address className={css.address}>
            <ul className={css.list}>
              <li className={css.item}>
                <a
                  href="https://goo.gl/maps/6M82xYNFKFXgEUn27"
                  className={css.link}
                >
                  Kyiv, Lesi Ukrainky Ave., 26
                </a>
              </li>
              <li className={css.item}>
                <a href="mailto:info@medicines.com" className={css.link}>
                  info@medicines.com
                </a>
              </li>
              <li className={css.item}>
                <a href="tel:+380999110911" className={css.link}>
                  +38 099 911 0 911
                </a>
              </li>
            </ul>
          </address>
        </div>
      </div>
    </div>
  );
};

export default Footer;
