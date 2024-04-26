import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BoardForm from "./components/BoardForm";

type IreqData = {
  [key: string]: string;
};

export default function Detail() {
  const [inputDatas, setInputDatas] = useState<IreqData>({});

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/board/${params.boardId}`);
      const resData = await res.json();

      setInputDatas(resData);
    };

    fetchData();
  }, [params.boardId]);

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

    const res = await fetch(`/board/${params.boardId}/update`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json;",
      },
      body: JSON.stringify(inputDatas),
    });

    if (res.ok) navigate("/board");
  };

  const handleDelete = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const res = await fetch(`/board/${params.boardId}/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json;",
      },
      body: JSON.stringify(params.boardId),
    });

    if (res.ok) navigate("/board");
  };

  return (
    <BoardForm
      handleChange={handleChange}
      handleDelete={handleDelete}
      handleSubmit={handleSubmit}
      inputDatas={inputDatas}
    ></BoardForm>
  );
}
