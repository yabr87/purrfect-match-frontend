import AddPetForm from "components/AddPetForm";
import { AddPetWrapper } from "./AddPetPage.styles";
import Container from "shared/components/Container";


const AddPetPage = () => {
  return (
    <Container>
      <AddPetWrapper>
        <AddPetForm />
      </AddPetWrapper>
    </Container>
  );
};

export default AddPetPage;
