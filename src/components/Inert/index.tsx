"use client";
import { ReactNode, useEffect, useRef } from "react";

interface IInertProps {
  children: ReactNode;
  isVisible: boolean;
  className?: string;
}

export default function Inert({ children, isVisible, className }: IInertProps) {
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (elementRef.current) {
      elementRef.current.inert = !isVisible;
    }
  }, [isVisible]);

  return (
    <div className={`${className}`} ref={elementRef}>
      {children}
    </div>
  );
}
