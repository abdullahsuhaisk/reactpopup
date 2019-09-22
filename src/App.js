import React from "react";
import Popup from "./popup";

const ChildComponent = () => {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus
        luctus felis, sodales rutrum mi. Nullam vitae justo vel augue cursus
        tincidunt at vitae libero. Donec arcu massa, posuere in lacus quis,
        ultricies tempor tellus. Nulla facilisi. Vivamus commodo ac elit et
        finibus. Nam turpis dolor, facilisis ac augue at, imperdiet fermentum
        metus. Duis volutpat nisi vel nunc tincidunt, nec dignissim lacus
        porttitor. Nulla pharetra metus at sem scelerisque, non hendrerit neque
        consectetur. Ut sagittis, felis sed tincidunt molestie, ligula nunc
        rhoncus augue, auctor hendrerit est purus eget magna. Sed libero enim,
        volutpat et vulputate id, aliquam id massa.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus
        luctus felis, sodales rutrum mi. Nullam vitae justo vel augue cursus
        tincidunt at vitae libero. Donec arcu massa, posuere in lacus quis,
        ultricies tempor tellus. Nulla facilisi. Vivamus commodo ac elit et
        finibus. Nam turpis dolor, facilisis ac augue at, imperdiet fermentum
        metus. Duis volutpat nisi vel nunc tincidunt, nec dignissim lacus
        porttitor. Nulla pharetra metus at sem scelerisque, non hendrerit neque
        consectetur. Ut sagittis, felis sed tincidunt molestie, ligula nunc
        rhoncus augue, auctor hendrerit est purus eget magna. Sed libero enim,
        volutpat et vulputate id, aliquam id massa.
      </p>
    </div>
  );
};

function App() {
  return (
    <Popup
      popupName="Open PopUp"
      popupHeader="Pop Up"
      closePopup="Close th PopUp"
    >
      <ChildComponent />
    </Popup>
  );
}

export default App;
