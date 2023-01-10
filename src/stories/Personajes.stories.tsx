import { ComponentStory, ComponentMeta } from "@storybook/react";
import Personaje from "./Personaje";

export default {
  title: "Personajes",
  component: Personaje,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Personaje>;

const Template: ComponentStory<typeof Personaje> = (args: any) => (
  <Personaje {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  boolean: false,
  backgroundColor: "red",
};
export const Secondary = Template.bind({});
Secondary.args = {
  boolean: true,
  backgroundColor: "dark",
};
