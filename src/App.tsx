import "./styles/main.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Section from "./components/Section";
import Warn from "./components/Warn";
import { useEffect, useState } from "react";
import { UserConfig } from "./interfaces";
import axios, { AxiosResponse } from "axios";

const BASE_URL: string = "https://api.github.com/search/users?q=";

function App() {
  const [input, setInput] = useState<string>("");
  const [users, setUsers] = useState<UserConfig[]>([]);
  const [warn, setWarn] = useState<boolean>(false);

  useEffect(() => {
    if (!input.trim()) return;

    axios
      .get(BASE_URL + input)
      .then((res: AxiosResponse) => {
        const options: UserConfig[] = res.data.items
          .map((item: any) => {
            return {
              username: item.login,
              url: item.html_url,
              avatar: item.avatar_url,
            };
          })
          .filter((el: UserConfig) =>
            el.username.toLowerCase().includes(input.toLowerCase())
          );

        setUsers(options);
      })
      .catch((err) => {
        console.log(err);
        setWarn(true);
      });
  }, [input]);

  return (
    <div className="App">
      {warn && <Warn warn={warn} setWarn={setWarn} />}
      <Header />
      <Form input={input} setInput={setInput} />
      <Section users={users} />
    </div>
  );
}

export default App;
