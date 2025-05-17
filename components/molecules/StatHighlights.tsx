import React from "react";

interface StatBar {
  label: string;
  from: string;
  to: string;
  value: number;
}

interface TitleHeadingProps {
  statPercentage: string;
  statTitle: string;
  description: string;
  bars?: StatBar[];
  highlightColor?: string;
  align?: "start" | "end";
}

const TitleHeading: React.FC<TitleHeadingProps> = ({
  statPercentage,
  statTitle,
  description,
  bars = [],
  highlightColor = "#00E0DC",
  align = "start",
}) => {
  const alignmentClass = align === "start" ? "items-start" : "items-end";
  const marginClass = align === "start" ? "me-20 md:me-0" : "ms-20 md:ms-0";
  const textAlign = align === "start" ? "text-left" : "text-right";

  return (
    <div
      className={`lg:h-48 xl:h-full flex flex-col justify-between ${alignmentClass} ${marginClass}`}
    >
      <div className={`text-white ${textAlign} space-y-6 md:w-2/5`}>
        <div>
          <h1
            className="text-[clamp(2.25rem,6vw,4rem)] font-bold"
            style={{ color: highlightColor }}
          >
            {statPercentage}
          </h1>
          <h2
            className="uppercase text-sm font-semibold"
            style={{ color: highlightColor }}
          >
            {statTitle}
          </h2>
          <p className="text-sm text-gray-300 mt-2">{description}</p>
        </div>

        {bars.map((bar, idx) => (
          <div key={idx} className="space-y-2">
            <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden">
              <div
                className="h-3 rounded-full"
                style={{
                  width: `${bar.value}%`,
                  backgroundColor: highlightColor,
                }}
              ></div>
            </div>
            <p className="text-sm text-gray-300">
              {bar.label} cut from{" "}
              <span className="font-bold">{bar.from}</span> to{" "}
              <span className="font-bold">{bar.to}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleHeading;
