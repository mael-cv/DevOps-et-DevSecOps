export const metadata = {
  title: "App Router",
};

//import Counter from "app/counter";
import Calculator from "app/calculator"

export default function Page() {
  return (
    <>
      <h1>App Router</h1>
      <Calculator />
    </>
    );
}