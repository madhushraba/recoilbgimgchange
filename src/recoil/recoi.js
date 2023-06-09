import { atom } from "recoil";
import { getData } from "../utils/services";

export const Watch = atom({
  key: "watch",
  default: false,
});

export const ShowActivity = atom({
  key: "showActivity",
  default: false,
});

export const showDialog = atom({
  key: "showDialog",
  default: false,
});

export const uidOfListItem = atom({
  key: "uidOfListItem",
  default: "",
});

export const list = atom({
  key: "list",
  default: getData(),
});

export const atomListUid = atom({
  key: "atomListUid",
  default: '',
});

export const atomCardName = atom({
  key: 'atomCardName',
  default:'',
})
export const wallpaper = atom({
  key: 'wallpaper',
  default:'https://images.pexels.com/photos/9983158/pexels-photo-9983158.jpeg?auto=compress&cs=tinysrgb&w=600',
})