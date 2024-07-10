import "./Colum.css";
function Card() {
  return (
    <div classname="card">
      <div classname="makeFlex CardInnerInfo">
        <div classname="image">
          <img
            src="https://promos.makemytrip.com/notification/xhdpi//116X116-airindia-express-12345.jpg?im=Resize=(134,134)"
            alt=""
          />
        </div>
        <div className="CardInfo">
          <div className="Name">Vitjet</div>
          <div className="Tiltle">not sure of your plan</div>
          <div className="Indo">with flight fares starting @ ₹1,799*.</div>
        </div>
      </div>
    </div>
  );
}
export default Card;
