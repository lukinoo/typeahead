import { StyledSection, User, Image } from "../styledComponents/Section.styled";
import { UserConfig } from "../interfaces";

interface Props {
  users: UserConfig[];
}

const Section: React.FC<Props> = ({ users }) => {
  return (
    <StyledSection>
      {/* <pre style={{ color: "black" }}>{JSON.stringify(users, null, 2)}</pre> */}
      <ul>
        {users.map((user: UserConfig, idx: number) => {
          return (
            <User
              target="_blank"
              rel="noreferrer"
              key={idx}
              href={`${user.url}`}
            >
              <li>{user.username}</li>
              <Image src={user.avatar} alt="user" />
            </User>
          );
        })}
      </ul>
    </StyledSection>
  );
};

export default Section;
