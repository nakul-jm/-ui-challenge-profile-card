import React from 'react';
import Avatar from './Avatar';
import Stat from './Stat';
import Button from './Button';
import './ProfileCard.css';

interface ProfileCardProps {
  name: string;
  title: string;
  bio?: string;
  avatarSrc?: string;
  stats: Array<{ label: string; value: string | number }>;
  primaryAction: { label: string; onClick: () => void };
  secondaryAction?: { label: string; onClick: () => void };
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  title,
  bio,
  avatarSrc,
  stats,
  primaryAction,
  secondaryAction,
}) => {
  return (
    <div className="profile-card">
      <div className="profile-card-content">
        <Avatar src={avatarSrc} size={80} fallback={name.charAt(0)} alt={name} />
        <h2 className="profile-name">{name}</h2>
        <p className="profile-title">{title}</p>
        {bio && <p className="profile-bio">{bio}</p>}
        <div className="profile-stats">
          {stats.map((stat, idx) => (
            <Stat key={idx} label={stat.label} value={stat.value} />
          ))}
        </div>
        <div className="profile-actions">
          <Button variant="primary" onClick={primaryAction.onClick}>
            {primaryAction.label}
          </Button>
          {secondaryAction && (
            <Button
              variant="secondary"
              onClick={secondaryAction.onClick}
              className="secondary-action"
            >
              {secondaryAction.label}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;