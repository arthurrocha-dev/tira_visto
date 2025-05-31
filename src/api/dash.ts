import type { DashData } from "../interfaces/dash";
import { Axios } from "./axios.config";

const getData = async () => {
  return Axios().get<DashData[]>("dash");
};

export default {
  getData,
};
