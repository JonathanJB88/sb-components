/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
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
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor, }: MyLabelProps) => JSX.Element;
