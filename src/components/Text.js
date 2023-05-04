export default function Text({ variant, style, children }) {  const variantList = [
    {
      name: "primary",
      style: { fontSize: "16px", fontWeight: "bolder", color: "black" },
    },
    {
      name: "primary-2",
      style: { fontSize: "16px", color: "black" },
    },
    {
      name: "primary-3",
      style: { fontSize: "14px", color: "black" },
    },
    {
      name: "primary-4",
      style: { fontSize: "12px", color: "black" },
    },
    {
      name: "secondary",
      style: { fontSize: "14px", fontWeight: "bolder", color: "grey" },
    },
    {
      name: "secondary-2",
      style: { fontSize: "14px", color: "grey" },
    },
    {
      name: "secondary-3",
      style: { fontSize: "8px", color: "grey" },
    },
  ];

  const selectedVariant = variantList.find((v) => {
    return v.name === variant;
  });

  const mergedStyle = { ...selectedVariant.style, ...style };

  return (
    <>
      <div style={mergedStyle}>{children}</div>
    </>
  );
}
