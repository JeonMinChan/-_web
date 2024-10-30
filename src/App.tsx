import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/globalStyle";
import {
  FrameInputPage,
  SideBar,
  ChooseFrame,
  ShareToast,
  Randing,
} from "./components";

import BackGround from "./components/common/BackGround";
import BackGRoundImg from "@src/assets/img/defaultBackground.svg";
import FindFrame from "./components/FindFrame";

function App() {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);
  const [imgUrl, setImgUrl] = useState<string>("");
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <BackGround backgroundImgUrl={BackGRoundImg}>
        <Routes>
          <Route path="/" element={<Randing />} />
          <Route path="/frame-choose" element={<ChooseFrame />} />
          <Route path="/frame-find" element={<FindFrame />} />
          <Route
            path="/frame-input"
            element={
              <FrameInputPage
                setIsSideBarOpen={setIsSideBarOpen}
                setImgUrl={setImgUrl}
              />
            }
          />
        </Routes>
        {isSideBarOpen && (
          <SideBar imgUrl={imgUrl} setIsShowModal={setIsShowModal} />
        )}
        {isShowModal && <ShareToast setIsShowModal={setIsShowModal} />}
      </BackGround>
    </BrowserRouter>
  );
}

export default App;
