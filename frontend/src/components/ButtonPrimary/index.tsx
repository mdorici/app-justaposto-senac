import "./styles.css";

type Props = {
  text: string;
};

export default function ButtonPrimary({ text }: Props) {
  return <div className="jp-btn jp-btn-blue">{text}</div>;
}