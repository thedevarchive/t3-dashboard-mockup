export const formatRate = (amount: number): string => {
    let sign: string = "";
    sign = amount !== 0 ? ( amount > 0 ? "+" : "-") : "";
    return sign + amount.toLocaleString() + "%";
}