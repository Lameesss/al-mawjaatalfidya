import {
  Activity,
  BedDouble,
  Syringe,
  ArrowRight,
  ArrowLeft,
  Menu,
  X,
  Search,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  CheckCircle2,
  Send,
  Package,
  Baby,
  ShieldCheck,
  Globe2,
  Stethoscope,
  type LucideProps,
} from 'lucide-react';
import type { ComponentType } from 'react';

const ICONS: Record<string, ComponentType<LucideProps>> = {
  Activity,
  BedDouble,
  Syringe,
  ArrowRight,
  ArrowLeft,
  Menu,
  X,
  Search,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  CheckCircle2,
  Send,
  Package,
  Baby,
  ShieldCheck,
  Globe2,
  Stethoscope,
};

export type IconName = keyof typeof ICONS;

interface IconProps extends LucideProps {
  name: string;
}

export function Icon({ name, ...props }: IconProps) {
  const Component = ICONS[name] ?? Package;
  return <Component aria-hidden="true" {...props} />;
}
