import DetailsHeader from "./DetailsHeader";
import DetailsList from "./DetailsList";

export function Details() {
  return (
    <div className="flex min-w-[300px] flex-1  flex-col ">
      <DetailsHeader />
      <DetailsList />
    </div>
  );
}
