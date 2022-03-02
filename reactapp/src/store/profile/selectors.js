import { AUTHORS } from "../../utils/constants";

export const selectName = (state) => state.profile.name || AUTHORS.human;