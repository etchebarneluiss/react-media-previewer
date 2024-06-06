import React, { useState } from "react";
import mime from "mime-types";
import PDFViewer from "./PDFViewer";
import {
  isAudioFile,
  isImageFile,
  isOfficeExcelFile,
  isOfficePPTFile,
  isOfficeWordFile,
  isPDFFile,
  isVideoFile,
} from "../utils";
import styles from "../styles/styles.module.css";
import { AiOutlineRotateLeft, AiOutlineRotateRight } from "react-icons/ai";

type PropType = {
  url: string;
  urlType?: string;
};

const PreviewModal: React.FC<PropType> = ({ url, urlType }) => {
  const [rotate, setRotate] = useState<number>(0);
  const type = mime.lookup(url) || urlType || "image";
  const mediaFile = () => {
    if (isImageFile(type))
      return (
        <>
          <img
            alt=""
            src={url}
            className="max-h-4/5 max-w-full block overflow-auto select-none"
            style={{ transform: `rotate(${rotate}deg)` }}
          />
          <div className="fixed inset-x-1/2 bottom-8 flex justify-center">
            <a className="my-auto mx-4 bg-black rounded-full p-2">
              <AiOutlineRotateLeft
                size="1rem"
                className="text-white hover:!text-red-500 cursor-pointer"
                onClick={() => setRotate(rotate - 90)}
              />
            </a>
            <a className="my-auto mx-4 bg-black rounded-full p-2">
              <AiOutlineRotateRight
                size="1rem"
                className="text-white hover:!text-red-500 cursor-pointer"
                onClick={() => setRotate(rotate + 90)}
              />
            </a>
          </div>
        </>
      );
    if (isPDFFile(type))
      return (
        <div className={styles.mediaContainer}>
          <PDFViewer url={url} />
        </div>
      );
    if (isOfficeWordFile(url))
      return (
        <iframe
          className={styles.docContainer}
          src={`https://view.officeapps.live.com/op/embed.aspx?src=${url}`}
        />
      );
    if (isOfficePPTFile(url))
      return (
        <iframe
          className={styles.pptContainer}
          src={`https://view.officeapps.live.com/op/embed.aspx?src=${url}`}
        />
      );
    if (isOfficeExcelFile(url))
      return (
        <iframe
          className={styles.excelContainer}
          src={`https://view.officeapps.live.com/op/embed.aspx?src=${url}`}
        />
      );
    if (isVideoFile(type) || isAudioFile(type))
      return (
        <video src={url} controls className={styles.mediaContainer}>
          <track kind="captions" />
        </video>
      );
    return (
      <div className="flex items-center justify-center text-white text-lg">
        Unable to preview this unknown file
      </div>
    );
  };
  return mediaFile();
};

export default PreviewModal;
