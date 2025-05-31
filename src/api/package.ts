import type { Package } from "../interfaces/package";
import { Axios } from "./axios.config";

const fetchPackage = async () => {
  return Axios().get<Package[]>("packages");
};

export default {
  fetchPackage,
};
