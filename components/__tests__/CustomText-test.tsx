import * as React from "react";
import renderer from "react-test-renderer";

import CustomText from "../CustomText";
import { Text } from "react-native";

describe("CustomText", () => {
  it("renders with default props", () => {
    const tree = renderer
      .create(<CustomText>Default text</CustomText>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders with custom color", () => {
    const tree = renderer
      .create(<CustomText color="secondary">Custom color text</CustomText>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders with custom type", () => {
    const tree = renderer
      .create(<CustomText type="title">Title text</CustomText>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders with custom style", () => {
    const customStyle = { fontSize: 24, fontWeight: "bold" };
    const tree = renderer
      .create(<CustomText style={customStyle}>Custom style text</CustomText>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders with children", () => {
    const tree = renderer
      .create(
        <CustomText>
          <Text>Hello</Text> <Text>World!</Text>
        </CustomText>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("overrides default color with custom color", () => {
    const tree = renderer
      .create(
        <CustomText color="tertiary" type="title">
          Custom color title text
        </CustomText>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
