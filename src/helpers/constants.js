import blogPost from "../Images/Blog Posts Icon.svg";
import orders from "../Images/Add New Post Icon.svg";
import menu from "../Images/Overview (Components) Icon.svg";
import menu1 from "../Images/Forms & Components Icon.svg";
import person from "../Images/Person Icon.svg";
import warring from "../Images/Error Icon.svg";
import pensil from "../Images/pensil.svg";

export const tokenExpire = new Date(new Date().getTime() + 240 * 60 * 1000);

export const menuItem = [
  // { id: 1, link: "/", src: pensil, name: "Карточка Автомобиля" },
  { id: 2, link: "/", src: blogPost, name: "Список авто" },
  { id: 3, link: "/Orders", src: orders, name: "Заказы" },
  { id: 4, link: "/", src: menu, name: "Меню 4" },
  { id: 5, link: "/", src: menu1, name: "Меню 5" },
  { id: 6, link: "/", src: person, name: "Меню 6" },
  { id: 7, link: "/", src: warring, name: "Меню 7" },
];
