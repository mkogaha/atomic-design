import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `aaa-${val}`,
    image: "https://source.unsplash.com/photos/bIhpiQA009k",
    email: "1111@aaa.com",
    tel: "000-999-8888",
    company: "ああああ会社",
    web: "htttttt.com",
  };
});

const user = {
  name: "aaa",
  image: "https://source.unsplash.com/photos/bIhpiQA009k",
  email: "1111@aaa.com",
  tel: "000-999-8888",
  company: "ああああ会社",
  web: "htttttt.com",
};

export const Users = () => {
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
const SUserArea = styled.div`
  padding-top: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, maxmin(200px, 1fr));
  grid-gap: 20px;
`;
