import { useState } from "react"
import { DividerRelease } from "../releases-components/Divider"
import { Header } from "../releases-components/Header"
import { StepperRelease } from "../releases-components/StepperRelease"

export const Releases = () => {

  const [filterStatus, setFilterStatus] = useState(null);

  const handleFilterChange = (status) => {
    setFilterStatus(status);
  };

  return (
    <section>  
      <Header filterStatus={filterStatus} handleFilterChange={handleFilterChange}></Header>
      <DividerRelease></DividerRelease>
      <StepperRelease filterStatus={filterStatus}></StepperRelease>
    </section>
  )
}