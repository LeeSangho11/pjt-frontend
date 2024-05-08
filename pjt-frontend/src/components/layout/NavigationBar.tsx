import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <>
      <ul>
        <ol>
          <Link to={"board"}>게시판</Link>
        </ol>
        <ol>
          <Link to={"login"}>로그인</Link>
        </ol>
        <ol>
          <Link to={"join"}>회원가입</Link>
        </ol>
      </ul>
    </>
  );
}
