import React, { useContext } from "react";
import * as Yup from "yup";

import AppScreen from "../AppScreen";
import FromContainer from "./FormContainer";
import FormField from "./FormField";
import PickerField from "./PickerField";
import SubmitButton from "./SubmitButton";
import ImageField from "./ImageField";
import colors from "../../config/colors";

import { saveList } from "../../services/listService";

const validationSchema = Yup.object().shape({
  //images: Yup.array().min(1, "You must insert at least image."),
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().label("Price"),
  description: Yup.string().required().label("Description"),
  categories: Yup.string().required().nullable().label("categories"),
});

const categories = [
  { label: "Furniture", id: 1 },
  { label: "Clothing", id: 2 },
  { label: "Camera", id: 3 },
  { label: "Mobile", id: 4 },
  { label: "Games", id: 5 },
];

export default function AppListingForm() {
  const onSubmit = async (values, { resetForm }) => {
    //await saveList(values);
    console.log(values);
    //resetForm();
  };
  return (
    <AppScreen>
      <FromContainer
        initialValues={{
          title: "",
          price: "",
          categories: null,
          description: "",
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <>
          <FormField
            name="title"
            iconType="format-title"
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="always"
            keyboardType="default"
            placeholder="Title"
          />
          <FormField
            name="price"
            iconType="dollar"
            width="42%"
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="always"
            keyboardType="numeric"
            placeholder="Price"
          />
          <PickerField
            name="categories"
            placeholder="Categories"
            items={categories}
            width="60%"
          />
          <FormField
            name="description"
            iconType="subtitles-outline"
            multiline
            autoCapitalize="none"
            autoCorrect={true}
            keyboardType="default"
            placeholder="Description"
          />
          <SubmitButton title="Post" color={colors.primary} />
        </>
      </FromContainer>
    </AppScreen>
  );
}
