import { LucideIcon } from "lucide-react";

export interface Icontent {
  id: number;
  name: string;
  router: string;
}

export interface IMenuLink {
  id?: number;
  name: string;
  content: Icontent[];
  className?: string;
}

export interface IiconNavLinks {
  Icons: LucideIcon;
  value: number;
  router: string;
  size: number;
  className?: string;
}

export interface IBottomNavigationBar {
  id: number;
  name: string;
  Icon: LucideIcon;
  router: string;
}

export interface IitemBottomNavigationBar {
  name: string;
  Icon: LucideIcon;
  router: string;
}
