export function formatNumber(value: number): string {
  return new Intl.NumberFormat('pt-BR', { maximumSignificantDigits: 10 }).format(value)
}