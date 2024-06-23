import { useState, useRef, useEffect } from "react";

const Toolip = ({ children, popupComponet }) => {
  const [isShow, setIsShow] = useState(false);
  const ref = useRef(null);
  // const useHover = ({ ref, handleMouseEnter, handleMouseLeave }) => {
  useEffect(() => {
    const handleMouseEnter = () => {
      setIsShow(true);
    };
    const handleMouseLeave = () => {
      setIsShow(false);
    };
    ref.current?.addEventListener("mouseenter", handleMouseEnter);
    ref.current?.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      ref.current?.removeEventListener("mouseenter", handleMouseEnter);
      ref.current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [ref.current]);

  return (
    <div className="relative">
      {isShow && (
        <div className="absolute -translate-y-full bg-gray-300 text-slate-500 rounded-lg z-10 -top-2 -left-6">
          {popupComponet}
        </div>
      )}
      <div ref={ref}>{children}</div>
    </div>
  );
};

export default Toolip;
