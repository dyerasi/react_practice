import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoAlert } from "react-icons/go";

function ButtonPage() {
  const onClick = () => {
    //console.log("hello");
  };
  return (
    <div className="App">
      <div>
        <Button primary className="mb-1" onClick={onClick}>
          <GoBell />
          Click Me
        </Button>
      </div>
      <div>
        <Button primary rounded>
          <GoCloudDownload />
          Click Me
        </Button>
      </div>
      <div>
        <Button primary outline>
          <GoAlert />
          Buy Me
        </Button>
      </div>
      <div>
        <Button warning>Hire Me</Button>
      </div>
      <div>
        <Button danger>Fire Me</Button>
      </div>
      <div>
        <Button success outline>
          Fire Me
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
