import Introduction from "../components/Home/Introduction";
import ModelList from "../components/Home/ModelList";
import Advantages from "../components/Home/Advantages";

export default function Home() {
  return (
    <>
      <Introduction />
      <Advantages />
      <ModelList limit={4} />
    </>
  );
}
