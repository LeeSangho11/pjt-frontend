import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

type IreqData = {
  [key: string]: string;
};

export default function Detail() {
  const [inputDatas, setInputDatas] = useState<IreqData>({});

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (!params.boardId) return;

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

    const fetchType = params.boardId ? "update" : "write";
    const fetchMethod = params.boardId ? "PATCH" : "POST";

    await fetch(`/board/${params.boardId}/${fetchType}`, {
      method: fetchMethod,
      headers: {
        "Content-Type": "application/json;",
      },
      body: JSON.stringify(inputDatas),
    });
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
    <form>
      <input
        type="text"
        onChange={(e) => handleChange("title", e)}
        value={inputDatas?.title || ""}
      />
      <input
        type="text"
        onChange={(e) => handleChange("subject", e)}
        value={inputDatas?.subject || ""}
      />
      <input
        type="text"
        onChange={(e) => handleChange("content", e)}
        value={inputDatas?.content || ""}
      />
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        {params.boardId ? "수정" : "작성"}
      </button>
      <button type="submit" onClick={(e) => handleDelete(e)}>
        삭제
      </button>
    </form>
  );
}
