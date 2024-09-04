import Image from "next/image";
import Wrapper from './wrapper';
import Hello from './hello';
//import Counter from './counter';
import Calc from './calculator';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Wrapper>
        <Hello name="react" color="red" isSpecial={3} />
        <Calc />
      </Wrapper>
    </main>
  );
}
