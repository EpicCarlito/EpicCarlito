export interface ImageParams {
  src: string;
  title: string;
  artist: string;
  desc: string;
}

export const decodeHtml = (str: string) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = str;
  return txt.value;
};
