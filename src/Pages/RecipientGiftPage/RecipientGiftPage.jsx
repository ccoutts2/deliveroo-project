import "./RecipientGiftPage.scss";
import giftScreen from "../../assets/images/gift-screen.svg";
// import GiftModal from "../../components/GiftModal/GiftModal";
import videoModal from "../../assets/images/video-modal.svg";
import Popup from "reactjs-popup";
import { useState } from "react";

function RecipientGiftPage() {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  // const overlayStyle = { background: "rgba(0,0,0,0.5)" };
  // const contentStyle = { background: "#000" };

  return (
    <main className="recipient-gift-page">
      <Popup open={open} closeOnDocumentClick onClose={closeModal} modal nested>
        <div>
          <img src={videoModal} />
          <button className="button">Save Video</button>
        </div>
      </Popup>
      <div className="recipient-gift-page__container">
        <img src={giftScreen} onClick={() => setOpen((o) => !o)} />
      </div>
    </main>
  );
}

export default RecipientGiftPage;
