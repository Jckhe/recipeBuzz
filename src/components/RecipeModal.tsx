import { RecipeModalProps } from "@/types/Component.types";
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
  Button,
  ListItem,
  UnorderedList,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import { FaYoutube } from "react-icons/fa";

//The recipe modal is the pop up that will display more information and expanded view of the recipe card.
// this component rests within the Recipe Card component and is lazy loaded UNTIL the modal's state is true.

const RecipeModal: React.FC<RecipeModalProps> = ({
  recipe,
  isOpen,
  onClose,
}) => {
  //parses the instructions into line breaks
  function formatInstructions(instructions: string) {
    return instructions.split("\n").map((instruction, index) => (
      <Text
        key={index}
        mt={2}
        dangerouslySetInnerHTML={{
          __html: instruction.replace(/\n/g, "<br/>"),
        }}
      ></Text>
    ));
  }

  function openURL() {
    const url = recipe.strYoutube;
    window.open(url, "_blank");
  }

  // Convert the recipe object to arrays for ingredients and measurements
  const ingredients = [];
  const measurements = [];

  for (let i = 1; i <= 20; i++) {
    const ingredientKey = `strIngredient${i}` as keyof RecipeCardType;
    const measureKey = `strMeasure${i}` as keyof RecipeCardType;
    if (recipe[ingredientKey])
      ingredients.push({ key: ingredientKey, value: recipe[ingredientKey] });
    if (recipe[measureKey])
      measurements.push({ key: measureKey, value: recipe[measureKey] });
    if (!recipe[ingredientKey] && !recipe[measureKey]) {
      break;
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        height={{
          'base': 'auto',
          'sm': '100%'
        }}
        overflow="hidden"
        maxW={{ base: "87.5%", md: "80%" }}
        p={5}
      >
        <ModalHeader
          textAlign="center"
          fontFamily="junicode"
          fontSize={35}
          display="flex"
          flexDirection="column"
        >
          {recipe.strMeal}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody
          justifyContent="flex-start"
          display="flex"
          alignItems="center"
          gap={3}
          height="100%"
          flexDirection="column"
        >
          <Box 
          display="flex"
          objectFit="contain"
          height={{
            'base': '15%',
            'sm': '25%',
            'md': '30%'
          }} 
          width={{
            'base': '50%',
            'sm': '20%',
            'md': '17.5%'
          }}
          >
            <Image
              border="1px solid gray"
              height="100%"
              width="100%"
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
            />
          </Box>
            <Box height="10%">
              <Button
              onClick={openURL}
              // width={{
              //   'base': '50%',
              //   'sm': '20%',
              //   'md': '12.5%',
              // }}
              size="md"
              colorScheme="red"
              leftIcon={<FaYoutube />}
            >
              <Text fontFamily="junicode">Youtube</Text>
            </Button>
            </Box>
          <Tabs
          width={{
            'base': 'auto',
            'md': '100%'
          }}
          height={{
            'base': '100%',
          }}
          >
            <TabList justifyContent="center">
              <Tab>Instructions</Tab>
              <Tab>Ingredients</Tab>
              <Tab>Measurements</Tab>
            </TabList>
              <TabPanels p={5} width="100%" height="60%">
                <TabPanel borderBottom={{'base': "1px solid black", 'sm': 'none'}} height={{'base': '80%', 'sm': '130%'}} width="100%" overflowY={{'base': 'hidden', 'sm': 'scroll'}}>
                  {formatInstructions(recipe.strInstructions)}
                </TabPanel>
                <TabPanel borderBottom={{'base': "1px solid black", 'sm': 'none'}} height={{'base': '80%', 'sm': '130%'}} width="100%" overflowY={{'base': 'hidden', 'sm': 'scroll'}} >
                  <UnorderedList>
                      {ingredients.map(({ key, value }) => (
                        <ListItem key={key}>{value}</ListItem>
                      ))}
                    </UnorderedList>
                </TabPanel>
                <TabPanel borderBottom={{'base': "1px solid black", 'sm': 'none'}} height={{'base': '80%', 'sm': '130%'}} width="100%" overflowY={{'base': 'hidden', 'sm': 'scroll'}} >
                    <UnorderedList>
                      {measurements.map(({ key, value }) => (
                        <ListItem key={key}>{value}</ListItem>
                      ))}
                    </UnorderedList>
                </TabPanel>
              </TabPanels>
            </Tabs>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

// Accordian approach
// <Accordion allowMultiple>
// {/* Ingredients */}
// <AccordionItem>
//   <AccordionButton>
//   <Box as="span" flex='1' textAlign='left'>
//     Ingredients
//   </Box>
//   <AccordionIcon />
//   </AccordionButton>
//   <AccordionPanel pb={4}>
//   <UnorderedList>
//       {ingredients.map(({key, value}) => (
//         <ListItem key={key}>{value}</ListItem>
//       ))}
//     </UnorderedList>
//   </AccordionPanel>
// </AccordionItem>
// {/* Measurements */}
// <AccordionItem>
//   <AccordionButton>
//   <Box as="span" flex='1' textAlign='left'>
//     Measurements
//   </Box>
//   <AccordionIcon />
//   </AccordionButton>
//   <AccordionPanel pb={4}>
//   <UnorderedList>
//       {measurements.map(({key, value}) => (
//         <ListItem key={key}>{value}</ListItem>
//       ))}
//     </UnorderedList>
//   </AccordionPanel>
// </AccordionItem>
// {/* Instructions */}
// <AccordionItem>
//   <AccordionButton>
//   <Box as="span" flex='1' textAlign='left'>
//     Instructions
//   </Box>
//   <AccordionIcon />
//   </AccordionButton>
//   <AccordionPanel pb={4}>
//     {formatInstructions(recipe.strInstructions)}
//   </AccordionPanel>
// </AccordionItem>
// </Accordion>

export default RecipeModal;
