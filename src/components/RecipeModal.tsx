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
  List,
  ListIcon,
  ListItem,
  UnorderedList,
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

  //converts the ingredients object to an array
  const ingredients = Object.entries(recipe.strIngredient).map(([key, value]) => ({key, value}));
  const measurements = Object.entries(recipe.strMeasure).map(([key, value]) => ({key, value}));
  console.log("measurements: ", recipe.strMeasure)

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW="80%">
        <ModalHeader
        textAlign="center"
        fontFamily="junicode"
        >
          {recipe.strMeal}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody justifyContent="space-between" display="flex" alignItems="center" gap={3} flexDirection="column">
          <Box
          height="10%"
          width="20%"
          >
            <Image height="100%" width="100%" src={recipe.strMealThumb} alt={recipe.strMeal} />
          </Box>
          <Box
          display="flex"
          flexDirection="column"
          width="40%"
          border="1px solid black"
          >
            <Accordion allowMultiple>
              {/* Ingredients */}
              <AccordionItem>
                <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                  Ingredients
                </Box>
                <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                <UnorderedList>
                    {ingredients.map(({key, value}) => (
                      <ListItem key={key}>{value}</ListItem>
                    ))}
                  </UnorderedList>
                </AccordionPanel>
              </AccordionItem>
              {/* Measurements */}
              <AccordionItem>
                <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                  Measurements
                </Box>
                <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                <UnorderedList>
                    {measurements.map(({key, value}) => (
                      <ListItem key={key}>{value}</ListItem>
                    ))}
                  </UnorderedList>
                </AccordionPanel>
              </AccordionItem>
              {/* Instructions */}
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