import "./ModularWindow.css";

export default function ModularWindow({
  targetTableItem,
  setStateModularWindow,
  setTargetTableItem,
}) {
  const close = () => {
    setStateModularWindow(false);
    setTargetTableItem(null);
  };

  return (
    <div className="window">
      <div className="window__content">
        <div className="window__content__box-btn">
          <button
            type="button"
            onClick={() => close()}
            className="window__content__box-btn__btn-close"
          >
            &#10006;
          </button>
        </div>
        <ul className="window__content__ul">
          <hr></hr>
          <li>
            <b>Name</b>: {targetTableItem.name}
          </li>
          <hr></hr>
          <li>
            <b>Username:</b> {targetTableItem.username}
          </li>
          <hr></hr>
          <li>
            <b>Email:</b> {targetTableItem.email}
          </li>
          <hr></hr>
          <li>
            <b>Address:</b> {targetTableItem.address.street},
            {targetTableItem.address.suite}, {targetTableItem.address.city},
            {targetTableItem.address.zipcode}
          </li>
          <hr></hr>
          <li>
            <b>Phone:</b> {targetTableItem.phone}
          </li>
          <hr></hr>
          <li>
            <b>Website:</b> {targetTableItem.website}
          </li>
          <hr></hr>
          <li>
            <b>Company:</b> {targetTableItem.company.name}
          </li>
          <hr></hr>
        </ul>
      </div>
    </div>
  );
}
