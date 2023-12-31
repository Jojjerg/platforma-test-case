import { User } from "@/@types/User";

const getDate = () => {
  return new Date(Date.now() + Math.floor(6 + Math.random() * (27 - 6 + 1))).toLocaleString();
};

const getConsumption = () => {
  return Math.floor(6 + Math.random() * (27 - 6 + 1));
};

let _id = 0;

const id = () => _id++

export const userData: User[] = [
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Leanne Graham",
    city: "Gwenborough",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Leanne Graham",
    city: "Gwenborough",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Leanne Graham",
    city: "Gwenborough",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Ervin Howell",
    city: "Wisokyburgh",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Clementine Bauch",
    city: "McKenziehaven",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Patricia Lebsack",
    city: "South Elvis",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Chelsey Dietrich",
    city: "Roscoeview",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Mrs. Dennis Schulist",
    city: "South Christy",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Kurtis Weissnat",
    city: "Howemouth",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Nicholas Runolfsdottir V",
    city: "Aliyaview",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Glenna Reichert",
    city: "Bartholomebury",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Clementina DuBuque",
    city: "Lebsackbury",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Leanne Graham",
    city: "Gwenborough",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Ervin Howell",
    city: "Wisokyburgh",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Clementine Bauch",
    city: "McKenziehaven",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Patricia Lebsack",
    city: "South Elvis",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Chelsey Dietrich",
    city: "Roscoeview",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Mrs. Dennis Schulist",
    city: "South Christy",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Kurtis Weissnat",
    city: "Howemouth",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Nicholas Runolfsdottir V",
    city: "Aliyaview",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Glenna Reichert",
    city: "Bartholomebury",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Clementina DuBuque",
    city: "Lebsackbury",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Leanne Graham",
    city: "Gwenborough",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Ervin Howell",
    city: "Wisokyburgh",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Clementine Bauch",
    city: "McKenziehaven",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Patricia Lebsack",
    city: "South Elvis",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Chelsey Dietrich",
    city: "Roscoeview",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Mrs. Dennis Schulist",
    city: "South Christy",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Kurtis Weissnat",
    city: "Howemouth",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Nicholas Runolfsdottir V",
    city: "Aliyaview",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Glenna Reichert",
    city: "Bartholomebury",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Clementina DuBuque",
    city: "Lebsackbury",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Leanne Graham",
    city: "Gwenborough",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Ervin Howell",
    city: "Wisokyburgh",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Clementine Bauch",
    city: "McKenziehaven",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Patricia Lebsack",
    city: "South Elvis",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Chelsey Dietrich",
    city: "Roscoeview",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Mrs. Dennis Schulist",
    city: "South Christy",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Kurtis Weissnat",
    city: "Howemouth",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Nicholas Runolfsdottir V",
    city: "Aliyaview",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Glenna Reichert",
    city: "Bartholomebury",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Clementina DuBuque",
    city: "Lebsackbury",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Leanne Graham",
    city: "Gwenborough",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Ervin Howell",
    city: "Wisokyburgh",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Clementine Bauch",
    city: "McKenziehaven",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Patricia Lebsack",
    city: "South Elvis",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Chelsey Dietrich",
    city: "Roscoeview",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Mrs. Dennis Schulist",
    city: "South Christy",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Kurtis Weissnat",
    city: "Howemouth",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Nicholas Runolfsdottir V",
    city: "Aliyaview",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Glenna Reichert",
    city: "Bartholomebury",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Clementina DuBuque",
    city: "Lebsackbury",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Leanne Graham",
    city: "Gwenborough",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Ervin Howell",
    city: "Wisokyburgh",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Clementine Bauch",
    city: "McKenziehaven",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Patricia Lebsack",
    city: "South Elvis",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Chelsey Dietrich",
    city: "Roscoeview",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Mrs. Dennis Schulist",
    city: "South Christy",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Kurtis Weissnat",
    city: "Howemouth",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Nicholas Runolfsdottir V",
    city: "Aliyaview",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Glenna Reichert",
    city: "Bartholomebury",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Clementina DuBuque",
    city: "Lebsackbury",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Leanne Graham",
    city: "Gwenborough",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Ervin Howell",
    city: "Wisokyburgh",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Clementine Bauch",
    city: "McKenziehaven",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Patricia Lebsack",
    city: "South Elvis",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Chelsey Dietrich",
    city: "Roscoeview",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Mrs. Dennis Schulist",
    city: "South Christy",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Kurtis Weissnat",
    city: "Howemouth",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Nicholas Runolfsdottir V",
    city: "Aliyaview",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Glenna Reichert",
    city: "Bartholomebury",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Clementina DuBuque",
    city: "Lebsackbury",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Leanne Graham",
    city: "Gwenborough",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Ervin Howell",
    city: "Wisokyburgh",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Clementine Bauch",
    city: "McKenziehaven",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Patricia Lebsack",
    city: "South Elvis",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Chelsey Dietrich",
    city: "Roscoeview",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Mrs. Dennis Schulist",
    city: "South Christy",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Kurtis Weissnat",
    city: "Howemouth",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Nicholas Runolfsdottir V",
    city: "Aliyaview",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Glenna Reichert",
    city: "Bartholomebury",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Clementina DuBuque",
    city: "Lebsackbury",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Leanne Graham",
    city: "Gwenborough",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Ervin Howell",
    city: "Wisokyburgh",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Clementine Bauch",
    city: "McKenziehaven",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Patricia Lebsack",
    city: "South Elvis",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Chelsey Dietrich",
    city: "Roscoeview",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Mrs. Dennis Schulist",
    city: "South Christy",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Kurtis Weissnat",
    city: "Howemouth",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Nicholas Runolfsdottir V",
    city: "Aliyaview",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Glenna Reichert",
    city: "Bartholomebury",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Clementina DuBuque",
    city: "Lebsackbury",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Leanne Graham",
    city: "Gwenborough",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Ervin Howell",
    city: "Wisokyburgh",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Clementine Bauch",
    city: "McKenziehaven",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Patricia Lebsack",
    city: "South Elvis",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Chelsey Dietrich",
    city: "Roscoeview",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Mrs. Dennis Schulist",
    city: "South Christy",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Kurtis Weissnat",
    city: "Howemouth",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Nicholas Runolfsdottir V",
    city: "Aliyaview",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Glenna Reichert",
    city: "Bartholomebury",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Clementina DuBuque",
    city: "Lebsackbury",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Leanne Graham",
    city: "Gwenborough",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Ervin Howell",
    city: "Wisokyburgh",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Clementine Bauch",
    city: "McKenziehaven",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Patricia Lebsack",
    city: "South Elvis",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Chelsey Dietrich",
    city: "Roscoeview",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Mrs. Dennis Schulist",
    city: "South Christy",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Kurtis Weissnat",
    city: "Howemouth",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Nicholas Runolfsdottir V",
    city: "Aliyaview",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Glenna Reichert",
    city: "Bartholomebury",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Clementina DuBuque",
    city: "Lebsackbury",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Leanne Graham",
    city: "Gwenborough",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Ervin Howell",
    city: "Wisokyburgh",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Clementine Bauch",
    city: "McKenziehaven",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Patricia Lebsack",
    city: "South Elvis",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Chelsey Dietrich",
    city: "Roscoeview",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Mrs. Dennis Schulist",
    city: "South Christy",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Kurtis Weissnat",
    city: "Howemouth",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Nicholas Runolfsdottir V",
    city: "Aliyaview",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Glenna Reichert",
    city: "Bartholomebury",
  },
  {
    id: id(),
    date: getDate(),
    consumption: getConsumption(),
    name: "Clementina DuBuque",
    city: "Lebsackbury",
  },
];
