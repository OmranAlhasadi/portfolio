import styles from "../css/Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <svg
        width="287"
        height="288"
        viewBox="0 0 287 288"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="outerGroup">
          <g id="outer1">
            <path
              id="Ellipse 1"
              d="M44.9208 169.992C48.0715 182.741 53.7024 194.744 61.492 205.317C69.2816 215.889 79.0773 224.824 90.3198 231.611C101.562 238.397 114.032 242.903 127.015 244.871C139.999 246.839 153.244 246.23 165.992 243.079"
              stroke="var(--color-logo)"
              stroke-width="20"
            />
            <path
              id="Rectangle 1"
              d="M56.2317 208.401L48.794 178.306L42.9792 170.472L29.8735 173.711L34.6366 251.336L56.2317 208.401Z"
              fill="var(--color-logo)"
            />
          </g>
          <g id="outer2">
            <path
              id="Ellipse 1_2"
              d="M169.762 49.9308C157.146 46.2851 143.935 45.16 130.884 46.6197C117.833 48.0795 105.198 52.0954 93.6992 58.4384C82.2004 64.7814 72.0636 73.327 63.8675 83.5876C55.6714 93.8481 49.5764 105.622 45.9308 118.238"
              stroke="var(--color-logo)"
              stroke-width="20"
            />
            <path
              id="Rectangle 1_2"
              d="M130.844 40.5222L160.625 49.1283L170.317 48.0093L174.065 35.04L104.458 0.352746L130.844 40.5222Z"
              fill="var(--color-logo)"
            />
          </g>
          <g id="outer3">
            <path
              id="Ellipse 1_3"
              d="M211.318 218.077C220.783 208.974 228.362 198.096 233.624 186.064C238.885 174.031 241.725 161.081 241.981 147.951C242.237 134.821 239.905 121.77 235.117 109.541C230.329 97.3132 223.18 86.1476 214.077 76.6824"
              stroke="var(--color-logo)"
              stroke-width="20"
            />
            <path
              id="Rectangle 1_3"
              d="M238.925 189.077L216.581 210.566L212.704 219.518L222.062 229.249L286.905 186.312L238.925 189.077Z"
              fill="var(--color-logo)"
            />
          </g>
        </g>
        <path
          id="inner1"
          d="M209 146C209 183.003 179.003 213 142 213C104.997 213 75 183.003 75 146C75 108.997 104.997 79 142 79C179.003 79 209 108.997 209 146ZM101.8 146C101.8 168.202 119.798 186.2 142 186.2C164.202 186.2 182.2 168.202 182.2 146C182.2 123.798 164.202 105.8 142 105.8C119.798 105.8 101.8 123.798 101.8 146Z"
          fill="var(--color-logo)"
        />
      </svg>
    </div>
  );
};

export default Logo;
