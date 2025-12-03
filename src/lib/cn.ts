/**
 * Utility function for conditionally joining class names together.
 * Filters out falsy values (undefined, null, false, '') and joins the rest with spaces.
 *
 * @example
 * cn('base', isActive && 'active', isDisabled && 'disabled')
 * // Returns 'base active' if isActive is true and isDisabled is false
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ')
}
