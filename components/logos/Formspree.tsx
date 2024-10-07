type PropType = {
  style: string;
};

const Formspree = (props: PropType) => {
  const { style } = props;
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      width="512"
      height="128"
      viewBox="0, 0, 512, 128"
      className={style}
    >
      <g>
        <path d="M151.893,84.467 L151.893,46.695 L176.348,46.695 L176.348,53.69 L161.041,53.69 L161.041,61.818 L172.495,61.818 L172.495,68.808 L161.041,68.808 L161.041,84.467 z M214.554,65.472 C214.554,62.173 213.653,59.535 211.851,57.567 C210.054,55.594 207.642,54.605 204.63,54.605 C201.612,54.605 199.205,55.594 197.403,57.567 C195.601,59.535 194.7,62.173 194.7,65.472 C194.7,68.776 195.601,71.409 197.403,73.382 C199.205,75.355 201.612,76.339 204.63,76.339 C207.642,76.339 210.054,75.355 211.851,73.382 C213.653,71.409 214.554,68.776 214.554,65.472 z M185.39,65.472 C185.39,59.877 187.252,55.261 190.981,51.62 C194.71,47.98 199.275,46.159 204.68,46.159 C210.086,46.159 214.637,47.98 218.329,51.62 C222.021,55.261 223.869,59.877 223.869,65.472 C223.869,71.068 222.011,75.697 218.301,79.356 C214.591,83.011 210.045,84.841 204.657,84.841 C199.265,84.841 194.71,83.011 190.981,79.356 C187.252,75.697 185.386,71.068 185.386,65.472 z M243.824,69.778 L243.824,84.467 L234.671,84.467 L234.671,46.695 L249.498,46.695 C253.85,46.695 257.242,47.827 259.667,50.087 C262.093,52.346 263.303,55.072 263.303,58.265 C263.303,60.45 262.647,62.585 261.326,64.668 C260.004,66.747 257.847,68.217 254.848,69.076 L264.057,84.467 L253.351,84.467 L244.896,69.778 z M243.824,53.69 L243.824,62.783 L249.498,62.783 C250.889,62.783 251.988,62.372 252.787,61.545 C253.591,60.723 253.993,59.637 253.993,58.292 C253.993,56.948 253.582,55.843 252.764,54.984 C251.942,54.12 250.852,53.69 249.498,53.69 z M317.888,46.695 L317.888,84.467 L308.735,84.467 L308.735,63.162 L300.012,84.467 L293.216,84.467 L284.492,63.162 L284.492,84.467 L275.339,84.467 L275.339,46.695 L285.832,46.695 L296.639,72.735 L307.4,46.695 z M340.764,54.337 C340.029,54.947 339.664,55.825 339.664,56.971 C339.664,58.121 340.006,59.045 340.68,59.743 C341.36,60.445 342.242,60.981 343.332,61.356 C344.418,61.734 345.633,62.095 346.969,62.432 C348.309,62.774 349.639,63.185 350.956,63.67 C352.227,64.128 353.442,64.733 354.569,65.472 C355.66,66.188 356.542,67.205 357.221,68.512 C357.896,69.82 358.238,71.391 358.238,73.221 C358.238,76.413 356.944,79.149 354.357,81.426 C351.769,83.704 348.359,84.841 344.132,84.841 C339.904,84.841 336.499,83.82 333.912,81.773 C331.324,79.731 330.03,76.824 330.03,73.059 L339.77,73.059 C340.02,76.071 341.554,77.578 344.377,77.578 C345.693,77.578 346.728,77.231 347.477,76.529 C348.23,75.831 348.604,74.944 348.604,73.867 C348.604,72.791 348.262,71.913 347.588,71.229 C346.909,70.55 346.026,70.009 344.936,69.617 C343.744,69.192 342.529,68.822 341.295,68.512 C339.946,68.166 338.615,67.745 337.312,67.246 C336.046,66.775 334.836,66.17 333.699,65.449 C332.609,64.747 331.726,63.744 331.047,62.432 C330.372,61.125 330.03,59.572 330.03,57.779 C330.03,54.263 331.333,51.45 333.939,49.333 C336.545,47.217 339.872,46.159 343.919,46.159 C347.971,46.159 351.243,47.083 353.742,48.931 C356.237,50.775 357.54,53.69 357.646,57.673 L347.694,57.673 C347.551,56.31 347.112,55.261 346.382,54.527 C345.652,53.792 344.714,53.422 343.573,53.422 C342.432,53.422 341.494,53.727 340.764,54.337 z M399.012,58.265 C399.012,60.81 398.102,63.268 396.282,65.634 C395.321,66.854 393.884,67.852 391.976,68.623 C390.063,69.39 387.808,69.778 385.202,69.778 L379.528,69.778 L379.528,84.467 L370.38,84.467 L370.38,46.695 L385.202,46.695 C389.554,46.695 392.946,47.827 395.371,50.087 C397.797,52.346 399.012,55.072 399.012,58.265 z M379.528,62.783 L385.202,62.783 C386.593,62.783 387.692,62.372 388.496,61.545 C389.296,60.723 389.698,59.637 389.698,58.292 C389.698,56.948 389.286,55.843 388.469,54.984 C387.646,54.12 386.56,53.69 385.202,53.69 L379.528,53.69 L379.528,62.783 z M418.593,69.778 L418.593,84.467 L409.44,84.467 L409.44,46.695 L424.267,46.695 C428.62,46.695 432.006,47.827 434.432,50.087 C436.862,52.346 438.073,55.072 438.073,58.265 C438.073,60.45 437.412,62.585 436.095,64.668 C434.774,66.747 432.616,68.217 429.617,69.076 L438.821,84.467 L428.121,84.467 L419.665,69.778 z M418.593,53.69 L418.593,62.783 L424.267,62.783 C425.658,62.783 426.753,62.372 427.557,61.545 C428.361,60.723 428.763,59.637 428.763,58.292 C428.763,56.948 428.352,55.843 427.529,54.984 C426.711,54.12 425.621,53.69 424.267,53.69 z M472.855,46.589 L472.855,53.584 L459.262,53.584 L459.262,61.707 L471.251,61.707 L471.251,68.702 L459.262,68.702 L459.262,77.471 L472.855,77.471 L472.855,84.467 L450.109,84.467 L450.109,46.589 z M508.385,46.589 L508.385,53.584 L494.792,53.584 L494.792,61.707 L506.782,61.707 L506.782,68.702 L494.792,68.702 L494.792,77.471 L508.385,77.471 L508.385,84.467 L485.639,84.467 L485.639,46.589 z" />
        <path d="M65.656,-0 C101.914,-0 131.309,29.55 131.309,66 C131.309,102.453 101.914,132 65.656,132 C29.394,132 0,102.453 0,66 C0,29.55 29.394,-0 65.656,-0 z M65.656,81.273 L35.811,81.273 L35.811,99.273 L65.656,99.273 L65.656,81.273 z M95.497,57.271 L35.811,57.271 L35.811,75.271 L95.497,75.271 L95.497,57.271 z M95.497,33.273 L35.811,33.273 L35.811,51.273 L95.497,51.273 L95.497,33.273 z" />
      </g>
    </svg>
  );
};

export default Formspree;
