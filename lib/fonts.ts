/**
 * Utility function to get Manrope font classname
 * Usage: manropeFont('text-lg', 'font-semibold')
 */
export const manropeFont = (...classes: string[]): string => {
  return `font-manrope ${classes.join(" ")}`;
};

/**
 * Get Manrope font with specific weight
 * Usage: manropeFontWeight('font-semibold', 'text-2xl')
 */
export const manropeFontWeight = (
  weight: "light" | "normal" | "medium" | "semibold" | "bold",
  ...classes: string[]
): string => {
  const weightMap = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };
  return `font-manrope ${weightMap[weight]} ${classes.join(" ")}`;
};
