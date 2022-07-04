// component
import Iconify from "../../components/Iconify";

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: "dashboard",
    path: "",
    icon: getIcon("eva:pie-chart-2-fill"),
  },
  {
    title: "user",
    path: "/update-profile",
    icon: getIcon("eva:people-fill"),
  },
  {
    title: "blog",
    path: "/blog",
    icon: getIcon("eva:file-text-fill"),
  },
  {
    title: "Admin - Handle Application",
    path: "/handle-application",
    icon: getIcon("eva:lock-fill"),
  },
  {
    title: "Admin - Publish Notice",
    path: "/publish",
    icon: getIcon("eva:person-add-fill"),
  },
  {
    title: "Admin - All Applications",
    path: "/admin-all-application",
    icon: getIcon("eva:alert-triangle-fill"),
  },
];

export default sidebarConfig;
