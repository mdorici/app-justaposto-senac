
import "./styles.css";

type Props = {
  text: string;
};

export default function ButtonInverse({ text }: Props) {
  return <div className="jp-btn jp-btn-white">{text}</div>;
}