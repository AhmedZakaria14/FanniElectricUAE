export const RENTAL_NOTICE = 'الموقع متاح للإيجار';

export function rentalDescription(description: string) {
  return `${RENTAL_NOTICE}. ${description.trim()}`;
}
