import {
  FaImage,
  FaUser,
  FaCoins,
  FaVrCardboard,
  FaAudioDescription,
} from "react-icons/fa";

export const productFields = [
  {
    ph: "Product Name",
    icon: "",
    field: "name",
  },
  {
    ph: "Type",
    icon: <FaVrCardboard />,
    field: "type",
    dropdown: ["Cakes", "Drinks"],
  },
  {
    ph: "Price (php)",
    icon: <FaCoins />,
    field: "price",
    type: "number",
  },
  {
    ph: "Description",
    icon: <FaAudioDescription />,
    field: "description",
  },
  {
    ph: "Image",
    icon: <FaImage />,
    field: "image",
    file: true,
  },
];
