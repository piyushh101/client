import "./Loader.scss";
export default function Loader({ hidden = false }) {
  return (
    <div className={`loader-wrapper ${hidden ? "hidden" : ""}`}>
      <div className="loader"></div>
    </div>
  );
}
