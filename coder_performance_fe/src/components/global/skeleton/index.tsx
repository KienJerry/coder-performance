type ITextField = {
  style?: React.CSSProperties;
};

export default function Skeleton({ ...field }: ITextField) {
  return <div className="skeleton" {...field} />;
}
