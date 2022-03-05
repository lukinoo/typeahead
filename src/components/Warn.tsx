import { StyledWarn, Button } from "../styledComponents/Warn.styled";

interface Props {
  warn: boolean;
  setWarn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Warn: React.FC<Props> = ({ warn, setWarn }) => {
  const warnActive: string = warn ? "warn-active" : "";

  return (
    <StyledWarn className={warnActive}>
      <p>
        Github API has limit only 20 requests, if limit exceed you have to wait
        10 minutes to make requests again.
      </p>
      <Button type="button" onClick={() => setWarn(false)}>
        accept
      </Button>
    </StyledWarn>
  );
};

export default Warn;
