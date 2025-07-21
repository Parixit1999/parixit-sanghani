import React from 'react';
import './ProfilePicture.css'; // Assuming you have a CSS file for styles

interface ProfilePictureProps {
    src: string;
    alt?: string;
    size?: number; // Size in pixels
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({ src, alt = 'Profile Picture', size }) => {
    return (
        <img
            src={src}
            alt={alt}
            className="profile-picture"
        />
    );
};

export default ProfilePicture;