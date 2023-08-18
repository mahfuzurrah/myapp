import Card from "./Components/ProfileCard/card";
import userImg from "./Components/assets/img/user.png"

function App() {
  const cardData = {
    userImg: userImg,
    pName: "Johnny’s Cash",
    tUserN: "@degenjohndoe",
    Fvalu: 545,
  };

  return (
    <div className="App">
      <div className="col-lg-3 col-md-6 col-sm-12">
      <Card
          userImg={cardData.userImg}
          pName={cardData.pName}
          tUserN={cardData.tUserN}
          Fvalu={cardData.Fvalu}
        />
      </div>
    </div>
  );
}

export default App;
