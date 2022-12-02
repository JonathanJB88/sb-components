import './mylabel.css';

interface MyLabelProps {
  /**
   * Label contents
   */
  label: string;
  /**
   * How large should the label be?
   */
  size: 'normal' | 'h1' | 'h2' | 'h3';
  /**
   * Should be it capitalized?
   */
  allCaps?: boolean;
  /**
   * Set the color
   */
  color?: 'primary' | 'secondary' | 'tertiary';

  /**
   * Custom the font color
   */
  fontColor?: string;

  /**
   * Set the backgroundColor
   */
  backgroundColor?: string;
}

/**
 * UI Label component for user interface
 */
export const MyLabel = ({
  label = 'No Label',
  size = 'normal',
  allCaps = false,
  color = 'primary',
  fontColor = '',
  backgroundColor = 'transparent',
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor, backgroundColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
