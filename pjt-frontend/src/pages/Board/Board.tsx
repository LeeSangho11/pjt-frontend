import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type IData = {
  boardId: number;
  subject: String;
  title: String;
  content: String;
  createDate: String;
  modifiedDate: String;
};

export default function Board() {
  const [datas, setDatas] = useState<IData[]>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/board");
      const resData = await res.json();

      setDatas(resData);
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        <div>NO</div>
        <div>주제</div>
        <div>제목</div>
        <div>내용</div>
        <div>작성일자</div>
        <button>
          <Link to={"write"}>글 쓰기</Link>
        </button>
        {datas?.map((data) => (
          <div key={`boardId${data.boardId}`}>
            <div>{data.boardId}</div>
            <div>{data.subject}</div>
            <div>
              <Link to={`${data.boardId}`}>{data.title}</Link>
            </div>
            <div>{data.createDate}</div>
          </div>
        ))}
      </div>
    </>
  );
}
