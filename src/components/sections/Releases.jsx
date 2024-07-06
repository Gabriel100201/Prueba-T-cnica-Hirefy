import { DividerRelease } from "../releases-components/Divider"
import { Header } from "../releases-components/Header"
import { StepperRelease } from "../releases-components/StepperRelease"

export const Releases = () => {
  return (
    <section>  
      <Header></Header>
      <DividerRelease></DividerRelease>
      <StepperRelease></StepperRelease>
    </section>
  )
}