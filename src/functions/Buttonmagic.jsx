import { useRef } from "react";

export default function ButtonMagic() {
  const buttonRef = useRef(null);

  buttonRef.current.style.background = "red";

  return (
    <div>
      <button ref={buttonRef}>Button</button>
    </div>
  );
}
