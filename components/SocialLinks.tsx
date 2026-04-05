interface SocialLink {
  href: string;
  icon: string;
  iconStyle?: 'fab' | 'fa-solid';
  label: string;
  ariaLabel: string;
}

const socialLinks: SocialLink[] = [
  {
    href: 'mailto:contact@schulzetenberg.com',
    icon: 'fa-envelope',
    iconStyle: 'fa-solid',
    label: 'Email',
    ariaLabel: 'Send an email to contact@schulzetenberg.com',
  },
  {
    href: 'https://www.linkedin.com/in/schulzetenberg',
    icon: 'fa-linkedin',
    label: 'LinkedIn',
    ariaLabel: 'Navigate to LinkedIn profile',
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
    <ul className={`flex flex-wrap justify-center gap-8 list-none pl-0 mb-0 flex-row ${className}`}>
      {socialLinks.map((link) => (
        <li key={link.label}>
          <a
            className={`${linkClass} ${className} focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-black rounded-sm block p-2`}
            href={link.href}
            target={link.href.startsWith('mailto:') ? undefined : '_blank'}
            rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
          >
            <i className={`${link.iconStyle ?? 'fab'} ${link.icon} ${sizeClasses[size]}`} aria-hidden="true" />
            <span className="sr-only">{link.ariaLabel}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};
