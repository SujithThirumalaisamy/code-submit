export default function RowWrapper({ children }) {
  return (
    <div className="flex flex-row gap-2" style={{ height: "100%", width: "100%" }}>
      {children}
    </div>
  );
}
