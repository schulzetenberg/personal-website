interface SocialLink {
  href: string;
  icon: string;
  label: string;
  ariaLabel: string;
}

const socialLinks: SocialLink[] = [
  {
    href: 'https://www.linkedin.com/in/schulzetenberg',
    icon: 'fa-linkedin',
    label: 'LinkedIn',
    ariaLabel: 'Navigate to LinkedIn profile',
  },
  {
    href: 'https://www.instagram.com/schulzetenberg',
    icon: 'fa-instagram',
    label: 'Instagram',
    ariaLabel: 'Navigate to Instagram profile',
  },
  {
    href: 'https://open.spotify.com/user/waterland15',
    icon: 'fa-spotify',
    label: 'Spotify',
    ariaLabel: 'Navigate to Spotify profile',
  },
  {
    href: 'https://github.com/schulzetenberg',
    icon: 'fa-github',
    label: 'Github',
    ariaLabel: 'Navigate to Github profile',
  },
];

interface SocialLinksProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export const SocialLinks = ({ size = 'medium', className = '' }: SocialLinksProps) => {
  const sizeClasses = {
    small: 'fa-lg',
    medium: 'fa-3x',
    large: 'fa-4x',
  };

  // Use social-link class for footer styling, nav-link for header
  const linkClass = size === 'large' ? 'social-link' : 'nav-link';

  return (
    <ul className={`flex flex-wrap list-none pl-0 mb-0 flex-row ${className}`}>
      {socialLinks.map((link) => (
        <li key={link.label}>
          <a className={`${linkClass} ${className}`} href={link.href} target="_blank" rel="noopener noreferrer">
            <i className={`fab ${link.icon} ${sizeClasses[size]}`} aria-label={link.label} />
            <span className="sr-only">{link.ariaLabel}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};
