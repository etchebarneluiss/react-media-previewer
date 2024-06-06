const isExtInclude = (filename: string, extList: string[]) => {
  const dotPos = filename.lastIndexOf(".");
  if (dotPos >= 0) {
    const ext = filename.substring(dotPos);
    return extList.includes(ext.toLowerCase());
  }
  return false;
};

const wordExts = [".docx", ".doc", ".rtf", ".html", ".odt"];
const excelExts = [
  ".xlsx",
  ".xls",
  ".csv",
  ".xlsb",
  ".xlsm",
  ".xlt",
  ".xltm",
  ".xltx",
];
const pptExts = [".ppt", ".pptx"];

const getFilename = (filename: string) => {
  const queryPos = filename.indexOf("?");
  if (queryPos >= 0) {
    filename = filename.substring(0, queryPos);
  }
  return filename;
};

export const isImageFile = (contentType: string) => {
  return contentType.startsWith("image");
};

export const isAudioFile = (contentType: string) => {
  return contentType.startsWith("audio");
};

export const isVideoFile = (contentType: string) => {
  return contentType.startsWith("video");
};

export const isPDFFile = (contentType: string) => {
  return contentType.startsWith("application/pdf");
};

export const isOfficeWordFile = (filename: string) => {
  filename = getFilename(filename);
  return isExtInclude(filename, wordExts);
};

export const isOfficeExcelFile = (filename: string) => {
  filename = getFilename(filename);
  return isExtInclude(filename, excelExts);
};

export const isOfficePPTFile = (filename: string) => {
  filename = getFilename(filename);
  return isExtInclude(filename, pptExts);
};
