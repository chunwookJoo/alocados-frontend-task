export const getFormatDigits = (
  value: number,
  maximumFractionDigits: number
) => {
  const option = {
    maximumFractionDigits,
  };

  return value.toLocaleString("ko-KR", option);
};
