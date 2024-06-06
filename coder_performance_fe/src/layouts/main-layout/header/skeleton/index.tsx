import Skeleton from "@/components/global/skeleton";

export default function HeaderSkeleton() {
  return (
    <header className="app-container header">
      <div className="container wrapper-header">
        {data?.map((key, idx) => {
          return <Skeleton key={idx} style={key} />;
        })}
      </div>
    </header>
  );
}

const data = [
  {
    height: "45px",
    width: "105px",
  },
  {
    height: "45px",
    flex: 1,
  },
  {
    height: "45px",
    width: "112px",
  },
];
