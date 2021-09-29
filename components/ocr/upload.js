import axios from "axios";
import { useState } from "react";

const url =
  "https://vision.googleapis.com/v1/images:annotate?&key=" +
  process.env.NEXT_PUBLIC_key;

const [imgData, setImgData] = useState(null);
const [error, setError] = useState(null);

let data = JSON.stringify({
  requests: [
    {
      image: {
        source: {
          imageUri: "https://i.ibb.co/T44y25R/word-random-texta.png",
        },
      },
      features: {
        type: "TEXT_DETECTION",
      },
    },
  ],
});

export const getText = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post(url, data);
    setImgData(res);
  } catch (err) {
    setError(err);
  }
};
