import React from 'react';
import './Avatar.css';

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: number; // in pixels
  fallback?: string; // text to show if no image
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, size = 48, fallback }) => {
  const sizePx = `${size}px`;
  const fallbackText = fallback || (alt ? alt.charAt(0) : '?');

  return (
    <div className="avatar" style={{ width: sizePx, height: sizePx }}>
      {src ? (
        <img src={src} alt={alt} className="avatar-image" />
      ) : (
        <span className="avatar-fallback">{fallbackText}</span>
      )}
    </div>
  );
};

export default Avatar;