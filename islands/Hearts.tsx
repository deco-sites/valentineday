import { useEffect, useState } from "preact/hooks";

export default function Heart() {
  const [pageHeight, setPageHeight] = useState(0);
  const [pageWidth, setPageWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setPageHeight(document.documentElement.scrollHeight);
      setPageWidth(document.documentElement.scrollWidth);
    };

    handleResize();

    globalThis.addEventListener("scroll", handleResize);

    return () => {
      globalThis.removeEventListener("scroll", handleResize);
    };
  }, []);

  return (
    <div
      class="bg_heart"
      style={{ width: `${pageWidth}px`, height: `${pageHeight}px` }}
    />
  );
}
