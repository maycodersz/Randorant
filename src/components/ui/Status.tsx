import type { StatusProps } from "../../props";

const Status : React.FC<StatusProps> = ({statuses}) => {
  return (
    <div className="">
        {statuses && statuses.length && statuses.map(status => {
            return(
                <div className="">
                    <h1 className="">{status.status}</h1>
                    <p className="">{status.description}</p>
                </div>
            );
        })}
    </div>
  )
}

export default Status