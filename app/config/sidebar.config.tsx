 import {
  ArrowLeft,
  ChevronDown,
  ChevronRight,
  Crown,
  FileChartColumn,
  LayoutTemplate,
  Package,
  Plus,
  Settings,
  ShieldCheck,
  ShoppingBag,
  Tag,
  Users,
} from "lucide-react";

export const menus = [
  {
    section: "general",
    items: [
      {
        name: "dashboard",
        icon: <LayoutTemplate size={18} />,
        hasDropdown: false,
        path: "/app/dashboard",
      },
      {
        name: "parties",
        icon: <Users size={18} />,
        hasDropdown: false,
        path: "/app/home/parties",
      },
      {
        name: "items",
        icon: <Package size={18} />,
        hasDropdown: true,
        path: "/app/home/items",
        subMenus: [
          { name: "Inventory", path: "/app/home/items" },
          { name: "Godown (Warehouse)", path: "/app/home/godown" },
        ],
      },
      {
        name: "sales",
        icon: <Tag size={18} />,
        hasDropdown: true,
        path: "/app/home/sales-invoice",
        subMenus: [
          { name: "Sales Invoices", path: "/app/home/sales-invoice" },
          { name: "Quotation / Estimate", path: "/app/home/quotation" },
          { name: "Payment In", path: "/app/home/payment-in" },
          { name: "Sales Return", path: "/app/home/sales-return" },
          { name: "Credit Note", path: "/app/home/credit-note" },
          { name: "Delivery Challan", path: "/app/home/delivery-challan" },
          { name: "Proforma Invoice", path: "/app/home/proforma" },
        ],
      },
      {
        name: "purchases",
        icon: <ShoppingBag size={18} />,
        hasDropdown: true,
        path: "/app/home/purchase-invoice",
        subMenus: [
          { name: "Purchase Invoices", path: "/app/home/purchase-invoice" },
          { name: "Payment Out", path: "/app/home/payment-out" },
          { name: "Purchase Return", path: "/app/home/purchase-return" },
          { name: "Debit Note", path: "/app/home/debit-note" },
          { name: "Purchase Orders", path: "/app/home/purchase-orders" },
        ],
      },
      {
        name: "reports",
        icon: <FileChartColumn size={18} />,
        hasDropdown: false,
        path: "/app/reports/dashboard",
      },
    ],
  },
  {
    section: " Accounting Solutions",
    items: [
      {
        name: "cash & bank",
        icon: <LayoutTemplate size={18} />,
        path: "/app/home/cash-bank",
      },
      {
        name: "E-invoicing",
        icon: <Users size={18} />,
        isRightArrowShow: false,
        path: "/app/home/e-invoicing",
      },
      {
        name: "automated bills",
        icon: <Package size={18} />,
        isRightArrowShow: true,
        path: "/app/home/automated-billing",
      },
      {
        name: "expenses",
        icon: <Tag size={18} />,
        isRightArrowShow: true,
        path: "/app/home/expenses",
      },
      {
        name: "POS billing",
        icon: <ShoppingBag size={18} />,
        isRightArrowShow: true,
        path: "/app/pos",
      },
    ],
  },
  {
    section: "Business Tools",
    items: [
      {
        name: "staff attendance & payroll",
        icon: <Users size={18} />,
        path: "/app/sam/onboarding",
      },
      {
        name: "manage users",
        icon: <Package size={18} />,
        path: "/app/settings/user-management",
      },
      {
        name: "online orders",
        icon: <Tag size={18} />,
        path: "/app/home/online-orders",
      },
      {
        name: "SMS marketings",
        icon: <ShoppingBag size={18} />,
      },
      {
        name: "Apply for loan",
        icon: <FileChartColumn size={18} />,
      },
    ],
  },
];

export const createMenus = [
  {
    section: "general",
    items: [
      {
        name: "Create Party",
        icon: <LayoutTemplate size={18} />,
        path: "/app/home/add-party",
      },
      { name: "Create Item", icon: <Users size={18} /> },
    ],
  },
  {
    section: "Sales Transactions",
    items: [
      {
        name: "Quotation",
        icon: <LayoutTemplate size={18} />,
      },
      {
        name: "Payment In",
        icon: <Users size={18} />,
      },
      {
        name: "Sales Return",
        icon: <Package size={18} />,
      },
      {
        name: "Credit Note",
        icon: <Tag size={18} />,
        isRightArrowShow: true,
      },
      {
        name: "Delivery Challan",
        icon: <ShoppingBag size={18} />,
      },
      {
        name: "Proforma Invoice",
        icon: <ShoppingBag size={18} />,
      },
    ],
  },
  {
    section: "Purchase Transactions",
    items: [
      { name: "Purchase", icon: <Users size={18} /> },
      { name: "Payment Out", icon: <Package size={18} /> },
      { name: "Purchase Return", icon: <Tag size={18} /> },
      {
        name: "Debit Note",
        icon: <ShoppingBag size={18} />,
      },
      {
        name: "Purchase Orders",
        icon: <FileChartColumn size={18} />,
      },
    ],
  },
];
