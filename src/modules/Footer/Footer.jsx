import css from './Footer.module.css';

const Footer = () => {
  return (
    <div className={css.footer}>
      <div className={css.wrapper}>
        <div class={css.addressWrapper}>
          <address class={css.address}>
            <ul class={css.list}>
              <li class={css.item}>
                <a
                  href="https://goo.gl/maps/6M82xYNFKFXgEUn27"
                  class={css.link}
                >
                  Kyiv, Lesi Ukrainky Ave., 26
                </a>
              </li>
              <li class={css.item}>
                <a href="mailto:info@example.com" class={css.link}>
                  info@medicines.com
                </a>
              </li>
              <li class={css.item}>
                <a href="tel:+380991111111" class={css.link}>
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
