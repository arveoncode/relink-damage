import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import html2canvas from "html2canvas";
import { toast } from "sonner";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

//hard copied from https://github.com/false-spring/gbfr-logs/blob/main/src/utils.ts
export const exportScreenshotToClipboard = (selector = "#build") => {
  const build = document.querySelector(selector) as HTMLElement;

  html2canvas(build, {
    backgroundColor: "#252525",
    allowTaint: true,
    useCORS: true,
  }).then((canvas) => {
    canvas.toBlob((blob) => {
      if (blob) {
        const item = new ClipboardItem({ "image/png": blob });
        navigator.clipboard.write([item]).then(() => {
          toast.success("Build copied to clipboard");
        });
      }
    });
  });
};
