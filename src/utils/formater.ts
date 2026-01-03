export function formatToBRL(value: number, isCents: boolean = false): string {
    if (isCents) {
        value = value / 100;
    }
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(value);
}