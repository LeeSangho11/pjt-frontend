import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BoardForm from "../Board/components/BoardForm";

type IreqData = {
  [key: string]: string;
};

export default function Write() {
  const [inputDatas, setInputDatas] = useState<IreqData>({});

  const navigate = useNavigate();

  const handleChange = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;

    setInputDatas((prevInputData) => {
      return {
        ...prevInputData,
        [id]: newValue,
      };
    });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const res = await fetch(`/board/write`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;",
      },
      body: JSON.stringify(inputDatas),
    });

    if (res.ok) navigate("/board");
  };

  return (
    <BoardForm
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      inputDatas={inputDatas}
    ></BoardForm>
  );
}
