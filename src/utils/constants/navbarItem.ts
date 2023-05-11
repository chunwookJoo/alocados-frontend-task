import { NavbarItem } from "../../types/navbar";
import { ROUTES } from "./routes";

export const NAVBAR_ITEM: NavbarItem[] = [
  {
    id: "1",
    name: "환전하기",
    toLink: ROUTES.EXCHANGE_PAGE,
  },
  {
    id: "2",
    name: "거래내역",
    toLink: ROUTES.EXCHANGE_HISTORY_PAGE,
  },
];
