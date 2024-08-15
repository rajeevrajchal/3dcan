import useApp from "../store/app_data";

const actions = [
  {
    label: "ring",
    key: "ring",
  },
  {
    label: "torus",
    key: "torus",
  },
  {
    label: "torus Knot",
    key: "torus_knot",
  },
];
const Action = () => {
  const { setShowAction, showAction, selectTexture, setSelectTexture } =
    useApp();

  return (
    <div className="action_group">
      <div className="texture">
        <p>Textures</p>
        <div className="texture_select">
          {["original", "static", "video"].map((item) => (
            <button
              className={selectTexture === item ? "active" : ""}
              onClick={() => {
                if (item === "original") {
                  window.location.reload();
                } else {
                  setSelectTexture(showAction === item ? null : item);
                }
              }}
              key={`texture-${item}`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="texture">
        <p>Buttons</p>
        <div className="action_group_button">
          {actions.map((item) => (
            <button
              className={showAction === item.key ? "active" : ""}
              onClick={() =>
                setShowAction(showAction === item.key ? null : item.key)
              }
              key={`action-${item.key}`}
            >
              Show {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Action;
