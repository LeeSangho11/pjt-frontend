type IreqData = {
  [key: string]: string;
};

type IFromType = {
  handleChange: (id: string, e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.MouseEvent<HTMLElement>) => void;
  handleDelete?: (e: React.MouseEvent<HTMLElement>) => void;
  inputDatas: IreqData;
};

export default function BoardForm(props: IFromType) {
  const { handleChange, handleDelete, handleSubmit, inputDatas } = props;

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
        수정
      </button>
      {handleDelete && (
        <button type="submit" onClick={(e) => handleDelete(e)}>
          삭제
        </button>
      )}
    </form>
  );
}
