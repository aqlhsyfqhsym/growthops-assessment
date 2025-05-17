"use client";

type AbstractProps = {
  align?: "left" | "right";
  variant?: "svg1" | "svg2";
};

export default function Abstract({
  align = "left",
  variant = "svg1",
}: AbstractProps) {
  const isLeft = align === "left";

  return (
    <div className={`absolute   z-10 ${isLeft ? "left-0" : "right-0"} sm:block hidden` }>
      {variant === "svg1" ? (
     
        <svg
          width="652"
          height="1061"
          viewBox="0 0 652 1061"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.3" filter="url(#filter0_f_2_1139)">
            <path
              d="M213.926 366.465C128.397 198.892 -16.8731 154.999 -78.8171 154C-103.18 349.801 -93.9014 766.499 138.116 866.883C428.138 992.362 577.037 782.897 455.352 788.396C333.667 793.895 320.838 575.93 213.926 366.465Z"
              fill="url(#paint0_linear_2_1139)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_2_1139"
              x="-242"
              y="-0.0005"
              width="894"
              height="1061"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="77"
                result="effect1_foregroundBlur_2_1139"
              />
            </filter>
            <linearGradient
              id="paint0_linear_2_1139"
              x1="-109.141"
              y1="154.499"
              x2="576.734"
              y2="673.658"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#19B2A7" stopOpacity="0.4" />
              <stop offset="0.1875" stopColor="#5EC9C1" stopOpacity="0.28" />
              <stop offset="1" stopColor="#07DDD0" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
      ) : ( 
        <svg
          width="457"
          height="1062"
          viewBox="0 0 457 1062"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.4" filter="url(#filter0_f_2_1077)">
            <path
              d="M542.31 366.5C432.31 198.9 245.477 155 165.81 154C134.477 349.833 146.41 766.6 444.81 867C817.81 992.5 1009.31 783 852.81 788.5C696.31 794 679.81 576 542.31 366.5Z"
              fill="url(#paint0_linear_2_1077)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_2_1077"
              x="0"
              y="0"
              width="1061.66"
              height="1061.12"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="77"
                result="effect1_foregroundBlur_2_1077"
              />
            </filter>
            <linearGradient
              id="paint0_linear_2_1077"
              x1="126.81"
              y1="154.5"
              x2="839.31"
              y2="848"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E9FFFA" stop-opacity="0.16" />
              <stop
                offset="0.130208"
                stop-color="#A7FBE7"
                stop-opacity="0.34375"
              />
              <stop offset="1" stop-color="#116853" />
            </linearGradient>
          </defs>
        </svg>
      )}
    </div>
  );
}
