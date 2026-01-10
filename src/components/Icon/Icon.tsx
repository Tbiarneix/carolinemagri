/**
 * Composant Icon - SVG inline pour optimisation éco-index
 * Remplace lucide-react pour éviter les requêtes HTTP supplémentaires
 * Paths SVG issus de https://lucide.dev (MIT License)
 */

type IconName = "external-link" | "calendar-plus" | "chevron-left" | "chevron-right";

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
  "aria-hidden"?: boolean | "true" | "false";
}

// Paths SVG de Lucide Icons (https://github.com/lucide-icons/lucide)
const icons: Record<IconName, React.ReactNode> = {
  "external-link": (
    <>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" x2="21" y1="14" y2="3" />
    </>
  ),
  "calendar-plus": (
    <>
      <path d="M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
      <line x1="19" x2="19" y1="16" y2="22" />
      <line x1="16" x2="22" y1="19" y2="19" />
    </>
  ),
  "chevron-left": <path d="m15 18-6-6 6-6" />,
  "chevron-right": <path d="m9 18 6-6-6-6" />,
};

export const Icon = ({ name, size = 24, className, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    {icons[name]}
  </svg>
);
