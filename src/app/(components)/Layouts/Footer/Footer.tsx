import { Meteors } from "@/components/ui/meteors";

export const Footer = () => {
  const packageJson = require("@/../../package.json");
  return (
    <footer className="w-full">
      <div className=" w-full relative">
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden flex flex-col justify-end items-start">
          <div className="flex flex-col gap-4">
            <div className="h-5 w-5 rounded-full border flex items-center justify-center border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>
            <div className="flex justify-between">
              <h3 className="font-bold text-lg text-white relative z-50">
                Relink Damage Calculator App {packageJson.version}
              </h3>
            </div>
          </div>

          <Meteors number={40} />
        </div>
      </div>
    </footer>
  );
};
