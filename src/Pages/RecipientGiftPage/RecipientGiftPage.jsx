import "./RecipientGiftPage.scss";
import giftScreen from "../../assets/images/gift-screen.svg";
import videoModal from "../../assets/images/video-modal.svg";
import video from "../../assets/video/video.mp4";
import Popup from "reactjs-popup";
import { useState } from "react";
function RecipientGiftPage() {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  return (
    <main className="recipient-gift-page">
      <Popup open={open} closeOnDocumentClick onClose={closeModal} modal nested>
        <div className="recipient-gift-page__video-container">
          <button className="recipient-gift-page__close" onClick={closeModal}>
            &times;
          </button>
          <video
            className="recipient-gift-page__video"
            controls
            autoPlay
            src={video}
          />
          <button className="recipient-gift-page__button">Save Video</button>
        </div>
      </Popup>
      <div className="recipient-gift-page__container">
        <img src={giftScreen} onClick={() => setOpen((o) => !o)} />
      </div>
    </main>
  );
}
export default RecipientGiftPage;