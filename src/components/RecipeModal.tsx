import { RecipeCardType } from "@/types/Redux.types";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Image,
  Text,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";

interface RecipeModalProps {
  recipe: RecipeCardType;
  isOpen: boolean;
  onClose: () => void;
}

const RecipeModal:React.FC<RecipeModalProps> = ({ recipe, isOpen, onClose }) => {

  //parses the instructions into line breaks
  function formatInstructions(instructions: string) {
    return instructions.split("\n").map((instruction, index) => (
      <Text key={index} mt={2} dangerouslySetInnerHTML={{__html: instruction.replace(/\n/g, '<br/>')}}></Text>
    ));
  }


  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW="80%">
        <ModalHeader
        fontFamily="junicode"
        >{recipe.strMeal}</ModalHeader>
        <ModalCloseButton />
        <ModalBody justifyContent="space-between" display="flex" flexDirection="row">
          <Box
          height="50%"
          width="50%"
          >
            <Image height="100%" width="100%" src={recipe.strMealThumb} alt={recipe.strMeal} />
          </Box>
          <Box
          display="flex"
          flexDirection="column"
          width="40%"
          border="1px solid black"
          >
            <Accordion>
              <AccordionItem>
                <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                  Instructions
                </Box>
                <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  {formatInstructions(recipe.strInstructions)}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default RecipeModal;