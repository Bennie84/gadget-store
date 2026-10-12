import { useState } from "react";

function PhoneImage({ src, name }) {
  const [broken, setBroken] = useState(false);

  if (!src || broken) {
    return (
      <div className="img-placeholder">
        {/* <span className="big-emoji">📱</span> */}
        <span>{name}</span>
      </div>
    );
  }
  return <img src={src} alt={name} onError={() => setBroken(true)} />;
}

export default PhoneImage;
