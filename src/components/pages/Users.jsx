import styled from "styled-components";
import { SearchInput } from "../molecules/Seachinput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((value) => {
  return {
    id: value,
    name: `sakano-${value}`,
    image: "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0",
    email: "msakano@gmail.com",
    phone: "ssss-ssss",
    company: {
      name: "テスト会社",
      website: "http://google.com/"
    }
  };
});

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
  width: 100%;
  display: grid;
  grid-template-columns: background-repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
