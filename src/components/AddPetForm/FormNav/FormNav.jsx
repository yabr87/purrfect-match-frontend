import { NavContainer, ActiveStep, FinalizedStep, Step } from "./FormNav.styles";

const Nav = ({ currentStep }) => {
return (
<NavContainer>
<Step active={currentStep === 1}>
Choose option
</Step>
<Step active={currentStep === 2} disabled={currentStep < 2}>
Personal details
</Step>
<Step active={currentStep === 3} disabled={currentStep < 3}>
More info
</Step>
</NavContainer>
);
};

export default Nav;