import { Router } from "./router/Router";
import "./styles.css";

// AtomicDesignに取り組む時のポイント
// 1.あくまでベース
//  AtomicDesignはあくまで概念だと認識し、プロジェクトやチームに合わせてカスタマイズしていく
// 2.初めから分けない
//  慣れないうちに無理にコンポーネントに分けようとするとしんどい。まずは書いて定期的にリファクタリング
// 3.要素の関心を意識
// 「何に関心があるコンポーネントなのか」を意識しながら分割したりpropsを定義したりする

export default function App() {
  return <Router />;
}
